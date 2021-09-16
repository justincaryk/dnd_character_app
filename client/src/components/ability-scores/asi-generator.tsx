import React, { useState } from 'react'
import { AttributeInterface } from '../../lib/types'
import PointBuy from './options/point-buy'
import StandardArray from './options/standard'
import ManualOption from './options/manual'

type BonusesType = {
  [key: string]: number
}

type ActiveMethodType = 'PointBuy' | 'StandardArray' | 'Manual'

const AsiGenerator: React.FC = () => {
  const [activeMethod, setActiveMethod] = useState<ActiveMethodType>('PointBuy')
  const bonuses: BonusesType = {
    '3': -4,
    '4': -3,
    '5': -3,
    '6': -2,
    '7': -2,
    '8': -1,
    '9': -1,
    '10': 0,
    '11': 0,
    '12': 1,
    '13': 1,
    '14': 2,
    '15': 2,
    '16': 3,
    '17': 3,
    '18': 4,
    '19': 4,
    '20': 5,
    '21': 5,
    '22': 6,
    '23': 6,
    '24': 7,
    '25': 7,
    '26': 8,
    '27': 8,
    '28': 9,
    '29': 9,
    '30': 10,
  }
  const [attributes, setAttributes] = useState<AttributeInterface[]>([
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
  ])

  const methods = [
    { id: 'PointBuy', name: 'Point Buy' },
    { id: 'StandardArray', name: 'Standard Array' },
    { id: 'Manual', name: 'Manual' },
  ]

  const getUpdatedAttributes = (updatedAttributes: AttributeInterface[]) => {
    setAttributes(updatedAttributes)
  }

  const handleMethodChange = (event: React.ChangeEvent<any>) => {
    setActiveMethod(event.target.value)
  }

  return (
    <div className='space-y-4'>
      <div>
        <div>
          <select className='w-full border rounded text-xl p-2' onChange={handleMethodChange}>
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
          callbackToSetAttributes={getUpdatedAttributes}
          attributesImmutable={attributes}
        />
      )}
      {activeMethod === 'StandardArray' && (
        <StandardArray
          callbackToSetAttributes={getUpdatedAttributes}
          attributes={attributes}
        />
      )}
      {activeMethod === 'Manual' && (
        <ManualOption
          callbackToSetAttributes={getUpdatedAttributes}
          attributesImmutable={attributes}
        />
      )}

      <div className='space-y-4 pt-12'>
        <div>
          <div className='grid grid-cols-3 gap-x-6 gap-4'>
            {attributes.map((attr) => {
              return (
                <div
                  className='attr-block border rounded bg-white'
                  key={attr.id}
                >
                  <div className='rounded-t bg-dark border-black p-2 text-white font-roboto text-sm text-center font-bold uppercase'>
                    {attr.name}
                  </div>
                  <div>
                    <div className='grid grid-cols-2 font-roboto'>
                      <div className='border-b p-4 text-left'>Base</div>
                      <div className='border-b p-4 border-l-4 bg-gray-100 text-xl text-center font-roboto font-bold'>{attr.currentAssignedScore}</div>
                      <div className='border-b p-4 text-left'>Modifer</div>
                      <div className='border-b p-4 border-l-4 bg-gray-100 text-xl text-center font-roboto font-bold'>
                        {_getBonusDisplayVal(
                          bonuses[attr.currentAssignedScore]
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AsiGenerator

function _getBonusDisplayVal(val: number) {
  return Math.sign(val) === 1 ? `+${val}` : val
}
