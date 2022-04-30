import React from 'react'
import { cloneDeep } from 'lodash'
import {
  EntryEntryType,
  EntryListType,
  EntryTableType,
} from '../../../shared/entries'
interface IStringType {
  entry: string
}
const StringType: React.FC<IStringType> = ({ entry }) => <div>{entry}</div>

interface IFeatureProps {
  features: any[]
}
const Features: React.FC<IFeatureProps> = ({ features }) => {
  const copied = cloneDeep(features)
  const features2 = copied.map(feat => {
    try {
      feat.entries = JSON.parse(feat.entries).e
    } catch {}

    return feat
  })

  return (
    <div className='space-y-2'>
      {features2.map(x => (
        <div
          className='border p-2 text-sm shadow-sm rounded bg-white'
          key={x.id}
        >
          <div
            className={
              x.subclassShortName
                ? 'text-blue-600 font-semibold'
                : 'font-semibold'
            }
          >
            {x.name}
          </div>
          <div className='text-xs italic'>Level {x.level}</div>
          <div>
            {x.entries.map((x: any, i: number) => {
              if (typeof x === 'string') {
                return (
                  <div key={i}>
                    <StringType entry={x} />
                  </div>
                )
              } else if (x.type === 'list') {
                return (
                  <div key={i}>
                    <EntryListType entry={x} />
                  </div>
                )
              } else if (x.type === 'entries') {
                return (
                  <div key={i}>
                    {x.entries.map((entry: any) => {
                      return <EntryEntryType entry={entry} />
                    })}
                  </div>
                )
              } else if (x.type === 'table') {
                return (
                  <div key={i} className='mt-2'>
                    <EntryTableType entry={x} />
                  </div>
                )
              }
              return null
            })}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Features
