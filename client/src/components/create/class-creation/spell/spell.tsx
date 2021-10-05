import classnames from 'classnames'
import React, { useState } from 'react'
import { Spell } from '../../../../generated/graphql'

const formatSpell = (spell: any) => {
  const range = JSON.parse(spell.range)
  const formatted = { ...spell }
  formatted.range = range
  return formatted
}

const buildDescTypeEntries = (desc: any) => {
  return (
    <div className='flex gap-x-2 space-y-4' key={_getRandoNum()}>
      <div>{desc.name}.</div>
      {desc.entries.map((entry: any) => {
        if (typeof entry == 'string') {
          return <div key={_getRandoNum()}>{entry}</div>
        }
        if (entry.type) {
          return (
            <ul key={_getRandoNum()}>
              {entry.items.map((item: any) => {
                return <li key={_getRandoNum()}>{item}</li>
              })}
            </ul>
          )
        }
      })}
    </div>
  )
}

const buildDescTypeStr = (desc: string) => {
  return <div key={_getRandoNum()}>{desc}</div>
}

const buildDescTypeList = (desc: any) => {
  return (
    <div key={_getRandoNum()}>
      <ul>
        {desc.items.map((item: string) => {
          return <li key={_getRandoNum()}>{item}</li>
        })}
      </ul>
    </div>
  )
}

const buildDescTypeTable = (desc: any) => {
  // there are two types of tables
  //prob need to figure out a less awful way to differentiate
  let isType2 = false

  try {
    isType2 = desc.rows[0][0].type ? true : false
  } catch {
    isType2 = false
  }

  if (isType2 == true) {
    return (
      <div className='table-outer' key={_getRandoNum()}>
        <div className='caption'>({desc.caption})</div>
        <div className='table-inner'>
          <div className='table-header'>
            {desc.colLabels.map((label: string) => {
              return (
                <div className='table-col' key={_getRandoNum()}>
                  {label}
                </div>
              )
            })}
          </div>
          {desc.rows.map((row: any) => {
            return (
              <div key={_getRandoNum()} className='table-row'>
                {row.map(
                  (col: string | { roll: { min: number; max: number } }) => {
                    if (typeof col != 'string') {
                      const min =
                        col.roll.min < 10 ? `0${col.roll.min}` : col.roll.min
                      const max =
                        col.roll.max < 10 ? `0${col.roll.max}` : col.roll.max
                      const str = `${min} - ${max}`

                      return (
                        <div className='table-col' key={_getRandoNum()}>
                          {str}
                        </div>
                      )
                    }

                    return (
                      <div className='table-col' key={_getRandoNum()}>
                        {col}
                      </div>
                    )
                  }
                )}
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className='table-outer' key={_getRandoNum()}>
      <div className='caption'>({desc.caption})</div>
      <div className='table-inner'>
        <div className='table-header'>
          {desc.colLabels.map((label: string) => {
            return (
              <div className='table-col' key={_getRandoNum()}>
                {label}
              </div>
            )
          })}
        </div>
        {desc.rows.map((row: any) => {
          return (
            <div key={_getRandoNum()} className='table-row'>
              {row.map((colTxt: string) => {
                return (
                  <div className='table-col' key={_getRandoNum()}>
                    {colTxt}
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}

const buildHigherLevelHtml = (higherLevel: string) => {
  if (higherLevel) {
    return (
      <div className='flex gap-x-2'>
        <div>At Higher Levels.</div>
        <div>{higherLevel}</div>
      </div>
    )
  }
  return null
}

const buildSpellDescriptHtml = (spell: any) => {
  const htmlDescriptChunkInner = []

  for (const desc of spell.desc) {
    if (typeof desc == 'string') {
      htmlDescriptChunkInner.push(buildDescTypeStr(desc))
      continue
    }

    if (desc.hasOwnProperty('type')) {
      const type = desc.type

      if (type === 'entries') {
        htmlDescriptChunkInner.push(buildDescTypeEntries(desc))
      }
      if (type === 'list') {
        htmlDescriptChunkInner.push(buildDescTypeList(desc))
      }
      if (type === 'table') {
        htmlDescriptChunkInner.push(buildDescTypeTable(desc))
      }
    }
  }

  return <div className='space-y-4'>{htmlDescriptChunkInner}</div>
}

interface Props {
  rawSpell: Spell
  isKnown: boolean
  onLearnClick: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    spellId: string
  ) => void
  onRemoveClick: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    spellId: string
  ) => void
  viewOnly?: boolean
}

const SpellBlock: React.FC<Props> = ({
  rawSpell,
  isKnown,
  onLearnClick,
  onRemoveClick,
  viewOnly,
}) => {
  const [detailsActive, setDetailsActive] = useState<boolean>(false)
  const [spell] = useState(formatSpell(rawSpell))

  const rangeTextHash: any = {
    point: {
      touch: 'Touch',
      self: 'Self',
      sight: 'Sight',
      unlimited: 'Unlimited',
      amount: `${spell.range.distance?.amount} ${spell.range.distance?.type}`,
    },
    radius: `${spell.range.distance?.amount} ${spell.range.distance?.type} radius`,
    sphere: `${spell.range.distance?.amount} ${spell.range.distance?.type} sphere`,
    cone: `${spell.range.distance?.amount} ${spell.range.distance?.type} cone`,
  }

  const getRangeTextFromHash = () => {
    const range = spell.range
    const type = spell.range.type

    if (type === 'point') {
      if (range.distance.hasOwnProperty('amount')) {
        return rangeTextHash.point.amount
      }

      return rangeTextHash.point[range.distance.type]
    }

    return rangeTextHash[type]
  }

  if (!rawSpell) {
    return null
  }

  return (
    <div className='bg-white text-sm'>
      <div
        className={classnames({
          'flex justify-between items-center hover:bg-cream p-2 border': true,
          'bg-cream': detailsActive,
        })}
        onClick={() => setDetailsActive(!detailsActive)}
      >
        <div>
          <div className='font-bold text-sm'>{spell.name}</div>
          <div className='spell-preview-subhead'>
            {spell.level}{' '}
            {spell.concentration === true ? (
              <span>&bull; Concentration</span>
            ) : (
              ''
            )}
          </div>
        </div>
        <div className='flex items-center gap-x-4'>
          {!viewOnly ? (
            <div>
              {isKnown ? (
                <button
                  className='p-1 text-xs uppercase text-red-400 border-1 font-roboto border-red-400'
                  onClick={(e) => onRemoveClick(e, spell.id)}
                >
                  Remove
                </button>
              ) : (
                <button
                  className='p-1 text-xs uppercase text-green-400 border-1 font-roboto border-green-400'
                  onClick={(e) => onLearnClick(e, spell.id)}
                >
                  Learn
                </button>
              )}
            </div>
          ) : null}

          <div className='text-3xl text-gray-600 font-bold cursor-pointer mb-2'>
            {detailsActive === false ? '+' : '-'}
          </div>
        </div>
      </div>
      <div
        className={classnames({
          'space-y-4 p-2 border': true,
          hidden: !detailsActive,
        })}
      >
        <div className='italic'>
          {spell.level} {spell.school}
        </div>
        <div>
          <div className='flex gap-x-2'>
            <div className='font-bold'>Casting Time.</div>
            <div>{spell.castingTime}</div>
          </div>
          <div className='flex gap-x-2'>
            <div className='font-bold'>Range/Area.</div>
            <div>{getRangeTextFromHash()}</div>
          </div>
          <div className='flex gap-x-2'>
            <div className='font-bold'>Components.</div>
            <div>
              {spell.components} {spell.material ? `(${spell.material})` : null}
            </div>
          </div>
          <div className='flex gap-x-2'>
            <div className='font-bold'>Duration.</div>
            <div>{spell.duration}</div>
          </div>
          <div className='flex gap-x-2'>
            <div className='font-bold'>Source.</div>
            <div>{spell.page}</div>
          </div>
        </div>
        <div>{buildSpellDescriptHtml(spell)}</div>
        {buildHigherLevelHtml(spell.higherLevel)}
      </div>
    </div>
  )
}

export default SpellBlock

function _getRandoNum() {
  return Math.random()
}
