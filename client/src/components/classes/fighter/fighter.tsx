import React, { useState } from 'react'
import { fd } from './fighter-data'
import ClassSummary from './../shared/class-summary'
import Features from '../shared/features'
import { getFeatures, getProficiencyRules } from '../../../lib/utils'

interface ISubtableProps {
  features: {
    [key: string]: string[]
  }
  subclassTableGroups?: any
}

const Subtable: React.FC<ISubtableProps> = ({ features, subclassTableGroups }) => {
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
          <div className='table-cell p-2'>Level</div>
          <div className='table-cell'>Proficiency Bonus</div>
          <div className='table-cell text-left'>Features</div>
          {subclassTableGroups?.map((sctg: any) => {
            return sctg.colLabels.map((col: string) => (
              <div className='table-cell p-2'>{col}</div>
            ))
          })}
        </div>
        {levels.map((l, i) => (
          <div className={i % 2 === 0 ? 'table-row bg-gray-100' : 'table-row'}>
            <div className='table-cell'>{l.label}</div>
            <div className='table-cell'>+{getProficiencyRules(l.level)}</div>
            <div className='table-cell text-left'>
              {features[l.level.toString()].join(', ')}
            </div>
            {subclassTableGroups?.map((sctg: any) => (
              sctg.rows[l.level - 1].map((col: string) => (
                <div className='table-cell'>{col}</div>
              ))
            ))}
          </div>
        ))}
      </div>
    </>
  )
}


const parsedFeatures = () => {
  const hashFeatures: any = {}

  fd.class.classFeatures.forEach((f) => {
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

const Fighter: React.FC = () => {
  const [features, setFeatures] = useState<any>(
    getFeatures(fd.class.classFeatures, fd.classFeature)
  )
  const [subtableFeatures] = useState(parsedFeatures())
  const [subclasses] = useState<any[]>(fd.class.subclasses)
  const [subclass, setSubclass] = useState<any>(null)

  const handleSubclassChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const subclassShortName = e.currentTarget.value
    const subclassFeatures = fd.subclassFeature.filter((x) => {
      return x.subclassShortName === subclassShortName ? true : false
    })
    setFeatures(
      getFeatures(fd.class.classFeatures, fd.classFeature, subclassFeatures)
    )
    const sc = fd.class.subclasses.find(x => x.shortName == subclassShortName)
    setSubclass(sc)
  }

  return (
    <div>
      <select className='form-control mb-6' onChange={handleSubclassChange}>
        <option value='' key='' selected disabled>
          Make a selection
        </option>
        {subclasses.map((x) => (
          <option value={x.shortName} key={x.shortName}>
            {x.name}
          </option>
        ))}
      </select>
      <div className='text-lg font-bold mb-4'>{fd.class.name}</div>
      <div className='flex justify-between w-full'>
        <ClassSummary gen={fd.class} />
        <Subtable 
          features={subtableFeatures} 
          subclassTableGroups={subclass?.subclassTableGroups} 
        />
      </div>
      <div className='mt-4'>
        <Features features={features} />
      </div>
    </div>
  )
}

export default Fighter