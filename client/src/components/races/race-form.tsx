import React, { useState } from 'react'
import { useGetAllRacesQuery } from '../../generated/graphql'

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
      <div className='font-bold'>{feat.racialFeatureByRacialFeatureId.name}</div>
      <div>{feat.racialFeatureByRacialFeatureId.description}</div>
    </div>
  ))

  return racialFeatureHtmlArray
}

const buildLanguagesString = (languages: string[]) => {
  let languagesStr = 'You can speak, read, and write'

  const lastIndex = languages.length - 1

  for (let i = 0; i < languages.length; i++) {
    const language = languages[i]

    // add commas because more than 2 options =>  x, y, and z
    if (i != lastIndex && lastIndex > 1) {
      languagesStr = `${languagesStr} ${language}, `
    }
    // no commas needed because there are only 2 options => x and y
    if (i != lastIndex) {
      languagesStr = `${languagesStr} ${language} `
    }
    // if last, then check the rules again
    if (i === lastIndex) {
      // if a number, then it's free languages of the player's choice
      if (typeof language == 'number') {
        languagesStr = `${languagesStr} and ${language} extra language${
          language > 1 ? 's' : ''
        } of your choice.`
      }
      // if it's text, it's just another fixed language option to be displayed
      if (typeof language == 'string') {
        languagesStr = `${languagesStr} and ${language}.`
      }
    }
  }

  return languagesStr
}

const buildRacialTraitsString = (race: any) => {
  let racialTraitsArr = []
  if (race.asis) {
    const asiString = buildAsiString(race.asis)
    racialTraitsArr.push(asiString)
  }

  if (race.raceFeaturesByRaceId.nodes.length) {
    for (const feat of race.raceFeaturesByRaceId.nodes) {
      const featName = feat.racialFeatureByRacialFeatureId.name
      racialTraitsArr.push(featName)
    }
  }

  return racialTraitsArr.join(', ')
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

  let raceDetailHtml
  let subraceDetailHtml

  // TODO:
  // make an active race html block for active race only scenarios
  // make a more clear combined html for active race + active subrace scenarios

  if (activeRace) {
    const racialFeatureHtmlBlocks = activeRace.raceFeaturesByRaceId.nodes.length
      ? buildRacialFeatureHtmlBlocks(activeRace.raceFeaturesByRaceId.nodes)
      : ''
    const languagesString = buildLanguagesString(activeRace.languages)
    const racialTraitsStr = buildRacialTraitsString(activeRace)

    raceDetailHtml = (
      <div className='space-y-4'>
        <div className='bg-white rounded px-2 py-3 text-sm border border-2'>
          <div className='font-bold'>Race:</div>
          <div>{activeRace.name}</div>
        </div>
        <div className='bg-white rounded px-2 py-3 text-sm border border-2 text-sm'>
          <div className='font-bold'>Racial Traits:</div>
          <div>{racialTraitsStr}</div>
        </div>
        <div className='bg-white rounded px-2 py-3 text-sm border border-2'>
          <div className='font-bold'>Summary:</div>
          <div>{activeRace.summary}</div>
        </div>
        <div className='bg-white rounded px-2 py-3 text-sm border border-2'>
          <div className='font-bold'>Movement:</div>
          <div>{activeRace.movement} feet</div>
        </div>
        <div className='bg-white rounded px-2 py-3 text-sm border border-2'>
          <div className='font-bold'>Languages:</div>
          <div>{languagesString}</div>
        </div>
        <div className='bg-white rounded px-2 py-3 text-sm border border-2'>
          <div className='font-bold'>Lifespan:</div>
          <div>{activeRace.lifespan}</div>
        </div>
        <div className='bg-white rounded px-2 py-3 text-sm border border-2'>
          <div className='font-bold'>Alignment:</div>
          <div>{activeRace.alignment}</div>
        </div>

        {racialFeatureHtmlBlocks}
      </div>
    )
  }

  if (activeSubrace) {
    const subracialFeatureHtmlBlock = activeSubrace.subraceFeaturesBySubraceId
      .nodes.length
      ? buildRacialFeatureHtmlBlocks(
          activeSubrace.subraceFeaturesBySubraceId.nodes
        )
      : ''
    const asiString = buildAsiString(activeSubrace.asis)

    subraceDetailHtml = (
      <div>
        <div className='bg-white rounded px-2 py-3 text-sm border border-2'>
          <div className='font-bold'>Subrace Name:</div>
          <div>{activeSubrace.name}</div>
        </div>
        <div className='bg-white rounded px-2 py-3 text-sm border border-2'>
          <div className='font-bold'>Ability Score Increase:</div>
          <div>{asiString}</div>
        </div>

        {subracialFeatureHtmlBlock}
      </div>
    )
  }

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
      <div>
        {raceDetailHtml}
        {subraceDetailHtml}
      </div>
    </div>
  )
}

export default RaceSelectionForm
