import React, { useState } from 'react'
import PcClass from './shared/pc-class'
import Select from 'react-select'
import { useAllClassesQuery } from '../../../generated/graphql'

type SelectChangeEventType = { label: string; value: number } | null

const Classes: React.FC = () => {
  const { data, loading } = useAllClassesQuery()

  const [classOptions, setClassOptions] = useState<any[]>([])
  const [subclassOptions, setSubclassOptions] = useState<any[]>([])
  const [selectedClass, setSelectedClass] = useState<any>(null)
  const [selectedSubclass, setSelectedSubclass] = useState<any>(null)
  const [subclassFeatures, setSubclassFeatures] = useState<any>(null)

  if (!data || loading) {
    return <div>Loading...</div>
  }

  if (data && !classOptions.length) {
    const options: any[] = []
    if (data?.allClasses?.nodes) {
      data.allClasses.nodes.forEach(x => {
        const opt = {
          value: x?.id,
          label: x?.name,
        }
        options.push(opt)
      })
    }

    setClassOptions(options)
  }

  const handleClassChange = (e: any) => {
    const choice = data.allClasses?.nodes.find((x: any) => x.id === e?.value)
    setSelectedClass(choice)
    setSubclassFeatures(null)
    setSelectedSubclass(null)
    setSubclassOptions(
      choice?.subclassesByClassId.nodes.map((x: any) => ({
        value: x.shortName,
        label: x.name,
      })) || []
    )
  }

  const handleSubclassChange = (e: SelectChangeEventType) => {
    setSelectedSubclass(e)

    const subclassShortName = e?.value

    const subclassFeatures =
      selectedClass.subclassFeaturesByClassId.nodes.filter((x: any) => {
        return x.subclassShortName === subclassShortName ? true : false
      })

    setSubclassFeatures(subclassFeatures)
  }

  return (
    <>
      <div className='mb-6'>
        <Select
          options={classOptions}
          placeholder={'Make a selection'}
          onChange={e => handleClassChange(e)}
        />
      </div>

      {selectedClass && (
        <div className='mb-6'>
          <Select
            placeholder={'Make a selection'}
            onChange={handleSubclassChange}
            value={selectedSubclass}
            options={subclassOptions}
          />
        </div>
      )}

      {selectedClass && (
        <PcClass
          classData={selectedClass}
          subclassFeatures={subclassFeatures}
        />
      )}
    </>
  )
}

export default Classes
