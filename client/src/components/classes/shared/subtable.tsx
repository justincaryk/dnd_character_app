import React from 'react'
import { getProficiencyRules } from '../../../lib/utils'

interface ISubtableProps {
  features: {
    [key: string]: string[]
  }
  tableGroups?: any
}

const Subtable: React.FC<ISubtableProps> = ({ features, tableGroups }) => {
  const levels = [
    {
      level: 1,
      label: '1st',
    },
    {
      level: 2,
      label: '2nd',
    },
    {
      level: 3,
      label: '3rd',
    },
    {
      level: 4,
      label: '4th',
    },
    {
      level: 5,
      label: '5th',
    },
    {
      level: 6,
      label: '6th',
    },
    {
      level: 7,
      label: '7th',
    },
    {
      level: 8,
      label: '8th',
    },
    {
      level: 9,
      label: '9th',
    },
    {
      level: 10,
      label: '10th',
    },
    {
      level: 11,
      label: '11th',
    },
    {
      level: 12,
      label: '12th',
    },
    {
      level: 13,
      label: '13th',
    },
    {
      level: 14,
      label: '14th',
    },
    {
      level: 15,
      label: '15th',
    },
    {
      level: 16,
      label: '16th',
    },
    {
      level: 17,
      label: '17th',
    },
    {
      level: 18,
      label: '18th',
    },
    {
      level: 19,
      label: '19th',
    },
    {
      level: 20,
      label: '20th',
    },
  ]

  return (
    <div className='text-sm'>
      {tableGroups && tableGroups.find((x: any)=> x.title) &&
        <div className='pt-2 pr-2 font-semibold w-full text-right'>
          Spell Slots Per Spell Level
        </div>
      }
      <div className='table text-center max-w-screen-md shadow-sm'>
        <div className='table-header-group font-semibold'>
          <div className='table-cell p-2'>Level</div>
          <div className='table-cell'>Proficiency Bonus</div>
          <div className='table-cell text-left pl-2'>Features</div>
          {tableGroups?.map((sctg: any) => {
            return sctg.colLabels.map((col: string) => (
              <div className='table-cell p-2'>{col}</div>
            ))
          })}
        </div>
        {levels.map((l, i) => (
          <div className={i % 2 === 0 ? 'table-row bg-gray-100' : 'table-row'}>
            <div className='table-cell'>{l.label}</div>
            <div className='table-cell'>+{getProficiencyRules(l.level)}</div>
            <div className='table-cell text-left pl-2'>
              {features[l.level.toString()]
                ? features[l.level.toString()].join(', ')
                : '---'}
            </div>
            {tableGroups?.map((sctg: any) =>
              sctg.rows[l.level - 1].map((col: any) => {
                if (typeof col == 'string' || typeof col == 'number') {
                  return <div className='table-cell'>{col}</div>
                } else {
                  return <div className='table-cell'>+{col.value}</div>
                }
              })
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Subtable
