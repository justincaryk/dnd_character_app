import React, { useState } from 'react'
import { getFeatures, parsedFeatures } from '../../../lib/utils'
import { bd } from './barbarian-data'
import ClassSummary from './../shared/class-summary'
import Features from '../shared/features'
import Subtable from '../shared/subtable'


const Barbarian: React.FC = () => {
  const [subtableFeatures] = useState(parsedFeatures(bd.class.classFeatures))
  const [subclasses] = useState<any[]>(bd.class.subclasses.map((sc) => sc))
  const [features, setFeatures] = useState<any>(
    getFeatures(bd.class.classFeatures, bd.classFeature)
  )

  const handleSubclassChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const subclassShortName = e.currentTarget.value
    const subclassFeatures = bd.subclassFeature.filter((x) => {
      return x.subclassShortName === subclassShortName ? true : false
    })
    setFeatures(
      getFeatures(bd.class.classFeatures, bd.classFeature, subclassFeatures)
    )
  }

  return (
    <div>
      <select 
        className='form-control mb-6' 
        defaultValue={''}
        onChange={handleSubclassChange}
      >
        <option value='' key='' disabled>
          Make a selection
        </option>
        {subclasses.map((x) => (
          <option value={x.shortName} key={x.shortName}>
            {x.name}
          </option>
        ))}
      </select>
      <div className='text-lg font-bold mb-4'>{bd.class.name}</div>
      <div className='flex justify-between w-full'>
        <ClassSummary gen={bd.class} />
        <Subtable features={subtableFeatures} tableGroups={bd.class.classTableGroups} />
      </div>
      <div className='mt-4'>
        <Features features={features} />
      </div>
    </div>
  )
}

export default Barbarian
