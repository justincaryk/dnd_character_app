import React, { useState } from 'react'
import { useParams } from 'react-router'
import { useGetAllAsiSelectionsQuery } from '../../../../generated/graphql'
import { AttributeInterface } from '../../../../lib/types'

interface Props {
  attributesImmutable: AttributeInterface[]
}

type BonusesType = {
  [key: string]: number
}

const getBonusDisplayVal = (val: number) => {
  return Math.sign(val) === 1 ? `+${val}` : val
}

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

const AttributeCardBlock = ({ attributesImmutable }: Props) => {
  const { id }: any = useParams()
  const { data, loading } = useGetAllAsiSelectionsQuery({
    variables: {
      characterId: id,
    },
  })

  const racialHash: any = {
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
  }

  data?.allAsiSelecteds?.nodes.forEach(x => {
    const key = x?.asiByAsiId?.long?.toLowerCase()
    if (key) {
      racialHash[key] += x?.count
    }
  })
  if (loading) {
    return null
  }

  return (
    <div className='grid grid-cols-3 gap-x-6 gap-4'>
      {attributesImmutable.map(attr => {
        return (
          <div className='attr-block border rounded bg-white' key={attr.id}>
            <div className='rounded-t bg-dark border-black p-2 text-white font-roboto text-sm text-center font-bold uppercase'>
              {attr.name}
            </div>
            <div>
              <div className='grid grid-cols-2 font-roboto'>
                <div className='border-b p-4 text-left'>Total</div>
                <div className='border-b p-4 border-l-4 bg-gray-100 text-xl text-center font-roboto font-bold'>
                  {attr.currentAssignedScore +
                    racialHash[attr.name.toLowerCase()]}
                </div>
                <div className='border-b p-4 text-left'>Base</div>
                <div className='border-b p-4 border-l-4 bg-gray-100 text-xl text-center font-roboto font-bold'>
                  {attr.currentAssignedScore}
                </div>
                <div className='border-b p-4 text-left'>Modifer</div>
                <div className='border-b p-4 border-l-4 bg-gray-100 text-xl text-center font-roboto font-bold'>
                  {getBonusDisplayVal(
                    bonuses[
                      attr.currentAssignedScore +
                        racialHash[attr.name.toLowerCase()]
                    ]
                  )}
                </div>
                <div className='border-b p-4 text-left'>Racial Bonus</div>
                <div className='border-b p-4 border-l-4 bg-gray-100 text-xl text-center font-roboto font-bold'>
                  +{racialHash[attr.name.toLowerCase()]}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default AttributeCardBlock
