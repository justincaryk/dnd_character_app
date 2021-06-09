import React from 'react'
import { bd } from './barbarian-data'

interface ITable {
  features: {
    [key: string]: string[]
  }
}
const Table: React.FC<ITable> = ({ features }) => {
  const getProficiencyRules = (level: number) => {
    if (level < 5) return 2
    if (level < 9) return 3
    if (level < 13) return 4
    if (level < 17) return 5
    return 6
  }
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
    <>
      <div className='border table text-center text-sm max-w-screen-md shadow-sm'>
        <div className='table-header-group font-semibold'>
          <div className='table-cell'>Level</div>
          <div className='table-cell'>Proficiency Bonus</div>
          <div className='table-cell text-left'>Features</div>
          {bd.class.classTableGroups.colLabels.map((col) => (
            <div className='table-cell'>{col}</div>
          ))}
        </div>
        {levels.map((l, i) => (
          <div className={i % 2 === 0 ? 'table-row bg-gray-100' : 'table-row'}>
            <div className='table-cell'>{l.label}</div>
            <div className='table-cell'>+{getProficiencyRules(l.level)}</div>
            <div className='table-cell text-left'>
              {features[l.level.toString()].join(', ')}
            </div>
            {bd.class.classTableGroups.rows[l.level - 1].map((col) => {
              if (typeof col == 'string') {
                return <div className='table-cell'>{col}</div>
              } else {
                return <div className='table-cell'>+{col.value}</div>
              }
            })}
          </div>
        ))}
      </div>
    </>
  )
}

const Barbarian: React.FC = () => {

  const parsedFeatures = () => {
    const hashFeatures: any = {}

    bd.class.classFeatures.forEach((f) => {
      if (typeof f === 'string') {
        const feature = f.split('||')[0]
        const level = f.split('||')[1]
        hashFeatures[level]
          ? hashFeatures[level].push(feature)
          : (hashFeatures[level] = [feature])
      } else {
        const feature = f.classFeature.split('||')[0]
        const level = f.classFeature.split('||')[1]
        hashFeatures[level]
          ? hashFeatures[level].push(feature)
          : (hashFeatures[level] = [feature])
      }
    })

    return hashFeatures
  }

  return (
    <div>
      <Table features={parsedFeatures()} />
    </div>
  )
}

export default Barbarian
