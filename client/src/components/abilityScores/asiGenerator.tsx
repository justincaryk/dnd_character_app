import React, { useState } from 'react'
import './../../scss/AbilityScore.scss'
import { AttributeInterface } from './../../lib/types'
import PointBuy from './options/pointBuy'
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
    <div className="space-sequence-20">
      <div>
        <div>
          <select className="form-control" onChange={handleMethodChange}>
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

      <div className="space-sequence-20">
        <div>
          <div className="row">
            {attributes.map((attr) => {
              return (
                <div className="col-xs-12 col-md-4 form-group" key={attr.id}>
                  <div className="attr-block">
                    <div className="attr-title-bar asi-heading">
                      {attr.name}
                    </div>
                    <div className="attr-content">
                      <div className="attr-row">
                        <div className="label-left">Base</div>
                        <div className="score">{attr.currentAssignedScore}</div>
                      </div>
                      <div className="attr-row">
                        <div className="label-left">Modifer</div>
                        <div className="score">
                          {_getBonusDisplayVal(bonuses[attr.currentAssignedScore]
                          )}
                        </div>
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
