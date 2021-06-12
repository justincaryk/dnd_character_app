import React from 'react'
import { fd } from './fighter-data'
import ClassSummary from './../shared/class-summary'

const Fighter: React.FC = () => {
    return (
      <div>
        <div className='text-lg font-bold mb-4'>{fd.class.name}</div>
        <div className='flex justify-between w-full'>
          <ClassSummary gen={fd.class} />
          {/* <Subtable features={subtableFeatures} /> */}
        </div>
      </div>
    )
  }
  
  export default Fighter