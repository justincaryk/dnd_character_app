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
    0: 0,
    3: -3,
    4: -3,
    5: -2,
    6: -2,
    7: -1,
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
    21: +5,
    22: +6,
    23: +6,
    24: +7,
    25: +7,
    26: +8,
    27: +8,
    28: +9,
    29: +9,
    30: +10,
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
    
    // 1st level is max + after that half rounded up + bonus
    const base = hdFaces
    const levelUp = (currentLevel - 1) * (Math.floor(hdFaces/2) + 1)
    const bonus = bonusHash[conScore]
    const hp = base + levelUp + bonus
    setHitPoints(hp)
  }, [core, asisSel, asis, currentLevel, hdFaces])

  return (
    <div>
      <span className='font-bold'>Max Hit Points: &nbsp;</span>
      <span>{hitPoints}</span>
    </div>
  )
}

export default HitPoints
