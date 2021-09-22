import React, { useState } from 'react'
import { SpellType } from '../../../lib/types'

interface Props {
  rawSpell: SpellType
}

const formatSpell = (spell: any) => {
  const range = JSON.parse(spell.range)
  const formatted = { ...spell }
  formatted.range = range
  return formatted
}

const buildDescTypeEntries = (desc: any) => {
  return (
    <div className='label-text-pair-outer space-y-4' key={_getRandoNum()}>
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
      <div className='label-text-pair-outer'>
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

const Spell: React.FC<Props> = ({ rawSpell }) => {
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

  return (
    <div className='bg-white'>
      <div
        className='spell-preview'
        onClick={() => setDetailsActive(!detailsActive)}
      >
        <div className='spell-preview-name'>{spell.name}</div>
        <div className='spell-preview-subhead'>
          {spell.level}{' '}
          {spell.concentration === true ? (
            <span>&bull; Concentration</span>
          ) : (
            ''
          )}
        </div>
        <span className='expand-spell'>
          {detailsActive === false ? '+' : '-'}
        </span>
      </div>
      <div
        className={
          detailsActive ? 'spell-detail active space-y-4' : 'spell-detail'
        }
      >
        <div className='italic-lead'>
          {spell.level} {spell.school}
        </div>
        <div>
          <div className='label-text-pair-outer'>
            <div>Casting Time.</div>
            <div>{spell.castingTime}</div>
          </div>
          <div className='label-text-pair-outer'>
            <div>Range/Area.</div>
            <div>{getRangeTextFromHash()}</div>
          </div>
          <div className='label-text-pair-outer'>
            <div>Components.</div>
            <div>
              {spell.components} {spell.material ? `(${spell.material})` : null}
            </div>
          </div>
          <div className='label-text-pair-outer'>
            <div>Duration.</div>
            <div>{spell.duration}</div>
          </div>
          <div className='label-text-pair-outer'>
            <div>Source.</div>
            <div>{spell.page}</div>
          </div>
        </div>
        <div>{buildSpellDescriptHtml(spell)}</div>
        {buildHigherLevelHtml(spell.higherLevel)}
      </div>
    </div>
  )
}

export default Spell

function _getRandoNum() {
  return Math.random()
}
