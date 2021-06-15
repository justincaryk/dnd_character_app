import React, { useState } from 'react'
import { pd } from './paladin-data'
import ClassSummary from './../shared/class-summary'
import Features from '../shared/features'
import Subtable from '../shared/subtable'

import { getFeatures, parsedFeatures } from '../../../lib/utils'

const Paladin: React.FC = () => {
  const [features, setFeatures] = useState<any>(
    getFeatures(pd.class.classFeatures, pd.classFeature)
  )
  const [subtableFeatures] = useState(parsedFeatures(pd.class.classFeatures))
  const [subclasses] = useState<any[]>(pd.class.subclasses)

  const handleSubclassChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const subclassShortName = e.currentTarget.value
    const subclassFeatures = pd.subclassFeature.filter((x) => {
      return x.subclassShortName === subclassShortName ? true : false
    })
    setFeatures(
      getFeatures(pd.class.classFeatures, pd.classFeature, subclassFeatures)
    )
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
      <div className='text-lg font-bold mb-4'>{pd.class.name}</div>
      <div className='flex justify-between w-full'>
        <ClassSummary gen={pd.class} />
        <Subtable 
          features={subtableFeatures} 
          tableGroups={pd.class.classTableGroups}  
        />
      </div>
      <div className='mt-4'>
        <Features features={features} />
      </div>
    </div>
  )
}

export default Paladin
