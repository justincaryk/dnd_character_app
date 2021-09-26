import React, { useState } from 'react'
import { SubclassFeature } from '../../../../generated/graphql'
import classnames from 'classnames'
import { numberToSpeakable } from '../../../../lib/utils'

interface ChoicesProps {
  entry: any
  handleSuboptionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const ChoicesBlock: React.FC<ChoicesProps> = ({
  entry,
  handleSuboptionChange,
}) => {
  const emptyArray = Array(entry.count).fill('x', 0)

  return (
    <>
      {emptyArray.map((x: any, j: number) => (
        <select
          className='w-full border rounded text-md p-1'
          defaultValue=''
          key={j}
          onChange={handleSuboptionChange}
        >
          <option value=''>- Choose an Option -</option>
          {entry.entries.map((entry: any, k: number) => {
            if (entry.optionalfeature) {
              return (
                <option key={k} value={entry.optionalfeature.split('|')[0]}>
                  {entry.optionalfeature.split('|')[0]}
                </option>
              )
            } else {
              return (
                <option key={k} value={entry.subclassFeature.split('|')[0]}>
                  {entry.subclassFeature.split('|')[0]}
                </option>
              )
            }
          })}
        </select>
      ))}
    </>
  )
}

interface SubclassFeatureProps {
  feature: SubclassFeature
  featuresFiltered?: SubclassFeature[]
}
const SubclassFeatureGeneral: React.FC<SubclassFeatureProps> = ({
  feature,
  featuresFiltered,
}) => {
  const [detailActive, toggleDetailActive] = useState(false)
  const [suboptSelected, setSuboptSelected] = useState('')

  const handleSuboptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSuboptSelected(e.currentTarget.value)
  }

  if (feature.isSuboption) {
    return null
  }
  return (
    <div className='border bg-white'>
      <div
        className={classnames({
          'p-2 hover:bg-cream cursor-pointer': true,
          'bg-cream': detailActive,
        })}
        onClick={() => toggleDetailActive(!detailActive)}
      >
        <div className='font-roboto'>{feature.name}</div>
        <div className='text-xs text-gray-500'>
          {numberToSpeakable(feature.level ? feature.level : 1)} level
        </div>
      </div>
      {detailActive && (
        <div className='p-2 text-sm space-y-2'>
          {JSON.parse(feature.entries).e.map((entry: any, i: number) => {
            if (typeof entry === 'string') {
              return <div key={i}>{entry}</div>
            }
            if (entry.type === 'options' && entry.count) {
              return (
                <ChoicesBlock
                  entry={entry}
                  handleSuboptionChange={handleSuboptionChange}
                />
              )
            }
            console.log('TODO: ', entry.type)
            console.log(entry)
            return null
          })}
          <div>
            {suboptSelected && featuresFiltered ? (
              <>
                {featuresFiltered
                  .filter((feat) => feat.name === suboptSelected)
                  .map((feat) => (
                    <>
                      {JSON.parse(feat.entries).e.map((x: any, i: number) => {
                        if (typeof x === 'string') {
                          return <div key={i}>{x}</div>
                        }
                        return null
                      })}
                    </>
                  ))}
              </>
            ) : null}
          </div>
        </div>
      )}
    </div>
  )
}

export default SubclassFeatureGeneral
