import React, { useState } from 'react'
import { useGetAllRacesQuery } from '../../../generated/graphql'
import { RaceCards } from '../../shared/race-cards'
import SubraceCards from '../../shared/subrace-cards'

import Races from './races'
import Subraces from './subraces'

const getItemFromArrayWithId = (someId: string, someArray: any) => {
  for (const oneItem of someArray) {
    if (someId === oneItem.id) {
      return oneItem
    }
  }
}

const buildRacialFeatureHtmlBlocks = (features: any) => {
  const racialFeatureHtmlArray = features.map((feat: any) => (
    <div className='bg-white rounded px-2 py-3 text-sm border border-2'>
      <div className='font-bold'>
        {feat.racialFeatureByRacialFeatureId.name}
      </div>
      <div>{feat.racialFeatureByRacialFeatureId.description}</div>
    </div>
  ))

  return racialFeatureHtmlArray
}

const buildAsiString = (asis: any) => {
  asis = JSON.parse(asis).options

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

const RaceSelectionForm: React.FC = () => {
  // const { id }: any = useParams()

  const [selectedRaceId, setSelectedRaceId] = useState<string | null>(null)
  const [selectedSubraceId, setSelectedSubraceId] = useState<string | null>(
    null
  )
  const { data, loading } = useGetAllRacesQuery()

  const handleRaceSelection = (event: React.ChangeEvent<any>) => {
    setSelectedRaceId(event.target.value)
    setSelectedSubraceId(null)
  }

  const handleSubRaceSelection = (event: React.ChangeEvent<any>) => {
    setSelectedSubraceId(event.target.value)
  }

  if (!data || loading) {
    return <div>Loading...</div>
  }

  const activeRace = selectedRaceId
    ? getItemFromArrayWithId(selectedRaceId, data?.allRaces?.nodes)
    : false
  const activeSubrace = selectedSubraceId
    ? getItemFromArrayWithId(
        selectedSubraceId,
        activeRace.subracesByRaceId.nodes
      )
    : false

  // TODO:
  // make an active race html block for active race only scenarios
  // make a more clear combined html for active race + active subrace scenarios

  return (
    <div className='max-w-screen-sm m-auto m-0'>
      <div>
        <form onChange={handleRaceSelection} key='raceForm'>
          <Races races={data.allRaces?.nodes}></Races>
        </form>
        <form onChange={handleSubRaceSelection} key='subraceForm'>
          <Subraces subraces={activeRace?.subracesByRaceId?.nodes}></Subraces>
        </form>
      </div>
      <div className='space-y-4'>
        {activeRace && (
          <div className='space-y-4'>
            <RaceCards race={activeRace} />
          </div>
        )}
        {activeSubrace && (
          <>
            <SubraceCards subrace={activeSubrace} />
          </>
        )}
      </div>
    </div>
  )
}

export default RaceSelectionForm
