import React, { Dispatch, SetStateAction, useEffect } from 'react'
import classnames from 'classnames'
import {
  GetAllSkillsSelectedQuery,
  SkillLevelSel,
  useGetAllSkillsSelectedQuery,
  useCreateSkillSelectedMutation,
  useUpdateSkillSelectedMutation,
  useDeleteSkillSelectedMutation,
} from '../../../../../generated/graphql'

interface EntryExpertiseTypeProps {
  entry: {
    options: {
      choose: {
        count: number
        from: string
      }
    }
    increment: number
  }
  featId: string
  characterId: string
  classOrSubclass: 'class' | 'subclass'
  skillsSel: GetAllSkillsSelectedQuery
  setAllOptionsSelected: Dispatch<SetStateAction<boolean>>
  viewOnly?: boolean
}

const EntryExpertiseType: React.FC<EntryExpertiseTypeProps> = ({
  entry,
  characterId,
  featId,
  classOrSubclass,
  skillsSel,
  setAllOptionsSelected,
  viewOnly,
}) => {
  const emptyArray = Array(entry.options.choose.count).fill('x', 0)
  const [performCreate] = useCreateSkillSelectedMutation()
  const [performUpdate] = useUpdateSkillSelectedMutation()
  const [performDelete] = useDeleteSkillSelectedMutation()

  const { data, loading, refetch } = useGetAllSkillsSelectedQuery({
    variables: {
      characterId: characterId,
      ...(classOrSubclass === 'class'
        ? { classFeatId: featId }
        : { subclassFeatId: featId }),
    },
  })

  useEffect(() => {
    if (data?.allSkillsSelecteds?.nodes.length === entry.options.choose.count) {
      setAllOptionsSelected(true)
    }
  }, [data, entry, setAllOptionsSelected])

  const handleExpertiseSelection = async (
    e: React.ChangeEvent<HTMLSelectElement>,
    currentSkillSelId: string
  ) => {
    // if empty
    if (!e.currentTarget.value) {
      //delete
      await performDelete({
        variables: {
          skillSelId: currentSkillSelId,
        },
      })
      await refetch()
      return
    }
    if (currentSkillSelId) {
      // set current to prof
      await performUpdate({
        variables: {
          skillSelId: currentSkillSelId,
          skillId: e.currentTarget.value,
        },
      })
    } else {
      // set new to exp
      await performCreate({
        variables: {
          skillId: e.currentTarget.value,
          characterId: characterId,
          grantedByStartingProf: false,
          level: SkillLevelSel.Exp,
          ...(classOrSubclass === 'class'
            ? { classFeatId: featId }
            : { subclassFeatId: featId }),
        },
      })
    }

    await refetch()
  }

  if (loading) {
    return null
  }
  
  return (
    <>
      {emptyArray.map((x: any, i: number) => {
        const defaultValue = data?.allSkillsSelecteds?.nodes[i]?.skillId
        return (
          <select
            key={i}
            onChange={(e) =>
              handleExpertiseSelection(
                e,
                data?.allSkillsSelecteds?.nodes[i]?.skillSelId
              )
            }
            className={classnames({
              'w-full rounded text-sm p-2': true,
              'border-1 border-sky-blue shadow-md-sky-blue': !!!defaultValue,
              border: defaultValue,
            })}
            defaultValue={defaultValue}
          >
            <option value={''}>- Select a Skill -</option>
            {skillsSel?.allSkillsSelecteds?.nodes
              //   .filter((skill) => skill?.skillId)
              .map((skillSel) => {
                return (
                  <option key={skillSel?.skillId} value={skillSel?.skillId}>
                    {skillSel?.skillBySkillId?.skill}
                  </option>
                )
              })}
          </select>
        )
      })}
    </>
  )
}

export default EntryExpertiseType
