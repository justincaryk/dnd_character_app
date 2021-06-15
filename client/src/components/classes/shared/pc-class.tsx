import React from 'react'
import ClassSummary from './../shared/class-summary'
import Features from '../shared/features'
import Subtable from '../shared/subtable'
import { getFeatures, parsedFeatures } from '../../../lib/utils'

interface IProps {
  classData: any
  subclassFeatures: any
}

const PcClass: React.FC<IProps> = ({ classData, subclassFeatures }) => {
  const features = subclassFeatures
    ? getFeatures(
        classData.class.classFeatures,
        classData.classFeature,
        subclassFeatures
      )
    : getFeatures(classData.class.classFeatures, classData.classFeature)

  return (
    <div>
      <div className='text-lg font-bold mb-4'>{classData.class.name}</div>
      <div className='flex justify-between w-full'>
        <ClassSummary gen={classData.class} />
        <Subtable
          features={parsedFeatures(classData.class.classFeatures)}
          tableGroups={classData.class.classTableGroups}
        />
      </div>
      <div className='mt-4'>
        <Features features={features} />
      </div>
    </div>
  )
}

export default PcClass
