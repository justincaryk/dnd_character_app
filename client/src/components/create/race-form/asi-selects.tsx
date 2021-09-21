import React, { useState, useEffect } from 'react'
import {
  useAllAsisQuery,
  useCreateAsiSelectedMutation,
  useGetAllAsiSelectionsQuery,
  useUpdateAsiSelectMutation,
  useDeleteAsiSelectedMutation,
  AsiFromType,
} from '../../../generated/graphql'

interface Props {
  raceAsis: any
  characterId: any
}

const AsiSelects: React.FC<Props> = ({ raceAsis, characterId }) => {
  const [loading, setLoading] = useState(false)
  const [asisSelected, setAsisSelected] = useState<any>([])
  const [performCreate, { data: createD }] = useCreateAsiSelectedMutation()
  const [performUpdate, { data: updateD }] = useUpdateAsiSelectMutation()
  const [performDelete, { data: deleteD }] = useDeleteAsiSelectedMutation()
  const { data: asis, loading: asiLoading } = useAllAsisQuery()

  const {
    data: asisSelData,
    loading: asiSelsLoading,
    refetch: refetchAllAsis,
  } = useGetAllAsiSelectionsQuery({
    variables: {
      characterId: characterId,
    },
  })

  useEffect(() => {
    setLoading(true)
    const refetch = async () => {
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
  let dropdowns

  for (const opt of parsed) {
    const keys = Object.keys(opt)
    for (const key of keys) {
      if (key === 'ANY') {
        const val = opt[key]
        dropdowns = Array(val).fill('x', 0)
      }
    }
  }

  const handleSelection = (
    e: React.ChangeEvent<HTMLSelectElement>,
    i: number
  ) => {
    if (!asisSelected?.allAsiSelecteds?.nodes[i]) {
      performCreate({
        variables: {
          characterId: characterId,
          from: AsiFromType.Race,
          count: 1,
          asiId: e.currentTarget.value,
        },
      })
      refetchAllAsis()
    } else {
      const id = asisSelected?.allAsiSelecteds?.nodes[i]?.asiSelId
      // if there is no value, delete the id
      if (!e.currentTarget.value) {
        performDelete({
          variables: {
            asiSelId: id,
          },
        })
        return
      }

      // update it to the new vlaue
      performUpdate({
        variables: {
          asiSelId: id,
          asiId: e.currentTarget.value,
        },
      })
    }
  }

  return (
    <div className='bg-white border'>
      <div className='bg-cream px-3 py-2 text-md font-roboto'>Ability Score Increase</div>
      <div className='p-3 space-y-2'>
        {dropdowns?.map((x, i) => (
          <select
            key={i}
            className='w-full border rounded text-sm p-2'
            defaultValue={asisSelected[i]?.asiId || ''}
            onChange={(e) => handleSelection(e, i)}
          >
            <option value=''>- Choose an Ability Score -</option>
            {asis?.allAsis?.nodes.map((x) => {
              let text = x?.long
              text = text?.replace(/^\w/, (c) => c.toUpperCase())
              return (
                <option key={x?.asiId} value={x?.asiId}>
                  {text} Score
                </option>
              )
            })}
          </select>
        ))}
      </div>
    </div>
  )
}

export default AsiSelects
