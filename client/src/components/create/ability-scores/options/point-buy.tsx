import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { AttributeInterface } from '../../../../lib/types'
import PointBuyAttrInputBlock from './point-buy-attr-input'
 
interface Props {
  attributesImmutable: AttributeInterface[]
  callbackToSetAttributes: Dispatch<SetStateAction<AttributeInterface[]>>
}

const PointBuy: React.FC<Props> = ({
  attributesImmutable,
  callbackToSetAttributes,
}) => {
  const [attributes, setAttributes] =
    useState<AttributeInterface[]>([])
  const [pointsRemaining, setPointsRemaining] = useState<number>(27)
  const [standardPointsPool] = useState<number>(27)
  const [standardPointCost] = useState<any>({
    // 18: 19,
    // 17: 15,
    // 16: 12,
    15: 9,
    14: 7,
    13: 5,
    12: 4,
    11: 3,
    10: 2,
    9: 1,
    8: 0,
    // 7: -1,
    // 6: -2,
    // 5: -4,
    // 4: -6,
    // 3: -9,
  })

  useEffect(() => {
    setAttributes(attributesImmutable)
    
    if (attributesImmutable) {
      let pointsPool = 27

      attributesImmutable.forEach(attr => {
        pointsPool -= standardPointCost[attr.currentAssignedScore]
      })

      setPointsRemaining(pointsPool)
    }
    
  }, [attributesImmutable])

  const handleChange = (event: React.ChangeEvent<HTMLFormElement>, attributeId: any) => {
    const newAttributeScore = Number(event.currentTarget.value)
    let pointsPool = 27
    
    const newAttributes = attributes.map(attr => {
      const cost = attributeId === attr.id ? standardPointCost[newAttributeScore] : standardPointCost[attr.currentAssignedScore || 8]
      if (attributeId === attr.id) {
        attr.currentAssignedScore = newAttributeScore
      } 
      pointsPool -= cost
      return attr
    })
    
    setAttributes([...newAttributes])
    setPointsRemaining(pointsPool)
    callbackToSetAttributes(newAttributes) // callback handler;
  }

  return (
    <div className='space-y-4'>
      <div className='text-center'>
        <div className='text-sm font-roboto font-bold uppercase'>
          Points Remaining
        </div>
        <div className='text-2xl font-roboto font-bold uppercase'>
          {pointsRemaining} / {standardPointsPool}
        </div>
      </div>
      <div>
        <form>
          <div className='grid grid-cols-6 gap-x-2'>
            {attributes.map((attr) => {
              return (
                <div key={attr.id}>
                  <div className='text-sm text-center uppercase font-roboto font-bold rounded-t bg-dark text-white p-1'>{attr.name}</div>
                    <PointBuyAttrInputBlock
                      attribute={attr}
                      availablePoints={pointsRemaining}
                      handleChange={handleChange}
                    ></PointBuyAttrInputBlock>
                </div>
              )
            })}
          </div>
        </form>
      </div>
    </div>
  )
}

export default PointBuy
