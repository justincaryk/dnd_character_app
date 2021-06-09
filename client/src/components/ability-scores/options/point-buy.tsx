import React, { useState } from 'react'
import './../../../scss/PointBuy.scss'
import { AttributeInterface } from '../../../lib/types'
import AttributeInputBlock from './attribute-input'

interface Props {
    attributesImmutable: AttributeInterface[]
    callbackToSetAttributes: (args: AttributeInterface[]) => void
}

const PointBuy: React.FC<Props> = ({ attributesImmutable, callbackToSetAttributes }) => {
  const [attributes, setAttributes ] = useState<AttributeInterface[]>(attributesImmutable) 
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

  const doBeforeReturningInChangeHandler = (
    attr: AttributeInterface,
    newAttributeScore: number
  ) => {
    
    const updatedAttributes = attributes.map(a => {
        if (attr.id === a.id) {
            a.previousAssignedScore = newAttributeScore
        }
        return a
    })
    setAttributes(updatedAttributes)
    callbackToSetAttributes(updatedAttributes) // callback handler;
  }

  // this.props.attributes = this.props.attributes;

  const handleChanges = (event: React.ChangeEvent<HTMLFormElement>) => {
    //value format is [ASI_SCORE-ATTR_ID]
    //after splitting this var will be ['ASI_SCORE', 'ATTRIBUTE_ID']
    const eventValArr = event.target.value.split('-')

    const attributeId = parseInt(eventValArr[1])

    for (let attr of attributes) {
      if (attributeId === attr.id) {
        const newAttributeScore = parseInt(eventValArr[0])
        //@ts-ignore
        const prevAttributeScore = parseInt(attr.previousAssignedScore)

        // if the previous score was 8, then it can be treated as a brand new selection
        const userMadeBrandNewSelection = prevAttributeScore === 8 ? true : false
        // therefore, we assign the new choice as the previousScore for next time
        if (userMadeBrandNewSelection) {
          // and simply decrease the remaining points

          setPointsRemaining(
            pointsRemaining - standardPointCost[newAttributeScore]
          )

          //update previous with current
          doBeforeReturningInChangeHandler(attr, newAttributeScore)
          return
        }

        // if there was a previous score, then we need to find out whether they increased or decreased
        // and then add or subtract the difference
        const userIncreasedScore =
          Math.sign(newAttributeScore - prevAttributeScore) == 1 ? true : false

        const pointCost = standardPointCost

        if (userIncreasedScore) {
          // new higher price - the previous lower price = real cost increase
          const debit =
            pointCost[newAttributeScore] - pointCost[prevAttributeScore]
          // subtract the additional cost from the pointsRemaining

          setPointsRemaining(pointsRemaining - debit)
          //update previous with current
          // attr.previousAssignedScore = newAttributeScore;
          doBeforeReturningInChangeHandler(attr, newAttributeScore)
          return
        }

        // previous higher price - new lower price = real cost decrease
        const credit = pointCost[prevAttributeScore] - pointCost[newAttributeScore]
        // add the credit back to pointsRemaining
        setPointsRemaining(pointsRemaining + credit)
        //update previous with current
        doBeforeReturningInChangeHandler(attr, newAttributeScore)
        return
      }
    }
  }

  return (
    <div className="content-wrap space-sequence-20">
      <div className="text-center">
        <div className="asi-heading">Points Remaining</div>
        <div className="asi-points-val-total">
          {pointsRemaining} / {standardPointsPool}
        </div>
      </div>
      <div>
        <form onChange={handleChanges}>
          <div className="big-ole-table-outer">
            <div className="tbl-row">
              {attributes.map((attr) => {
                return (
                  <div className="tbl-cell" key={attr.id}>
                    <div className="asi-heading">{attr.name}</div>
                    <div className="asi-val-select-outer">
                      <AttributeInputBlock
                        attribute={attr}
                        key={attr.id}
                        availablePoints={pointsRemaining}
                        pointCosts={standardPointCost}
                      ></AttributeInputBlock>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PointBuy
