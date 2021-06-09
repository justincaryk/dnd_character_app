import React, { useState } from 'react'
import './../../scss/DndClasses.scss'
import Barbarian from './barbarian'

const CLASS_DATA = [
  {
    id: 1,
    name: 'Barbarian',
  },
  {
    id: 2,
    name: 'Bard',
  },
  {
    id: 3,
    name: 'Cleric',
  },
  {
    id: 4,
    name: 'Druid',
  },
  {
    id: 5,
    name: 'Fighter',
  },
  {
    id: 6,
    name: 'Monk',
  },
  {
    id: 7,
    name: 'Paladin',
  },
  {
    id: 8,
    name: 'Ranger',
  },
  {
    id: 9,
    name: 'Rogue',
  },
  {
    id: 10,
    name: 'Sorcerer',
  },
  {
    id: 11,
    name: 'Warlock',
  },
  {
    id: 12,
    name: 'Wizard',
  },
]

const Classes: React.FC = () => {
  const races = CLASS_DATA
  const [ selectedClass, setSelectedClass ] = useState(0)
  
  const handleClassChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedClass(Number(e.currentTarget.value))
  }

  return (
    <>
      <div className="mb-6">
        <label>Choose a Class</label>
        <select className="form-control" onChange={handleClassChange}>
          <option value="" key="" selected disabled>
            Make a selection
          </option>
          {races.map((x) => (
            <option value={x.id} key={x.id}>
              {x.name}
            </option>
          ))}
        </select>
      </div>
      {selectedClass === 1 && <Barbarian />}
    </>
  )
}

export default Classes