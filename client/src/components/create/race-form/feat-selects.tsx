import React, { useEffect, useState } from 'react'

// TODO: remove unused queries
import {
  useUpdateCharacterMutation,
  useAllAsisQuery,
  useCreateAsiSelectedMutation,
  useGetAllAsiSelectionsQuery,
  useGetCharacterByIdQuery,
  useUpdateAsiSelectMutation,
  useDeleteAsiSelectedMutation,
  useDeleteAsiSelByCharIdMutation,
  AsiFromType,
  useDeleteFeatSelByIdMutation,
  useAllFeatsQuery,
  useGetFeatSelectedByCharacterIdQuery,
  FeatFromType,
  useCreateFeatBaseSelMutation,
  useUpdateFeatSelectedByIdMutation,
} from '../../../generated/graphql'

interface Props {
  raceAsis: any
  characterId: any
  raceName: string
}

const FeatSelects: React.FC<Props> = ({ raceAsis, characterId, raceName }) => {
  const [selectedFeat, setSelectedFeat] = useState<any>(null)
  const { data: feats, loading: featsLoading } = useAllFeatsQuery()
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

  const {
    data: featSel,
    loading: featSelLoading,
    refetch,
  } = useGetFeatSelectedByCharacterIdQuery({
    variables: {
      characterId: characterId,
      featFrom: FeatFromType.Race,
    },
  })

  const [performCreate] = useCreateFeatBaseSelMutation()
  const [performUpdate] = useUpdateFeatSelectedByIdMutation()
  const [performDelete] = useDeleteFeatSelByIdMutation()
  const [performCreateAsi] = useCreateAsiSelectedMutation()
  const [performUpdateAsi] = useUpdateAsiSelectMutation()
  const [performDeleteAsi] = useDeleteAsiSelectedMutation()

  useEffect(() => {
    if (featSel && feats) {
      const id = featSel.allFeatSelecteds?.nodes[0]?.featId
      setSelectedFeat(feats.allFeats?.feats.find((x) => x?.id === id))
    }
  }, [featSel, feats])

  const parsed = JSON.parse(raceAsis).options

  let dropdowns

  for (const opt of parsed) {
    const keys = Object.keys(opt)
    for (const key of keys) {
      if (key === 'FEAT') {
        const val = opt[key]
        dropdowns = Array(val).fill('x', 0)
      }
    }
  }
  if (featsLoading || featSelLoading || !dropdowns) {
    return null
  }

  const handleFeatSelection = async (
    e: React.ChangeEvent<HTMLSelectElement>,
    i: number
  ) => {
    if (!e.currentTarget.value) {
      performDelete({
        variables: {
          featSelId: featSel?.allFeatSelecteds?.nodes[i]?.featSelId,
        },
      })
      setSelectedFeat(null)
    }

    const feat = feats?.allFeats?.feats.find(
      (x) => x?.id === e.currentTarget.value
    )
    setSelectedFeat(feat)

    // create or update feat
    if (featSel?.allFeatSelecteds?.nodes[i]) {
      await performUpdate({
        variables: {
          featSelId: featSel.allFeatSelecteds.nodes[i]?.featSelId,
          featFrom: FeatFromType.Race,
          featId: e.currentTarget.value,
        },
      })
      await refetch()
    } else {
      await performCreate({
        variables: {
          characterId: characterId,
          featFrom: FeatFromType.Race,
          featId: e.currentTarget.value,
        },
      })
      await refetch()
    }
  }

  const handleFeatAsiSelection = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const asiSel = asisSelData?.allAsiSelecteds?.nodes.find(
      (x) => x?.featId === selectedFeat.id
    )

    // delete
    if (!e.currentTarget.value && asiSel) {
      performDeleteAsi({
        variables: {
          asiSelId: asiSel?.asiSelId,
        },
      })
      return
    }

    const asi = asis?.allAsis?.nodes.find(
      (x) => x?.long?.toLowerCase() === e.currentTarget.value.toLowerCase()
    )

    if (asiSel) {
      performUpdateAsi({
        variables: {
          asiSelId: asiSel.asiSelId,
          asiId: asi?.asiId,
        },
      })
    } else {
      // create
      performCreateAsi({
        variables: {
          characterId: characterId,
          from: AsiFromType.Race,
          featId: selectedFeat.id,
          asiId: asi?.asiId,
          count: 1,
        },
      })
    }
  }

  return (
    <div className='bg-white border'>
      <div className='bg-cream px-3 py-2 text-md font-roboto'>Feat</div>
      <div className='p-3 space-y-2'>
        {dropdowns?.map((x, i) => (
          <select
            key={i}
            className='w-full border rounded text-sm p-2'
            defaultValue={featSel?.allFeatSelecteds?.nodes[i]?.featId || ''}
            onChange={(e) => handleFeatSelection(e, i)}
          >
            <option value=''>- Choose a Feat -</option>
            {feats?.allFeats?.feats
              .filter((x) => !x?.prereq || x?.prereq?.indexOf(raceName) > -1)
              .map((x) => (
                <option key={x?.id} value={x?.id}>
                  {x?.name}
                </option>
              ))}
          </select>
        ))}
        <div className='text-sm'>{selectedFeat?.desc}</div>
        <ul className='list-disc list-inside text-sm'>
          {selectedFeat?.points?.map((x: any, i: number) => (
            <li key={i}>{x}</li>
          ))}
        </ul>
        {selectedFeat?.scores?.length ? (
          <select
            className='w-full border rounded text-sm p-2'
            defaultValue={asisSelData?.allAsiSelecteds?.nodes.find(
                (x) => x?.featId === selectedFeat.id)?.asiByAsiId?.long?.toLowerCase() || ''}
            onChange={(e) => handleFeatAsiSelection(e)}
          >
            <option value={''}>- Select an Ability Score -</option>
            {selectedFeat.scores.map((score: string, i: number) => (
              <option key={i} value={score.toLowerCase()}>
                {score}
              </option>
            ))}
          </select>
        ) : null}
      </div>
    </div>
  )
}

export default FeatSelects
