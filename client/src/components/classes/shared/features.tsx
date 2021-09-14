import React from 'react'
import { cloneDeep } from 'lodash'
interface IStringType {
  entry: string
}
const StringType: React.FC<IStringType> = ({ entry }) => <div>{entry}</div>

interface IListType {
  entry: {
    items:
      | string[]
      | {
          type: string
          name: string
          entry: string
        }[]
  }
}
const ListType: React.FC<IListType> = ({ entry }) => (
  <ul className='list-disc list-inside mt-2 mb-2'>
    {entry.items.map((x,i) => {
      if (typeof x === 'string') {
        return <li key={x}>{x}</li>
      }

      return (
        <div key={i}>
          <div className='italic'>{x.name}</div>
          <div>{x.entry}</div>
        </div>
      )
    })}
  </ul>
)

interface IEntryType {
  entry: {
    name: string
    entries: string[]
  }
}

const EntryType: React.FC<IEntryType> = ({ entry }) => (
  <div>
    <div>{entry.name}</div>
    {entry.entries.map((e) => (
      <div key={e}>{e}</div>
    ))}
  </div>
)

interface ITableType {
  entry: {
    caption: string
    colLabels: string[]
    rows: [string[]]
  }
}

const TableType: React.FC<ITableType> = ({ entry }) => (
  <>
    <div className='italic'>{entry.caption}</div>
    <div className='table'>
      <div className='table-header-group font-semibold'>
        {entry.colLabels.map((cl, i) => (
          <div className='table-cell pl-2' key={i}>
            {cl}
          </div>
        ))}
      </div>
      {entry.rows.map((row) => (
        <div className='table-row'>
          {row.map((col) => (
            <div className='table-cell pl-2' key={col}>
              {col}
            </div>
          ))}
        </div>
      ))}
    </div>
  </>
)

interface IFeatureProps {
  features: any[]
}
const Features: React.FC<IFeatureProps> = ({ features }) => {
  const copied = cloneDeep(features)
  const features2 = copied.map(feat=> {
    try {
      feat.entries = JSON.parse(feat.entries).e
    } 
    catch {
      
    }
    
    return feat
  })
  
  return (
    <div className='space-y-2'>
      {features2.map((x) => (
        <div className='border p-2 text-sm shadow-sm' key={x.id}>
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
                    <ListType entry={x} />
                  </div>
                )
              } else if (x.type === 'entry') {
                return (
                  <div key={i}>
                    <EntryType entry={x} />
                  </div>
                )
              } else if (x.type === 'table') {
                return (
                  <div key={i} className='mt-2'>
                    <TableType entry={x} />
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
