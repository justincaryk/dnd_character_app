import React, { useState } from 'react'
import { AttributeInterface } from '../../../lib/types'
import PointBuy from './options/point-buy'
import StandardArray from './options/standard'
import ManualOption from './options/manual'
import AttributeCardBlock from './options/card-block'
import { cloneDeep } from 'lodash'

type ActiveMethodType = 'PointBuy' | 'StandardArray' | 'Manual'

const defaultAttributes = [
  {
    id: 1,
    name: 'Strength',
    currentAssignedScore: 8,
    previousAssignedScore: 8,
  },
  {
    id: 2,
    name: 'Dexterity',
    currentAssignedScore: 8,
    previousAssignedScore: 8,
  },
  {
    id: 3,
    name: 'Constitution',
    currentAssignedScore: 8,
    previousAssignedScore: 8,
  },
  {
    id: 4,
    name: 'Intelligence',
    currentAssignedScore: 8,
    previousAssignedScore: 8,
  },
  {
    id: 5,
    name: 'Wisdom',
    currentAssignedScore: 8,
    previousAssignedScore: 8,
  },
  {
    id: 6,
    name: 'Charisma',
    currentAssignedScore: 8,
    previousAssignedScore: 8,
  },
]

const AsiGenerator: React.FC = () => {
  const [activeMethod, setActiveMethod] = useState<ActiveMethodType>('PointBuy')
  const [attributes, setAttributes] =
    useState<AttributeInterface[]>(cloneDeep(defaultAttributes))

  const methods = [
    { id: 'PointBuy', name: 'Point Buy' },
    { id: 'StandardArray', name: 'Standard Array' },
    { id: 'Manual', name: 'Manual' },
  ]

  const handleMethodChange = (event: React.ChangeEvent<any>) => {
    setActiveMethod(event.target.value)
    setAttributes(cloneDeep(defaultAttributes))
  }

  return (
    <div className='space-y-4'>
      <div>
        <div>
          <select
            className='w-full border rounded text-xl p-2'
            onChange={handleMethodChange}
          >
            {methods.map((method) => {
              return (
                <option value={method.id} key={method.id}>
                  {method.name}
                </option>
              )
            })}
          </select>
        </div>
      </div>

      {activeMethod === 'PointBuy' && (
        <PointBuy
          callbackToSetAttributes={setAttributes}
          attributesImmutable={attributes}
        />
      )}
      {activeMethod === 'StandardArray' && (
        <StandardArray
          callbackToSetAttributes={setAttributes}
          attributes={attributes}
        />
      )}
      {activeMethod === 'Manual' && (
        <ManualOption
          callbackToSetAttributes={setAttributes}
          attributesImmutable={attributes}
        />
      )}

      <div className='pt-12'>
        <AttributeCardBlock attributesImmutable={attributes} />
      </div>
    </div>
  )
}

export default AsiGenerator
