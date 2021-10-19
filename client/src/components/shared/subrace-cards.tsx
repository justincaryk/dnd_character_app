import React from 'react'
import Subraces from '../view/races/subraces'

const buildAsiString = (asis: any) => {
  asis = asis.options

  const asiArr: any = []

  asis.forEach((asi: any) => {
    const key = Object.keys(asi)[0]
    const numVal = Number(asi[key])
    const plusOrMinusSymbol = Math.sign(asi[key]) === 1 ? '+' : ''
    const stringChunk = `${plusOrMinusSymbol}${numVal} ${key}`
    asiArr.push(stringChunk)
  })

  return asiArr.join(', ')
}

interface Props {
  subrace: any
}
const SubraceCards: React.FC<Props> = ({ subrace }) => {
  const asiString = buildAsiString(subrace.asis)

  return (
    <div className='space-y-4'>
      {/* <div className='bg-white rounded px-2 py-3 text-sm border border-2'>
        <div className='font-bold'>Subrace Name:</div>
        <div>{subrace.name}</div>
      </div> */}
      <div className='bg-white rounded px-2 py-3 text-sm border border-2'>
        <div className='font-bold'>Ability Score Increase:</div>
        <div>{asiString}</div>
      </div>
      {
          subrace.subraceFeaturesBySubraceId.nodes.map((feat: any) => (
            <div className='bg-white rounded px-2 py-3 text-sm border border-2'>
              <div className='font-bold'>{feat.racialFeatureByRacialFeatureId.name}</div>
              <div>{feat.racialFeatureByRacialFeatureId.description}</div>
            </div>
          ))
      }
    </div>
  )
}

export default SubraceCards
