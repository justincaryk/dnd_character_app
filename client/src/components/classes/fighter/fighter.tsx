import React, { useState } from 'react'
import { fd } from './fighter-data'
import ClassSummary from './../shared/class-summary'
import Features from '../shared/features'
import Subtable from '../shared/subtable'
import { getFeatures, parsedFeatures } from '../../../lib/utils'

const Fighter: React.FC = () => {
  const [features, setFeatures] = useState<any>(
    getFeatures(fd.class.classFeatures, fd.classFeature)
  )
  const [subtableFeatures] = useState(parsedFeatures(fd.class.classFeatures))
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
          tableGroups={subclass?.subclassTableGroups} 
        />
      </div>
      <div className='mt-4'>
        <Features features={features} />
      </div>
    </div>
  )
}

export default Fighter
