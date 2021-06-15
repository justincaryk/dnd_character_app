import React, { useState } from 'react'
import './../../scss/DndClasses.scss'
import PcClass from './shared/pc-class'
import { rd } from './data/ranger-data'
import { fd } from './data/fighter-data'
import { bd } from './data/barbarian-data'
import { pd } from './data/paladin-data'
import { wd } from './data/wizard-data'
import Select, { } from 'react-select'

const CLASS_DATA = [
  {
    id: 1,
    name: 'Barbarian',
    data: bd,
  },
  // {
  //   id: 2,
  //   name: 'Bard',
  // },
  // {
  //   id: 3,
  //   name: 'Cleric',
  // },
  // {
  //   id: 4,
  //   name: 'Druid',
  // },
  {
    id: 5,
    name: 'Fighter',
    data: fd,
  },
  // {
  //   id: 6,
  //   name: 'Monk',
  // },
  {
    id: 7,
    name: 'Paladin',
    data: pd,
  },
  {
    id: 8,
    name: 'Ranger',
    data: rd,
  },
  // {
  //   id: 9,
  //   name: 'Rogue',
  // },
  // {
  //   id: 10,
  //   name: 'Sorcerer',
  // },
  // {
  //   id: 11,
  //   name: 'Warlock',
  // },
  {
    id: 12,
    name: 'Wizard',
    data: wd,
  },
]

type SelectChangeEventType = {label: string, value: number} | null

const Classes: React.FC = () => {
  const [ classOptions ] = useState(CLASS_DATA.map(x => (
    {
      value: x.id,
      label: x.name
    }
  )))
  const [subclassOptions, setSubclassOptions ] = useState<any[]>([])
  const [selectedClass, setSelectedClass] = useState<any>(null)
  const [selectedSubclass, setSelectedSubclass] = useState<any>(null)
  const [subclassFeatures, setSubclassFeatures] = useState<any>(null)
  
  const handleClassChange = (e: SelectChangeEventType) => {
    const choice = CLASS_DATA.find((x: any) => x.id === e?.value)
    setSelectedClass(choice?.data)
    setSubclassFeatures(null)
    setSelectedSubclass(null)
    setSubclassOptions(choice?.data.class.subclasses.map((x: any) => (
      {
        value: x.shortName,
        label: x.name
      }
    )) || [])
  }

  const handleSubclassChange = (e: SelectChangeEventType) => {
    setSelectedSubclass(e)
    
    const subclassShortName = e?.value
    const subclassFeatures = selectedClass.subclassFeature.filter((x: any) => {
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
          onChange={handleClassChange}
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

      {selectedClass?.class && (
        <PcClass
          classData={selectedClass}
          subclassFeatures={subclassFeatures}
        />
      )}
    </>
  )
}

export default Classes
