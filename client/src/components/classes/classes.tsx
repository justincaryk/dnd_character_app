import React, { useState } from 'react'
import './../../scss/DndClasses.scss'
import PcClass from './shared/pc-class'
import Select from 'react-select'
// import { rd } from './data/ranger-data'
// import { fd } from './data/fighter-data'
// import { bd } from './data/barbarian-data'
// import { sd } from './data/sorcerer-data'
// import { md } from './data/monk-data'
// import { pd } from './data/paladin-data'
// import { dd } from './data/druid-data'
// import { wd } from './data/wizard-data'
// import { rgd } from './data/rogue-data'
// import { cd } from './data/cleric-data'
// import { bardD } from './data/bard-data'
// import { warlockd } from './data/warlock-data'
import { useAllClassesQuery } from '../../generated/graphql'

// const CLASS_DATA = [
//   {
//     id: 1,
//     name: 'Barbarian',
//     data: bd,
//   },
//   {
//     id: 2,
//     name: 'Bard',
//     data: bardD,
//   },
//   {
//     id: 3,
//     name: 'Cleric',
//     data: cd,
//   },
//   {
//     id: 4,
//     name: 'Druid',
//     data: dd,
//   },
//   {
//     id: 5,
//     name: 'Fighter',
//     data: fd,
//   },
//   {
//     id: 6,
//     name: 'Monk',
//     data: md,
//   },
//   {
//     id: 7,
//     name: 'Paladin',
//     data: pd,
//   },
//   {
//     id: 8,
//     name: 'Ranger',
//     data: rd,
//   },
//   {
//     id: 9,
//     name: 'Rogue',
//     data: rgd,
//   },
//   {
//     id: 10,
//     name: 'Sorcerer',
//     data: sd,
//   },
//   {
//     id: 11,
//     name: 'Warlock',
//     data: warlockd,
//   },
//   {
//     id: 12,
//     name: 'Wizard',
//     data: wd,
//   },
// ]

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
      data.allClasses.nodes.forEach((x) => {
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
    
    const subclassFeatures = selectedClass.subclassFeaturesByClassId.nodes.filter((x: any) => {
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
          onChange={(e) => handleClassChange(e)}
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
