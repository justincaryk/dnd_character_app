import React, { useState } from 'react'
import { AttributeInterface } from '../../../lib/types'
import { tryParseInt } from '../../../lib/utils'

interface Props {
  attributesImmutable: AttributeInterface[]
  callbackToSetAttributes: (args: AttributeInterface[]) => void
}

const ManualOption: React.FC<Props> = ({
  attributesImmutable,
  callbackToSetAttributes,
}) => {
  const [attributes, setAttributes] =
    useState<AttributeInterface[]>(attributesImmutable)
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    attrId: number
  ) => {
    const newAttributeScore = getValidScore(event.target.value)

    if (!newAttributeScore) {
      event.target.value = ''
      console.error('Not a valid input')
      return
    }

    const tempAttrs = attributes.map((a) => {
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
    <form>
      <div className='grid grid-cols-6 gap-x-2'>
        {attributes.map((attr) => {
          return (
            <div key={attr.id}>
              <div className='text-md text-center uppercase font-roboto font-bold rounded-t bg-dark text-white p-1'>
                {attr.name}
              </div>
              <input
                className='w-full border rounded-b text-xl p-2'
                onBlur={(event) => {
                  handleChange(event, attr.id)
                  event.target.value = getValidScore(
                    event.target.value
                  ).toString()
                }}
              />
            </div>
          )
        })}
      </div>
    </form>
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
