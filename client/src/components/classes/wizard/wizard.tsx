import React, { useState } from 'react'
import { wd } from './wizard-data'
import ClassSummary from './../shared/class-summary'
import Features from '../shared/features'
import Subtable from '../shared/subtable'

import { getFeatures, parsedFeatures } from '../../../lib/utils'

const Wizard: React.FC = () => {
  const [features, setFeatures] = useState<any>(
    getFeatures(wd.class.classFeatures, wd.classFeature)
  )
  const [subtableFeatures] = useState(parsedFeatures(wd.class.classFeatures))
  const [subclasses] = useState<any[]>(wd.class.subclasses)

  const handleSubclassChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const subclassShortName = e.currentTarget.value
    const subclassFeatures = wd.subclassFeature.filter((x) => {
      return x.subclassShortName === subclassShortName ? true : false
    })
    setFeatures(
      getFeatures(wd.class.classFeatures, wd.classFeature, subclassFeatures)
    )
  }

  return (
    <div>
      <select 
        className='form-control mb-6' 
        defaultValue={''}
        onChange={handleSubclassChange}>
        <option value='' key='' disabled>
          Make a selection
        </option>
        {subclasses.map((x) => (
          <option value={x.shortName} key={x.shortName}>
            {x.name}
          </option>
        ))}
      </select>
      <div className='text-lg font-bold mb-4'>{wd.class.name}</div>
      <div className='flex justify-between w-full'>
        <ClassSummary gen={wd.class} />
        <Subtable 
          features={subtableFeatures} 
          tableGroups={wd.class.classTableGroups}  
        />
      </div>
      <div className='mt-4'>
        <Features features={features} />
      </div>
    </div>
  )
}

export default Wizard
