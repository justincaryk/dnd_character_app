import React, { useEffect, useState } from 'react'
import classnames from 'classnames'
import {
  useCreateSkillSelectedMutation,
  useGetAllSkillsSelectedQuery,
  useUpdateSkillSelectedMutation,
  useAllSkillsQuery,
  SkillLevelSel,
  useDeleteSkillSelectedMutation,
} from '../../../../generated/graphql'

interface Props {
  startingProficiencies: {
    tools: any
    weapons: any
    armor: any
    skills: any
  }
  savingThrows: any
  characterId: string
}

const FeatureStartProf: React.FC<Props> = ({
  startingProficiencies,
  savingThrows,
  characterId,
}) => {
  
  const [profDetailsActive, toggleProfDetailsActive] = useState(false)
  const [performCreate] = useCreateSkillSelectedMutation()
  const [performUpdate] = useUpdateSkillSelectedMutation()
  
  const {
    data: skillsSel,
    loading: skillsSelLoad,
    refetch,
  } = useGetAllSkillsSelectedQuery({
    variables: {
      characterId: characterId,
      grantedByStartingProf: true,
    },
  })

  const { data: skills, loading: skillsLoad } = useAllSkillsQuery()


  if (!startingProficiencies || skillsSelLoad || skillsLoad) {
    return null
  }

  const arrayToIterate: string[] = Array(
    startingProficiencies.skills.choose.count
  ).fill('x', 0)

  const handleSkillSelection = async (
    e: React.ChangeEvent<HTMLSelectElement>,
    i: number
  ) => {
    
    if (!e.currentTarget.value) {
      await performUpdate({
        variables: {
          skillSelId: skillsSel?.allSkillsSelecteds?.nodes[i]?.skillSelId,
          skillId: null,
          grantedByStartingProf: true,
        },
      })
      await refetch()
      
      return
    }

    const skillId = skills?.allSkills?.skills.find(
      (x) => x?.skill.toLowerCase() === e.currentTarget.value.toLowerCase()
    )?.id

    if (!skillsSel?.allSkillsSelecteds?.nodes[i]) {
      await performCreate({
        variables: {
          characterId: characterId,
          skillId: skillId,
          grantedByStartingProf: true,
          level: SkillLevelSel.Prof,
        },
      })
    } else {
      await performUpdate({
        variables: {
          skillSelId: skillsSel.allSkillsSelecteds.nodes[i]?.skillSelId,
          skillId: skillId,
          grantedByStartingProf: true,
        },
      })
    }

    await refetch()
    
  }

  return (
    <div className='space-y-3'>
      <div className='border bg-white'>
        <div
          className={classnames({
            'p-2 hover:bg-cream cursor-pointer': true,
            'bg-cream border-b': profDetailsActive,
          })}
          onClick={() => toggleProfDetailsActive(!profDetailsActive)}
        >
          <div className='text-lg font-roboto'>Proficiencies</div>
          <div className='text-xs text-gray-500'>1st level</div>
        </div>
        {profDetailsActive && (
          <div className='p-2 text-sm'>
            <div className='capitalize'>
              <strong>Armor:</strong>{' '}
              {startingProficiencies.armor?.join(', ') || 'None'}
            </div>
            <div className='capitalize'>
              <strong>Weapons:</strong>{' '}
              {startingProficiencies.weapons?.join(', ') || 'None'}
            </div>
            <div className='capitalize'>
              <strong>Tools:</strong>{' '}
              {startingProficiencies.tools?.join(', ') || 'None'}
            </div>
            <div className='capitalize'>
              <strong>Saving Throws:</strong>{' '}
              {savingThrows?.join(', ') || 'None'}
            </div>
            <div>
              <div>
                <strong>Skills:</strong> Choose{' '}
                {startingProficiencies.skills.choose.count} from{' '}
                {startingProficiencies.skills.choose.from.join(', ')}
              </div>
              <div className='mt-1 space-y-2'>
                {arrayToIterate.map((x, i) => {
                  const defaultValue = skills?.allSkills?.skills.find(
                    (x) =>
                      x?.id === skillsSel?.allSkillsSelecteds?.nodes[i]?.skillId
                  )?.skill
                  return (
                    <select
                      className='w-full border rounded text-sm p-2'
                      defaultValue={defaultValue || ''}
                      key={i}
                      onChange={(e) => handleSkillSelection(e, i)}
                    >
                      <option value=''>- Choose a Skill -</option>
                      {startingProficiencies.skills.choose.from.map(
                        (skill: string, j: number) => {
                          const skillCapFirst = skill[0].toUpperCase()
                          const skillCapRest = skill.slice(1, skill.length)
                          const skillFull = skillCapFirst + skillCapRest

                          return (
                            <option key={`${j}-${skill}`} value={skillFull}>
                              {skillFull}
                            </option>
                          )
                        }
                      )}
                    </select>
                  )
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default FeatureStartProf
