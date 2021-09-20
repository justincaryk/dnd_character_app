import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import {
  useGetAllRacesQuery,
  useUpdateCharacterMutation,
  useAllAsisQuery,
  useCreateAsiSelectedMutation,
  useGetAllAsiSelectionsQuery,
  useGetCharacterByIdQuery,
  useUpdateAsiSelectMutation,
  useDeleteAsiSelectedMutation,
  useDeleteAsiSelByCharIdMutation,
  AsiFromType,
} from '../../../generated/graphql'
import { RaceCards } from '../../shared/race-cards'
import SubraceCards from '../../shared/subrace-cards'

interface Props {
  raceAsis: any
  characterId: any
}
const AsiSelects: React.FC<Props> = ({raceAsis, characterId}: any) => {
  const [ loading, setLoading ] = useState(false)
  const [asisSelected, setAsisSelected] = useState<any>([])
  const [performCreate, { data: createD }] = useCreateAsiSelectedMutation()
  const [performUpdate, { data: updateD }] = useUpdateAsiSelectMutation()
  const [performDelete, { data: deleteD }] = useDeleteAsiSelectedMutation()
  const { data: asis, loading: asiLoading, networkStatus } = useAllAsisQuery()
  const { data: asisSelData, loading: asiSelsLoading, refetch: refetchAllAsis } = useGetAllAsiSelectionsQuery({
    variables: {
      characterId: characterId
    }
  })

  useEffect(() => {
    setLoading(true)
    const refetch = async ()=> {
      const { data } = await refetchAllAsis()
      setAsisSelected(data.allAsiSelecteds?.nodes)
      setLoading(false)
    }
    refetch()
  }, [raceAsis, refetchAllAsis, asisSelData, setAsisSelected])
  
  if (asiLoading || asiSelsLoading || loading) {
    return null
  }
  
  const parsed = JSON.parse(raceAsis).options
  let dropdowns;

  for (const opt of parsed) {
    const keys = Object.keys(opt)
    for (const key of keys) {
      if (key === 'ANY') {
        const val = opt[key]
        dropdowns = Array(
          val
        ).fill('x',0)
      }
    }
  }

  const handleSelection = (e: React.ChangeEvent<HTMLSelectElement>, i: number) => {
    if (!asisSelected?.allAsiSelecteds?.nodes[i]) { 
      performCreate({
        variables: {
          characterId: characterId,
          from: AsiFromType.Race,
          count: 1,
          asiId: e.currentTarget.value
        }
      })
      refetchAllAsis()
    } else {
      const id = asisSelected?.allAsiSelecteds?.nodes[i]?.asiSelId
      // if there is no value, delete the id
      if (!e.currentTarget.value) {
        performDelete({
          variables: {
            asiSelId: id
          }
        })
        return
      }
      
      // update it to the new vlaue
      performUpdate({
        variables: {
          asiSelId: id,
          asiId: e.currentTarget.value
        }
      })
    }

  }
  
  return (
    <>
      {
        dropdowns?.map((x, i) => (
          <select 
            key={i}
            className='w-full border rounded text-lg p-2'
            defaultValue={asisSelected[i]?.asiId || ''}
            onChange={e => handleSelection(e, i)}
          >
            <option value=''>- Choose an Ability Score -</option>
            {
              asis?.allAsis?.nodes.map(x => {
                let text = x?.long
                text = text?.replace(/^\w/, (c) => c.toUpperCase());
                return (
                  <option key={x?.asiId} value={x?.asiId}>{text} Score</option>
                )
              })
            }
          </select>
        ))
      }
    </>
  )
}

const RaceSelectionForm: React.FC = () => {
  const { id }: any = useParams()

  const [selectedRaceId, setSelectedRaceId] = useState<string | null>(null)
  const [selectedSubraceId, setSelectedSubraceId] = useState<string | null>(null)
  const [activeRace, setActiveRace] = useState<any>(null)
  const { data: char } = useGetCharacterByIdQuery({
    variables: {
      characterId: id
    }
  })
  const { data: races, loading: racesLoading } = useGetAllRacesQuery()
  const [performUpdate, { data: updateResult, loading: updateLoading }] = useUpdateCharacterMutation()
  const [performDeleteAllRaceAsis, { data: deleteAllComplete}] = useDeleteAsiSelByCharIdMutation()
  
  useEffect(() => {
    if (!selectedRaceId && char?.characterByCharacterId?.raceId && races?.allRaces?.nodes.length) {
      setSelectedRaceId(char.characterByCharacterId?.raceId)
      if (!activeRace) {
        setActiveRace(
          races?.allRaces?.nodes.find((x) => x?.id === char?.characterByCharacterId?.raceId)
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
        characterId: id
      }
    })
  
    setSelectedRaceId(event.target.value)
    setSelectedSubraceId(null)
    const activeRace = races?.allRaces?.nodes.find((x) => x?.id === event.target.value)
    
    setActiveRace(
      activeRace
    )
    // tell db there's a new race saved
    await performUpdate({
        variables: {
            characterId: id,
            raceId: event.target.value || null
        }
    })
  }

  const handleSubRaceSelection = (event: React.ChangeEvent<any>) => {
    setSelectedSubraceId(event.target.value)
    performUpdate({
        variables: {
            characterId: id,
            subraceId: event.target.value
        }
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
        ): null}
      </div>
      <div className='space-y-2'>
        { activeRace && (
          <AsiSelects 
            raceAsis={activeRace.asis} 
            characterId={id}
          />
        )}
      </div>
      <div className='space-y-4 mt-4'>
        {selectedRaceId && activeRace && (
          <div className='space-y-4'>
            <RaceCards race={activeRace} />
          </div>
        )}
        {selectedSubraceId && (
          <>
            <SubraceCards subrace={activeRace?.subracesByRaceId?.nodes.find((x: any) => x?.id === selectedSubraceId)} />
          </>
        )}
      </div>
    </div>
  )
}

export default RaceSelectionForm
