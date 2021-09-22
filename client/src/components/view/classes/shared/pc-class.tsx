import React from 'react'
import ClassSummary from './class-summary'
import Features from './features'
import Subtable from './subtable'
import { getFeatures, parsedFeatures } from '../../../../lib/utils'

interface IProps {
  classData: any
  subclassFeatures: any
}

const getSubclassTableGroups = (subclasses: any, subclassName: string) => {
  const subclassTableGroups: any[] = []

  for (const sc of subclasses) {
    if (subclassName === sc.shortName) {
      if (sc.subclassTableGroups?.length) {
        sc.subclassTableGroups.forEach((sctg: string) => {
          subclassTableGroups.push(JSON.parse(sctg))
        })
      }
    }
  }
  return subclassTableGroups
}

const PcClass: React.FC<IProps> = ({ classData, subclassFeatures }) => {
  const subclassName = subclassFeatures
    ? subclassFeatures[0].subclassShortName
    : null
  const subclassTableGroups = getSubclassTableGroups(
    classData.subclassesByClassId.nodes,
    subclassName
  )
  
  const features = subclassFeatures
    ? getFeatures(
        classData.classFeatures,
        classData.classFeaturesByClassId.nodes,
        subclassFeatures
      )
    : getFeatures(
        classData.classFeatures,
        classData.classFeaturesByClassId.nodes
      )
    
  return (
    <div>
      <div className='text-lg font-bold mb-4'>{classData.name}</div>
      <div className='flex justify-between w-full'>
        <ClassSummary gen={classData} />
        <Subtable
          features={parsedFeatures(classData.classFeatures)}
          tableGroups={JSON.parse(classData.meta)}
          subclassTableGroups={subclassTableGroups}
        />
      </div>
      <div className='mt-4'> 
        <Features features={features} />
      </div>
    </div>
  )
}

export default PcClass
