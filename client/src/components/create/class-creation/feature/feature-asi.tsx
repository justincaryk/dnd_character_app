import React, { useEffect, useState } from 'react'
import classnames from 'classnames'
import { numberToSpeakable } from '../../../../lib/utils'
import {
  AsiFromType,
  FeatFromType,
  useAllAsisQuery,
  useAllFeatsQuery,
  useGetAllAsiSelectionsByFeatIdQuery,
  useCreateAsiSelectedMutation,
  useCreateFeatBaseSelMutation,
  useDeleteAsiSelectedMutation,
  useDeleteFeatSelByIdMutation,
  useGetAllAsiSelectionsQuery,
  useGetFeatSelectedByCharacterIdQuery,
  useUpdateAsiSelectMutation,
  useUpdateFeatSelectedByIdMutation,
} from '../../../../generated/graphql'

interface Props {
  feature: {
    id: string
    entries: any
    classSource: string
    isClassFeatureVariant: string
    level: 4 | 6 | 8 | 12 | 14 | 16 | 19
    name: string
    page: number
    source: string
    scores?: string[]
  }
  viewOnly?: boolean
  characterId: string
}

const asiLevelHash = {
  '4': {
    '1': AsiFromType.Asi4_1,
    '2': AsiFromType.Asi4_2,
  },
  '6': {
    '1': AsiFromType.Asi6_1,
    '2': AsiFromType.Asi6_2,
  },
  '8': {
    '1': AsiFromType.Asi8_1,
    '2': AsiFromType.Asi8_2,
  },
  '10': {
    '1': AsiFromType.Asi10_1,
    '2': AsiFromType.Asi10_2,
  },
  
  '12': {
    '1': AsiFromType.Asi12_1,
    '2': AsiFromType.Asi12_2,
  },
  '14': {
    '1': AsiFromType.Asi14_1,
    '2': AsiFromType.Asi14_2,
  },
  '16': {
    '1': AsiFromType.Asi16_1,
    '2': AsiFromType.Asi16_2,
  },
  '19': {
    '1': AsiFromType.Asi19_1,
    '2': AsiFromType.Asi19_2,
  },
}

const featLevelHash = {
  '4': FeatFromType.Asi_4,
  '6': FeatFromType.Asi_6,
  '8': FeatFromType.Asi_8,
  '10': FeatFromType.Asi_10,
  '12': FeatFromType.Asi_12,
  '14': FeatFromType.Asi_14,
  '16': FeatFromType.Asi_16,
  '19': FeatFromType.Asi_19,
}

const FeatureAsi: React.FC<Props> = ({ feature, viewOnly, characterId }) => {
  const [featSelection, setFeatSelection] = useState<any>(null)
  const [featAsiSel, setFeatAsiSel] = useState('')
  const [asiSelection1, setAsiSelection1] = useState('')
  const [asiSelection2, setAsiSelection2] = useState('')

  const [detailsActive, toggleDetailsActive] = useState(false)
  const [entries, setEntries] = useState<any>(null)
  const [choice, setChoice] = useState('')
  const { data: asis, loading: asisLoading } = useAllAsisQuery()
  const { data: feats, loading: featsLoading } = useAllFeatsQuery()

  const {
    data: asi1,
    loading: asi1Loading,
    refetch: refetchAsi1,
  } = useGetAllAsiSelectionsQuery({
    variables: {
      characterId: characterId,
      asiFrom: asiLevelHash[feature.level]['1'],
    },
  })
  const {
    data: asi2,
    loading: asi2Loading,
    refetch: refetchAsi2,
  } = useGetAllAsiSelectionsQuery({
    variables: {
      characterId: characterId,
      asiFrom: asiLevelHash[feature.level]['2'],
    },
  })
  
  const {
    data: featSel,
    loading: featSelLoading,
    refetch: refetchFeatSel,
  } = useGetFeatSelectedByCharacterIdQuery({
    variables: {
      characterId: characterId,
      featFrom: featLevelHash[feature.level],
    },
  })

  
  const {
    data: featAsi,
    loading: featAsiLoading,
    refetch: refetchFeatAsi
  } = useGetAllAsiSelectionsByFeatIdQuery({
    variables: {
      characterId: characterId,
      featId: featSelection?.id
    }
  })

  const [performCreateFeat] = useCreateFeatBaseSelMutation()
  const [performUpdateFeat] = useUpdateFeatSelectedByIdMutation()
  const [performDeleteFeat] = useDeleteFeatSelByIdMutation()

  const [performCreateAsi] = useCreateAsiSelectedMutation()
  const [performUpdateAsi] = useUpdateAsiSelectMutation()
  const [performDeleteAsi] = useDeleteAsiSelectedMutation()



  useEffect(() => {
    const parsed = JSON.parse(feature.entries).e
    setEntries(parsed)
  }, [feature.entries])

  useEffect(() => {
    if (featSel?.allFeatSelecteds?.nodes[0] && !choice) {
      setChoice('feat')
    }
    else if (
      (asi1?.allAsiSelecteds?.nodes[0] || asi2?.allAsiSelecteds?.nodes[0]) &&
      !choice &&
      !asi1?.allAsiSelecteds?.nodes[0]?.featId
    ) {
      setChoice('asi')
    }
  }, [asi1, asi2, featSel, choice, feats, setChoice])

  useEffect(() => {
    if (feats && featSel) {
      const feat = feats?.allFeats?.feats.find(
        (f) => featSel?.allFeatSelecteds?.nodes[0]?.featId === f?.id
      )

      setFeatSelection(feat)
    }
  }, [feats, featSel])

  useEffect(() => {
    if (
      !asiSelection1 &&
      asi1?.allAsiSelecteds?.nodes[0]?.asiByAsiId?.asiId &&
      asi1?.allAsiSelecteds?.nodes[0]?.asiByAsiId?.asiId != asiSelection1
    ) {
      setAsiSelection1(asi1.allAsiSelecteds.nodes[0].asiByAsiId.asiId)
    }
  }, [asi1, asiSelection1, setAsiSelection1])

  useEffect(() => {
    if (
      !asiSelection2 &&
      asi2?.allAsiSelecteds?.nodes[0]?.asiByAsiId?.asiId &&
      asi2?.allAsiSelecteds?.nodes[0]?.asiByAsiId?.asiId != asiSelection2
    ) {
      setAsiSelection2(asi2.allAsiSelecteds.nodes[0].asiByAsiId.asiId)
    }
  }, [asi2, asiSelection2, setAsiSelection2])

  useEffect(()=> {
    if (!featAsiSel && featAsi?.allAsiSelecteds?.nodes[0]) {
      const asiScore = asis?.allAsis?.nodes.find(x => x?.asiId === featAsi.allAsiSelecteds?.nodes[0]?.asiId)?.long
      setFeatAsiSel(asiScore ? asiScore : '')
    }
  }, [featAsi, asis, featAsiSel, setFeatAsiSel])

  const handleChoiceSelection = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (!e.currentTarget.value) {
      if (asi1?.allAsiSelecteds?.nodes[0]) {
        performDeleteAsi({
          variables: {
            asiSelId: asi1?.allAsiSelecteds?.nodes[0]?.asiSelId,
          },
        })
        refetchAsi1()
      }
      if (asi2?.allAsiSelecteds?.nodes[0]) {
        performDeleteAsi({
          variables: {
            asiSelId: asi2?.allAsiSelecteds?.nodes[0]?.asiSelId,
          },
        })
        refetchAsi2()
      }
      if (featSel?.allFeatSelecteds?.nodes[0]) {
        performDeleteFeat({
          variables: {
            featSelId: featSel.allFeatSelecteds.nodes[0].featSelId,
          },
        })
        refetchFeatSel()
      }
      setChoice('')
      setFeatSelection(null)
      setAsiSelection1('')
      setAsiSelection2('')
      return
    }

    if (e.currentTarget.value == 'feat') {
      // perform delete on asi1 && asi2
      if (asi1?.allAsiSelecteds?.nodes[0]) {
        performDeleteAsi({
          variables: {
            asiSelId: asi1?.allAsiSelecteds?.nodes[0]?.asiSelId,
          },
        })
      }
      if (asi2?.allAsiSelecteds?.nodes[0]) {
        performDeleteAsi({
          variables: {
            asiSelId: asi2?.allAsiSelecteds?.nodes[0]?.asiSelId,
          },
        })
      }
      setChoice('feat')
      setAsiSelection1('')
      setAsiSelection2('')
    } else {
      if (featSel?.allFeatSelecteds?.nodes[0]) {
        performDeleteFeat({
          variables: {
            featSelId: featSel.allFeatSelecteds.nodes[0].featSelId,
          },
        })
      }
      setChoice('asi')
      setFeatSelection(null)
    }
  }

  const handleFeatSelection = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (!e.currentTarget.value && featSel?.allFeatSelecteds?.nodes[0]) {
      performDeleteFeat({
        variables: {
          featSelId: featSel.allFeatSelecteds.nodes[0].featSelId,
        },
      })

      setFeatSelection('')
      await refetchFeatSel()
      return
    }

    if (!featSel?.allFeatSelecteds?.nodes[0]) {
      performCreateFeat({
        variables: {
          characterId: characterId,
          featFrom: featLevelHash[feature.level],
          featId: e.currentTarget.value,
        },
      })
    } else {
      performUpdateFeat({
        variables: {
          featSelId: featSel.allFeatSelecteds.nodes[0].featSelId,
          featFrom: featLevelHash[feature.level],
          featId: e.currentTarget.value,
        },
      })
    }

    const feat = feats?.allFeats?.feats.filter(
      (f) => e.currentTarget.value === f?.id
    )
    if (feat?.length) {
      setFeatSelection(feat[0])
    }

    await refetchFeatSel()
  }

  const handleAsiSelection = async (
    e: React.ChangeEvent<HTMLSelectElement>,
    asiNum: number
  ) => {
    // if empty -> delete asiSelection
    if (!e.currentTarget.value) {
      const id =
        asiNum == 1
          ? asi1?.allAsiSelecteds?.nodes[0]?.asiSelId
          : asi2?.allAsiSelecteds?.nodes[0]?.asiSelId
      await performDeleteAsi({
        variables: {
          asiSelId: id,
        },
      })

      if (asiNum === 1) {
        await refetchAsi1()
      } else {
        await refetchAsi2()
      }

      setAsiSelection1('')

      return
    }

    // if e && !asiSelection1
    if (!asi1?.allAsiSelecteds?.nodes[0]) {
      // create
      const asiFrom =
        asiNum === 1
          ? asiLevelHash[feature.level]['1']
          : asiLevelHash[feature.level]['2']
      performCreateAsi({
        variables: {
          characterId: characterId,
          from: asiFrom,
          count: 1,
          asiId: e.currentTarget.value,
        },
      })
    } else {
      const id =
        asiNum === 1
          ? asi1?.allAsiSelecteds?.nodes[0]?.asiSelId
          : asi2?.allAsiSelecteds?.nodes[0]?.asiSelId
      performUpdateAsi({
        variables: {
          asiSelId: id,
          asiId: e.currentTarget.value,
        },
      })
    }

    if (asiNum === 1) {
      setAsiSelection1(e.currentTarget.value)
      refetchAsi1()
    } else {
      setAsiSelection2(e.currentTarget.value)
      refetchAsi2()
    }
  }

  const handleFeatAsiSel = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    
    if (!e.currentTarget.value) {
      //delete
      await performDeleteAsi({
        variables: {
          asiSelId: featAsi?.allAsiSelecteds?.nodes[0]?.asiSelId
        }})
      await refetchFeatAsi()
      setFeatAsiSel('')
      return
    }

    const asiId = asis?.allAsis?.nodes.find(x => x?.long?.toLowerCase() === e.currentTarget.value.toLowerCase())?.asiId
    const asiScore = e.currentTarget.value
    if (!featAsi?.allAsiSelecteds?.nodes[0]) {
      //create
      await performCreateAsi({
        variables: {
          characterId: characterId,
          from: AsiFromType.Points,
          asiId: asiId,
          featId: featSelection.id,
          count: 1,
        }
      })
      await refetchFeatAsi()

      
    } else {
      //perform update
      await performUpdateAsi({
        variables: {
          asiSelId: featAsi.allAsiSelecteds.nodes[0].asiSelId,
          asiId: asiId
        }
      })
      await refetchFeatAsi()
    }

    setFeatAsiSel(asiScore)
  }

  if (
    asisLoading ||
    featsLoading ||
    asi1Loading ||
    asi2Loading ||
    featSelLoading
  ) {
    return <div>...Loading</div>
  }

  const isOptionMissing = () => {
    if (!choice) {
      return true
    }
    if (!featSelection && choice === 'feat') {
      return true
    }
    if (featSelection.scores && !featAsiSel) {
      return true
    }
    if ((!asiSelection1 || !asiSelection2) && choice === 'asis') {
      return true
    }

    return false
  }

  const optionsMissing = isOptionMissing()

  return (
    <div className='relative'>
      {optionsMissing ? (
        <div className='absolute -top-2 -left-2'>
          <div className='bg-sky-blue circle rounded-full flex items-center justify-center h-6 w-6 text-white font-bold'>
            !
          </div>
        </div>
      ) : null}
      <div className='space-y-3'>
        <div className='border bg-white'>
          <div
            className={classnames({
              'p-2 hover:bg-cream cursor-pointer': true,
              'bg-cream': detailsActive,
              'border-1 border-sky-blue':
                optionsMissing && !viewOnly ? true : false,
            })}
            onClick={() => toggleDetailsActive(!detailsActive)}
          >
            <div className='text-md font-roboto'>{feature.name}</div>
            <div className='text-xs text-gray-500'>
              {numberToSpeakable(feature.level)} level
            </div>
          </div>
          {detailsActive && (
            <div className='p-2 text-sm space-y-2'>
              {entries.map((entry: any) => (
                <div>{entry}</div>
              ))}
              {!viewOnly && (
                <div className='space-y-3'>
                  <select
                    className='w-full border rounded text-sm p-2'
                    defaultValue={choice}
                    onChange={handleChoiceSelection}
                  >
                    <option value=''>- Choose an Option -</option>
                    <option value='asi'>Ability Score Improvement</option>
                    <option value='feat'>Feat</option>
                  </select>
                  {choice === 'asi' ? (
                    <div className='ml-2 space-y-2'>
                      <select
                        className='w-full border rounded text-sm p-2'
                        defaultValue={asiSelection1}
                        onChange={(e) => handleAsiSelection(e, 1)}
                      >
                        <option value=''>- Choose an Option -</option>
                        {asis?.allAsis?.nodes.map((asi) => (
                          <option key={asi?.asiId} value={asi?.asiId}>
                            {asi?.long} Score
                          </option>
                        ))}
                      </select>
                      <select
                        className='w-full border rounded text-sm p-2'
                        defaultValue={asiSelection2}
                        onChange={(e) => handleAsiSelection(e, 2)}
                      >
                        <option value=''>- Choose an Option -</option>
                        {asis?.allAsis?.nodes.map((asi) => (
                          <option key={asi?.asiId} value={asi?.asiId}>
                            {asi?.long} Score
                          </option>
                        ))}
                      </select>
                    </div>
                  ) : null}
                  {choice === 'feat' ? (
                    <select
                      className='w-full ml-2 border rounded text-sm p-2'
                      defaultValue={featSel?.allFeatSelecteds?.nodes[0]?.featId}
                      onChange={handleFeatSelection}
                    >
                      <option value=''>- Choose an Option -</option>
                      {feats?.allFeats?.feats.map((x) => (
                        <option value={x?.id}>{x?.name}</option>
                      ))}
                    </select>
                  ) : null}
                  {choice === 'feat' && featSelection ? (
                    <div className='ml-2'>
                      <div>{featSelection.desc}</div>

                      {featSelection.prereq ? (
                        <div>Prerequisite: {featSelection.prereq}</div>
                      ) : null}

                      {featSelection.points && featSelection.points.length && (
                        <ul className='list-disc list-inside ml-2'>
                          {featSelection.points.map((p: string, i: number) => {
                            return <li key={i}>{p}</li>
                          })}
                        </ul>
                      )}

                      {featSelection?.scores && (
                        <select
                          className='w-full border rounded text-sm p-2'
                          defaultValue={featAsiSel}
                          onChange={handleFeatAsiSel}
                        >
                          <option value=''>- Choose an Ability Score-</option>
                          {featSelection.scores.map((score: string) => (
                            <option key={score} value={score}>
                              {score} Score
                            </option>
                          ))}
                        </select>
                      )}
                    </div>
                  ) : null}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
export default FeatureAsi
