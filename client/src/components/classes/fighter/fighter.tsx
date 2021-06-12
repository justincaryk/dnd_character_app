import React, { useState } from 'react'
import { fd } from './fighter-data'
import ClassSummary from './../shared/class-summary'
import Features from '../shared/features'
import { getFeatures } from '../../../lib/utils'

const Fighter: React.FC = () => {
  const [features, setFeatures] = useState<any>(
    getFeatures(fd.class.classFeatures, fd.classFeature)
  )
  const [subclasses] = useState<any[]>(fd.class.subclasses.map((sc) => sc.name))
  const handleSubclassChange = (e: React.ChangeEvent<HTMLSelectElement>) => {}

  return (
    <div>
      <select className='form-control mb-6' onChange={handleSubclassChange}>
        <option value='' key='' selected disabled>
          Make a selection
        </option>
        {subclasses.map((x) => (
          <option value={x} key={x}>
            {x}
          </option>
        ))}
      </select>
      <div className='text-lg font-bold mb-4'>{fd.class.name}</div>
      <div className='flex justify-between w-full'>
        <ClassSummary gen={fd.class} />
        {/* <Subtable features={subtableFeatures} /> */}
      </div>
      <div className='mt-4'>
        <Features features={features} />
      </div>
    </div>
  )
}

export default Fighter
