import React, { useEffect, useState } from 'react'
import {
  useAllAsisQuery,
  useGetAllAsiSelectionsQuery,
  useGetAsiCoreByCharacterIdQuery,
} from '../../../generated/graphql'

interface Props {
  characterId: string
  hdFaces: number
  currentLevel: number
}

type NumHashKey = {
    [key: number]: number
}
const bonusHash: NumHashKey = {
    8: -1,
    9: -1,
    10: 0,
    11: 0,
    12: +1,
    13: +1,
    14: +2,
    15: +2,
    16: +3,
    17: +3,
    18: +4,
    19: +4,
    20: +5,
}

const HitPoints: React.FC<Props> = ({ characterId, hdFaces, currentLevel}) => {
  const [hitPoints, setHitPoints] = useState(0)
  const { data: asis, loading: asiLoading } = useAllAsisQuery()
  const {
    data: asisSel,
    loading: asiSelsLoading,
    refetch: refetchAllAsis,
  } = useGetAllAsiSelectionsQuery({
    variables: {
      characterId: characterId,
    },
  })
  const {
    data: core,
    loading: coreLoading,
    refetch: refetchAsiCore,
  } = useGetAsiCoreByCharacterIdQuery({
    variables: {
      characterId: characterId,
    },
  })

  useEffect(() => {
    let conScore = 0
    if (core && asisSel && asis) {
      const conAsiId = asis.allAsis?.nodes.find((x) => x?.short === 'con')
      conScore += core.allAsiSelectedCores?.nodes[0]?.constitution || 0

      asisSel.allAsiSelecteds?.nodes.forEach(x => {
          if (x?.asiByAsiId?.asiId === conAsiId) {
              conScore += x?.count || 0
          }
      })
    }
    setHitPoints((currentLevel * hdFaces) + bonusHash[conScore])
  }, [core, asisSel, asis, currentLevel])

  return (
    <div>
      <span className='font-bold'>Max Hit Points: &nbsp;</span>
      <span>{hitPoints}</span>
    </div>
  )
}

export default HitPoints
