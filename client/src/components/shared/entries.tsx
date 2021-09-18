import React from 'react'

interface ITableType {
    entry: {
      caption: string
      colLabels: string[]
      rows: [string[]]
    }
  }
  
export const EntryTableType: React.FC<ITableType> = ({ entry }) => (
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

interface IEntryType {
  entry: any // worst data model ever
}

export const EntryEntryType: React.FC<IEntryType> = ({ entry }) => {
  if (typeof entry === 'string') {
    return <div>{entry}</div>
  } else if (entry.entries) {
    return (
      <div className='space-y-1'>
        <div className='font-bold'>{entry.name}.</div>
        {entry.entries.map((e: any, i: number) => {
          if (typeof e == 'string') {
            return <div key={e}>{e}</div>
          }

          const predicate =
            e.type.toLowerCase() === 'abilitydc' ? 'save DC' : 'attack modifier'

          return (
            <div key={i} className='font-bold text-center'>
              <strong>
                {e.name} {predicate} = 8 + your proficiency bonus + your{' '}
                <span className='capitalize'>{e.attributes[0]}</span> modifier
              </strong>
            </div>
          )
        })}
      </div>
    )
  } else {
    const predicate =
      entry.type.toLowerCase() === 'abilitydc' ? 'save DC' : 'attack modifier'

    return (
      <div className='font-bold text-center'>
        <strong>
          {entry.name} {predicate} = 8 + your proficiency bonus + your{' '}
          <span className='capitalize'>{entry.attributes[0]}</span> modifier
        </strong>
      </div>
    )
  }
}

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
  
  export const EntryListType: React.FC<IListType> = ({ entry }) => (
    <ul className='list-disc list-inside mt-2 mb-2'>
      {entry.items.map((x, i) => {
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
