import React, { useEffect, useState } from 'react'
import { AttributeInterface } from '../../../lib/types'
import PointBuy from './options/point-buy'
import StandardArray from './options/standard'
import ManualOption from './options/manual'
import AttributeCardBlock from './options/attribute-card-block'
import { useParams } from 'react-router'
import {
  useGetAsiCoreByCharacterIdQuery,
  useCreateAsiCoreMutation,
  useUpdateAsiCoreByIdMutation,
  AsiCoreMethod,
} from '../../../generated/graphql'
import { cloneDeep } from 'lodash'

const AsiGenerator: React.FC = () => {
  const defaultAttributes: any = [
    {
      id: 1,
      name: 'Strength',
      currentAssignedScore: 8,
      previousAssignedScore: 8,
    },
    {
      id: 2,
      name: 'Dexterity',
      currentAssignedScore: 8,
      previousAssignedScore: 8,
    },
    {
      id: 3,
      name: 'Constitution',
      currentAssignedScore: 8,
      previousAssignedScore: 8,
    },
    {
      id: 4,
      name: 'Intelligence',
      currentAssignedScore: 8,
      previousAssignedScore: 8,
    },
    {
      id: 5,
      name: 'Wisdom',
      currentAssignedScore: 8,
      previousAssignedScore: 8,
    },
    {
      id: 6,
      name: 'Charisma',
      currentAssignedScore: 8,
      previousAssignedScore: 8,
    },
  ]
  const { id }: any = useParams()
  const [activeMethod, setActiveMethod] = useState<AsiCoreMethod>(
    AsiCoreMethod.PointBuy
  )
  const [attributes, setAttributes] = useState<AttributeInterface[]>(defaultAttributes)
  const [performCreate, { data: createD, loading: createLoading }] =
    useCreateAsiCoreMutation()
  const [performUpdate, { data: updateD, loading: updateLoading }] =
    useUpdateAsiCoreByIdMutation()
  const {
    data: core,
    loading: coreLoading,
    refetch: refetchAsiCore,
  } = useGetAsiCoreByCharacterIdQuery({
    variables: {
      characterId: id,
    },
  })

  const methods = [
    { id: AsiCoreMethod.PointBuy, name: 'Point Buy' },
    { id: AsiCoreMethod.Standard, name: 'Standard Array' },
    { id: AsiCoreMethod.Manual, name: 'Manual' },
  ]

  

  useEffect(() => {
    if (core?.allAsiSelectedCores?.nodes[0] && !attributes.length) {
    
      const newAttrs = defaultAttributes.map((x: any) => {
        //@ts-ignore
        const value = core.allAsiSelectedCores?.nodes[0][x.name.toLowerCase()]
        x.currentAssignedScore = value
        x.previousAssignedScore = value
        return x
      })

      setActiveMethod(core.allAsiSelectedCores.nodes[0].method)
      setAttributes(newAttrs)
    }
  }, [core?.allAsiSelectedCores?.nodes[0]])


  if (!attributes.length) {
    return <div>...Loading</div>
  }

  const handleMethodChange = async (event: React.ChangeEvent<any>) => {
    const method = event.target.value
    await performUpdate({
      variables: {
        asiSelBaseId: core?.allAsiSelectedCores?.nodes[0]?.asiSelBaseId,
        method: method,
        strength: method === AsiCoreMethod.Standard ? null : 8,
        dexterity: method === AsiCoreMethod.Standard ? null : 8,
        constitution: method === AsiCoreMethod.Standard ? null : 8,
        intelligence: method === AsiCoreMethod.Standard ? null : 8,
        wisdom: method === AsiCoreMethod.Standard ? null : 8,
        charisma: method === AsiCoreMethod.Standard ? null : 8,
      },
    })
    await refetchAsiCore()
    
    let newAttributes = cloneDeep(defaultAttributes)
    
    if (method === AsiCoreMethod.Standard) {
      newAttributes = defaultAttributes.map((x: any) => {
        x.currentAssignedScore = null
        x.previousAssignedScore = null
        return x
      })
    }
    
    setAttributes(newAttributes)
    setActiveMethod(method)
  }

  const handleAttributesChange = async (attributes: any) => {
    let variables: any = {}
    
    attributes.forEach((x: any) => {
      if (x.currentAssignedScore != null) {
        variables[x.name.toLowerCase()] = x.currentAssignedScore
      }
    })

    if (!core?.allAsiSelectedCores?.nodes[0]) {
      variables.characterId = id
      variables.method = activeMethod
      performCreate({variables})

    } else {
      variables.asiSelBaseId = core?.allAsiSelectedCores?.nodes[0]?.asiSelBaseId
      performUpdate({ variables })
    }
    refetchAsiCore()
    setAttributes(attributes)
  }

  return (
    <div className='space-y-4'>
      <div>
        <div>
          <select
            className='w-full border rounded text-xl p-2'
            onChange={handleMethodChange}
            defaultValue={core?.allAsiSelectedCores?.nodes[0]?.method}
          >
            {methods.map((method) => {
              return (
                <option value={method.id} key={method.id}>
                  {method.name}
                </option>
              )
            })}
          </select>
        </div>
      </div>

      {activeMethod === AsiCoreMethod.PointBuy && (
        <PointBuy
          callbackToSetAttributes={handleAttributesChange}
          attributesImmutable={attributes}
        />
      )}
      {activeMethod === AsiCoreMethod.Standard && (
        <StandardArray
          callbackToSetAttributes={handleAttributesChange}
          attributes={attributes}
          dbAttrs={core?.allAsiSelectedCores?.nodes[0]}
        />
      )}
      {activeMethod === AsiCoreMethod.Manual && (
        <ManualOption
          callbackToSetAttributes={handleAttributesChange}
          attributesImmutable={attributes}
        />
      )}

      <div className='pt-12'>
        <AttributeCardBlock attributesImmutable={attributes} />
      </div>
    </div>
  )
}

export default AsiGenerator
