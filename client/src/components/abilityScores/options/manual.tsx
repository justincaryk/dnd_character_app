import React, { useState } from 'react'
import './../../../scss/Manual.scss'
import { AttributeInterface } from './../../../lib/types'
import { tryParseInt } from './../../../lib/utils'

interface Props {
  attributesImmutable: AttributeInterface[]
  callbackToSetAttributes: (args: AttributeInterface[]) => void
}

const ManualOption: React.FC<Props> = ({
  attributesImmutable,
  callbackToSetAttributes,
}) => {
  const [attributes, setAttributes ] = useState<AttributeInterface[]>(attributesImmutable)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, attrId: number) => {
    
    const newAttributeScore = getValidScore(event.target.value)

    if (!newAttributeScore) {
      event.target.value = ''
      console.error('Not a valid input')
      return
    }

    const tempAttrs = attributes.map(a => {
      if (a.id === attrId) {
        a.previousAssignedScore = a.currentAssignedScore || newAttributeScore
        a.currentAssignedScore = newAttributeScore
      }
      return a
    })
    callbackToSetAttributes(tempAttrs) // callback handler
    setAttributes(tempAttrs)
    
  }

  return (
    <div className="content-wrap">
      <form>
        <div className="big-ole-table-outer">
          <div className="tbl-row">
            {attributes.map((attr) => {
              return (
                <div key={attr.id} className="tbl-cell">
                  <div className="asi-heading">{attr.name}</div>
                  <div className="asi-val-select-outer">
                    <input
                      className="form-control"
                      onBlur={(event) => {
                        handleChange(event, attr.id)
                        event.target.value = getValidScore(event.target.value).toString()
                      }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </form>
    </div>
  )
}

export default ManualOption

function getValidScore(value: string) {
  // rules:
  // 2 & 31 are out of bounds
  // must be int

  if (tryParseInt(value, false) === false) {
    return ''
  }

  const intVal = parseInt(value)

  // greater than 30 -> return 30
  if (intVal > 30) return 30
  // less than 3 -> return 3
  if (intVal < 3) return 3
  // return value
  return intVal
}
