import React from 'react'

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

interface Props {
  race: any
}
export const RaceCards: React.FC<Props> = ({ race }) => {

  const racialTraitsStr = buildRacialTraitsString(race)
  const languagesString = buildLanguagesString(race.languages)
  
  return (
    <div className='space-y-4'>
      {/* <div className='bg-white rounded px-2 py-3 text-sm border border-2'>
        <div className='font-bold'>Race:</div>
        <div>{race.name}</div>
      </div> */}
      <div className='bg-white rounded px-2 py-3 text-sm border border-2 text-sm'>
        <div className='font-bold'>Racial Traits:</div>
        <div>{racialTraitsStr}</div>
      </div>
      <div className='bg-white rounded px-2 py-3 text-sm border border-2'>
        <div className='font-bold'>Summary:</div>
        <div>{race.summary}</div>
      </div>
      <div className='bg-white rounded px-2 py-3 text-sm border border-2'>
        <div className='font-bold'>Movement:</div>
        <div>{race.movement} feet</div>
      </div>
      <div className='bg-white rounded px-2 py-3 text-sm border border-2'>
        <div className='font-bold'>Languages:</div>
        <div>{languagesString}</div>
      </div>
      <div className='bg-white rounded px-2 py-3 text-sm border border-2'>
        <div className='font-bold'>Lifespan:</div>
        <div>{race.lifespan}</div>
      </div>
      <div className='bg-white rounded px-2 py-3 text-sm border border-2'>
        <div className='font-bold'>Alignment:</div>
        <div>{race.alignment}</div>
      </div>

      {race.raceFeaturesByRaceId.nodes.map((feat: any) => (
        <div className='bg-white rounded px-2 py-3 text-sm border border-2' key={feat.racialFeatureByRacialFeatureId.name}>
          <div className='font-bold'>
            {feat.racialFeatureByRacialFeatureId.name}
          </div>
          <div>{feat.racialFeatureByRacialFeatureId.description}</div>
        </div>
      ))}
    </div>
  )
}
