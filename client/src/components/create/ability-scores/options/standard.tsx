import React, { Dispatch, SetStateAction, useState } from 'react'
import { AttributeInterface } from '../../../../lib/types'

interface Props {
  attributes: AttributeInterface[]
  callbackToSetAttributes: Dispatch<SetStateAction<AttributeInterface[]>>
  dbAttrs: any
}

// interface State<T> {
//   hashTable: {
//     [key: string]: T
//   }
// }

const StandardArray: React.FC<Props> = ({
  attributes,
  callbackToSetAttributes,
  dbAttrs
}) => {
  const [hashTable, setHashTable] = useState<any>(_buildHashMap(attributes))

  const handleSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const optionValuesSplit = event.target.value.split('_')
    let newSelectedScore = optionValuesSplit[0]
    const updatedAttrId = parseInt(optionValuesSplit[1])
    let localHashTable = hashTable
    let localAttributes = [...attributes]
    const attrIds = Object.keys(hashTable)

    // more simple attempt.
    // put the toy back in the toybox
    for (const attrId of attrIds) {
      // when you get to the item that was updated.
      if (parseInt(attrId) == updatedAttrId) {
        //if there was a previous selection,
        if (localHashTable[attrId].selectedVal != '--') {
          // find the value that has to be put back into the pool
          const valToPutBack = localHashTable[attrId].selectedVal

          // looping them again
          for (const attrId of attrIds) {
            //skip the attr that was updated
            //@ts-ignore
            if (attrId == updatedAttrId) {
              continue
            }

            //make sure it doesn't have the val somehow
            const indexOfValToPutBack =
              localHashTable[attrId].availOptions.indexOf(valToPutBack)
            // as long as it doesn't already have it
            if (indexOfValToPutBack == -1) {
              const whereToPutItBack = _getIndexOfCorrectOptForThisPool(
                valToPutBack,
                localHashTable[attrId].availOptions
              )
              //put that selection back in the pool for all the other items
              localHashTable[attrId].availOptions.splice(
                whereToPutItBack,
                0,
                valToPutBack
              )
            }
          }
        }

        //update the previous selection val to keep the state clean
        localHashTable[updatedAttrId].selectedVal = newSelectedScore
        break
      }
    }

    // pull the new toy out of the toybox
    if (newSelectedScore != '--') {
      for (const attrId of attrIds) {
        // ignore the updated item
        if (parseInt(attrId) === updatedAttrId) {
          continue
        }

        // for all others

        // get an easier reference
        const thisAttrOptsPool = hashTable[attrId].availOptions
        // IMPORTANT NOTE: index will almost certainly vary between attributes, SO
        // we must figure out the right index in THIS pool
        const indexOfItemInThisAttrOptsPool =
          thisAttrOptsPool.indexOf(newSelectedScore)
        // double check to make sure the item is in the pool
        if (indexOfItemInThisAttrOptsPool != -1) {
          // splice the item that was added at the correct index for THIS options pool.
          thisAttrOptsPool.splice(indexOfItemInThisAttrOptsPool, 1)
        }
      }
    }

    // set the damned state
    setHashTable(localHashTable)

    // update the attribute prop for export
    for (const attr of localAttributes) {
      if (attr.id == updatedAttrId) {
        if (newSelectedScore == '--') {
          attr.previousAssignedScore = attr.currentAssignedScore
          attr.currentAssignedScore = 8 // setting this 8 so it behaves consistently with the parent component
          callbackToSetAttributes(localAttributes) // callback handler;
          return
        }

        attr.previousAssignedScore = attr.currentAssignedScore
        attr.currentAssignedScore = parseInt(newSelectedScore)
        callbackToSetAttributes(localAttributes) // callback handler;
        return
      }
    }
  }
  
  return (
    <div className='space-y-4'>
      <div>
        <form>
          <div className='grid grid-cols-6 gap-x-2'>
            {attributes.map((attr) => {
              const defaultValue = dbAttrs[attr.name.toLowerCase()] != null ? `${dbAttrs[attr.name.toLowerCase()]}_${attr.id}` : ''
              return (
                <div key={attr.name}>
                  <div className='text-sm text-center uppercase font-roboto font-bold rounded-t bg-dark text-white p-1'>
                    {attr.name}
                  </div>
                  <select
                    className='w-full border rounded-b text-xl p-2'
                    onChange={handleSelection}
                    defaultValue={defaultValue}
                  >
                    {hashTable[attr.id].availOptions.map((opt: string) => {
                      return (
                        <option
                          value={opt + '_' + attr.id}
                          key={opt + '_' + attr.id}
                        >
                          {opt}
                        </option>
                      )
                    })}
                  </select>
                </div>
              )
            })}
          </div>
        </form>
      </div>
    </div>
  )
}

export default StandardArray

function _buildHashMap(attributes: any) {
  let hashMap: any = {}

  for (const attr of attributes) {
    hashMap[attr.id] = {
      selectedVal: '--',
      availOptions: _getStandardArrayValues(),
    }
  }

  return hashMap
}

function _getStandardArrayValues() {
  return ['--', '8', '10', '12', '13', '14', '15']
}

function _getIndexOfCorrectOptForThisPool(
  comparisonVal: string,
  someFlatArray: []
) {
  const compInt = parseInt(comparisonVal)
  // first item is always '--', so skip
  for (let i = 1; i < someFlatArray.length; i++) {
    const num = parseInt(someFlatArray[i])
    if (compInt < num) {
      return i
    }
  }

  return someFlatArray.length
}
