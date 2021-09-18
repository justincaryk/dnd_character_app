import React, { useEffect, useState } from 'react'
import classnames from 'classnames'
import { numberToSpeakable } from '../../lib/utils'
interface Props {
  feature: {
    id: string
    entries: any
    classSource: string
    isClassFeatureVariant: string
    level: number
    name: string
    page: number
    source: string
    hasOptions?: boolean
  }
  viewOnly?: boolean
}

interface OptionsTypeProps {
  options: {
    choose: {
      count: number
      from: any
    }
  }
}
const SkillOptionType: React.FC<OptionsTypeProps> = ({ options }) => {
  const arrayToIterate = Array(options.choose.count).fill('x', 0)
  return (
    <>
      {arrayToIterate.map((x, i) => {
        return (
          <select
            className='w-full border rounded text-sm p-2'
            defaultValue={''}
            key={i}
          >
            <option value=''>- Choose a Skill -</option>
            <option>
              This will require a graphql request to stored skills known
            </option>
          </select>
        )
      })}
    </>
  )
}
const FightOptionType: React.FC<OptionsTypeProps> = ({ options }) => {
  const arrayToIterate = Array(options.choose.count).fill('x', 0)
  
  return (
    <>
      {arrayToIterate.map((x, i) => {
        return (
          <select
            className='w-full border rounded text-sm p-2'
            defaultValue={''}
            key={i}
          >
            <option value=''>- Choose a Fighting Style -</option>
            {options.choose.from.map((x: any) => (
                <option value={x}>{x}</option>
            ))}
          </select>
        )
      })}
    </>
  )
}

interface StringTypeProps {
  entry: string
}
const StringType: React.FC<StringTypeProps> = ({ entry }) => <div>{entry}</div>



const FeatureGeneral: React.FC<Props> = ({ feature, viewOnly }) => {
  const [detailsActive, toggleDetailActive] = useState(false)
  const [entries, setEntries] = useState([])

  useEffect(() => {
    const parsed = JSON.parse(feature.entries).e
    setEntries(parsed)
  }, [feature.entries])
  
  return (
    <div className='space-y-3'>
      <div className='border bg-white'>
        <div
          className={classnames({
            'p-2 hover:bg-cream cursor-pointer': true,
            'bg-cream': detailsActive,
            'border-1 border-sky-blue': feature.hasOptions && !viewOnly ? true : false
          })}
          onClick={() => toggleDetailActive(!detailsActive)}
        >
          <div className='font-roboto'>{feature.name}</div>
          <div className='text-xs text-gray-500'>
            {numberToSpeakable(feature.level)} level
          </div>
        </div>
        {detailsActive && (
          <div className='p-2 text-sm space-y-2'>
            {entries.map((entry: any) => {
              if (typeof entry == 'string') {
                return <StringType entry={entry} />
              }
              if (entry.type === 'skillOptions' && !viewOnly) {
                return <SkillOptionType options={entry.options} />
              }
              if (entry.type === 'fightStyleOptions' && !viewOnly) {
                return <FightOptionType options={entry.options} />
              }
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default FeatureGeneral
