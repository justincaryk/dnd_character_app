import React, { useState } from 'react'
import { useParams } from 'react-router'
import {
  useGetAllRacesQuery,
  useUpdateCharacterMutation,
} from '../../../generated/graphql'
import { RaceCards } from '../../shared/race-cards'
import SubraceCards from '../../shared/subrace-cards'

const RaceSelectionForm: React.FC = () => {
  const { id }: any = useParams()

  const [selectedRaceId, setSelectedRaceId] = useState<string | null>(null)
  const [selectedSubraceId, setSelectedSubraceId] = useState<string | null>(null)
  const [activeRace, setActiveRace] = useState<any>(null)

  const { data: races, loading: racesLoading } = useGetAllRacesQuery()
  const [performUpdate, { data: updateResult, loading: updateLoading }] = useUpdateCharacterMutation()

  const handleRaceSelection = (event: React.ChangeEvent<any>) => {
    setSelectedRaceId(event.currentTarget.value)
    setSelectedSubraceId(null)
    setActiveRace(
      races?.allRaces?.nodes.find((x) => x?.id === event.currentTarget.value)
    )
    performUpdate({
        variables: {
            characterId: id,
            raceId: event.currentTarget.value
        }
    })
  }

  const handleSubRaceSelection = (event: React.ChangeEvent<any>) => {
    setSelectedSubraceId(event.currentTarget.value)
    performUpdate({
        variables: {
            characterId: id,
            subraceId: event.currentTarget.value
        }
    })
  }

  if (!races || racesLoading) {
    return <div>Loading...</div>
  }

  // TODO:
  // make an active race html block for active race only scenarios
  // make a more clear combined html for active race + active subrace scenarios

  return (
    <div className='max-w-screen-sm m-auto m-0'>
      <div>
        <form onChange={handleRaceSelection} key='raceForm'>
          <label className='font-bold font-roboto text-lg'>Choose a Race</label>
          <select
            className='w-full border rounded text-lg p-2'
            defaultValue={''}
          >
            <option value=''>Make a selection</option>
            {races?.allRaces?.nodes.map((x: any) => (
              <option value={x.id} key={x.id}>
                {x.name}
              </option>
            ))}
          </select>
        </form>
        {activeRace && activeRace?.subracesByRaceId?.nodes.length && (
          <form onChange={handleSubRaceSelection} key='subraceForm'>
            <label className='font-bold font-roboto text-lg'>
              Choose a Subrace
            </label>
            <select className='w-full border rounded-b text-xl p-2'>
              <option value='' key='100000000' selected disabled>
                Make a selection
              </option>
              {activeRace?.subracesByRaceId?.nodes.map((subrace: any) => (
                <option value={subrace?.id} key={subrace?.id}>
                  {subrace?.name}
                </option>
              ))}
            </select>
          </form>
        )}
      </div>
      <div className='space-y-4'>
        {selectedRaceId && (
          <div className='space-y-4'>
            <RaceCards race={activeRace} />
          </div>
        )}
        {selectedSubraceId && (
          <>
            <SubraceCards subrace={activeRace?.subracesByRaceId?.nodes} />
          </>
        )}
      </div>
    </div>
  )
}

export default RaceSelectionForm
