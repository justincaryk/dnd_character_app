import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import {
  useGetAllRacesQuery,
  useUpdateCharacterMutation,
  useGetCharacterByIdQuery,
  useDeleteAsiSelByCharIdMutation,
} from '../../../generated/graphql'
import { RaceCards } from '../../shared/race-cards'
import SubraceCards from '../../shared/subrace-cards'
import AsiSelects from './asi-selects'
import FeatSelects from './feat-selects'

const RaceSelectionForm: React.FC = () => {
  const { id }: any = useParams()
  const [showRaceInfo, toggleShowRaceInfo] = useState(false)
  const [selectedRaceId, setSelectedRaceId] = useState<string | null>(null)
  const [selectedSubraceId, setSelectedSubraceId] = useState<string | null>(
    null
  )
  const [activeRace, setActiveRace] = useState<any>(null)
  const { data: char } = useGetCharacterByIdQuery({
    variables: {
      characterId: id,
    },
  })
  const { data: races, loading: racesLoading } = useGetAllRacesQuery()
  const [performUpdate, { data: updateResult, loading: updateLoading }] =
    useUpdateCharacterMutation()
  const [performDeleteAllRaceAsis, { data: deleteAllComplete }] =
    useDeleteAsiSelByCharIdMutation()

  useEffect(() => {
    if (
      !selectedRaceId &&
      char?.characterByCharacterId?.raceId &&
      races?.allRaces?.nodes.length
    ) {
      setSelectedRaceId(char.characterByCharacterId?.raceId)
      if (!activeRace) {
        setActiveRace(
          races?.allRaces?.nodes.find(
            (x) => x?.id === char?.characterByCharacterId?.raceId
          )
        )
      }
    }
    if (!setSelectedRaceId && char && char.characterByCharacterId?.subraceId) {
      setSelectedSubraceId(char.characterByCharacterId.subraceId)
    }
  }, [char?.characterByCharacterId, races?.allRaces?.nodes])

  const handleRaceSelection = async (event: React.ChangeEvent<any>) => {
    //delete all associated race ids
    await performDeleteAllRaceAsis({
      variables: {
        characterId: id,
      },
    })
    // TODO: delete all associated feat sel ids

    setSelectedRaceId(event.target.value)
    setSelectedSubraceId(null)
    const activeRace = races?.allRaces?.nodes.find(
      (x) => x?.id === event.target.value
    )

    setActiveRace(activeRace)
    // tell db there's a new race saved
    await performUpdate({
      variables: {
        characterId: id,
        raceId: event.target.value || null,
      },
    })
  }

  const handleSubRaceSelection = (event: React.ChangeEvent<any>) => {
    setSelectedSubraceId(event.target.value)
    performUpdate({
      variables: {
        characterId: id,
        subraceId: event.target.value,
      },
    })
  }

  if (!races || racesLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className='max-w-screen-sm m-auto m-0'>
      <div className='space-y-4'>
        <form onChange={handleRaceSelection} key='raceForm'>
          <label className='font-bold font-roboto text-lg'>Choose a Race</label>
          <select
            className='w-full border rounded text-lg p-2'
            defaultValue={char?.characterByCharacterId?.raceId}
          >
            <option value=''>Make a selection</option>
            {races?.allRaces?.nodes.map((x: any) => (
              <option value={x.id} key={x.id}>
                {x.name}
              </option>
            ))}
          </select>
        </form>
        {activeRace && activeRace?.subracesByRaceId?.nodes.length ? (
          <form onChange={handleSubRaceSelection} key='subraceForm'>
            <label className='font-bold font-roboto text-lg'>
              Choose a Subrace
            </label>
            <select
              className='w-full border rounded text-lg p-2'
              defaultValue={char?.characterByCharacterId?.subraceId}
            >
              <option value='' key='100000000'>
                Make a selection
              </option>
              {activeRace?.subracesByRaceId?.nodes.map((subrace: any) => (
                <option value={subrace?.id} key={subrace?.id}>
                  {subrace?.name}
                </option>
              ))}
            </select>
          </form>
        ) : null}
      </div>
      <div className='space-y-2'>
        {activeRace && (
          <AsiSelects raceAsis={activeRace.asis} characterId={id} />
        )}
        {activeRace && (
          <FeatSelects
            raceAsis={activeRace.asis}
            characterId={id}
            raceName={activeRace.name}
          />
        )}
      </div>

      {selectedRaceId && (
        <div className='space-y-4 mt-4'>
          <div 
            className='text-md font-roboto cursor-pointer uppercase' 
            onClick={() => toggleShowRaceInfo(!showRaceInfo)}
          >
            {showRaceInfo ? 'Hide Details -' : 'Show Details +'}
          </div>
          {showRaceInfo && activeRace && (
            <div className='space-y-4'>
              <RaceCards race={activeRace} />
            </div>
          )}
          {showRaceInfo && selectedSubraceId && (
            <>
              <SubraceCards
                subrace={activeRace?.subracesByRaceId?.nodes.find(
                  (x: any) => x?.id === selectedSubraceId
                )}
              />
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default RaceSelectionForm
