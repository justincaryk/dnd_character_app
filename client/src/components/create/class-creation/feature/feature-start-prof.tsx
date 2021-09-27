import React, { useEffect, useState } from 'react'
import classnames from 'classnames'
import {
  useCreateSkillSelectedMutation,
  // useGetAllSkillsSelectedQuery,
  useUpdateSkillSelectedMutation,
  useAllSkillsQuery,
  SkillLevelSel,
  GetAllSkillsSelectedQuery,
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
  skillsSel: GetAllSkillsSelectedQuery,
  refetchSkillsSel: any
}

const FeatureStartProf: React.FC<Props> = ({
  startingProficiencies,
  savingThrows,
  characterId,
  skillsSel,
  refetchSkillsSel,
}) => {
  const [allOptionsSelected, setAllOptionsSelected] = useState(false)
  const [profDetailsActive, toggleProfDetailsActive] = useState(false)
  const [performCreate] = useCreateSkillSelectedMutation()
  const [performUpdate] = useUpdateSkillSelectedMutation()

  const { data: skills, loading: skillsLoad } = useAllSkillsQuery()

  useEffect(() => {
    if (!startingProficiencies) {
      return
    }

    const triggerOne = skillsSel?.allSkillsSelecteds &&
    skillsSel?.allSkillsSelecteds?.nodes.length <
      startingProficiencies.skills.choose.count

    const triggerTwo = skillsSel?.allSkillsSelecteds?.nodes.find((x) => !x?.skillId)
    if (triggerOne || triggerTwo) {
      setAllOptionsSelected(false)
    } else {
      setAllOptionsSelected(true)
    }
  }, [startingProficiencies, skillsSel?.allSkillsSelecteds, setAllOptionsSelected])

  if (!startingProficiencies || skillsLoad) {
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
          level: SkillLevelSel.Prof
        },
      })
      await refetchSkillsSel()
      
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

    await refetchSkillsSel()
  }

  return (
    <div className='space-y-3 relative'>
      {!allOptionsSelected ? (
        <div className='absolute -top-2 -left-2'>
          <div className='bg-sky-blue circle rounded-full flex items-center justify-center h-6 w-6 text-white font-bold'>
            !
          </div>
        </div>
      ) : null}
      <div className='bg-white'>
        <div
          className={classnames({
            'p-2 hover:bg-cream cursor-pointer': true,
            'bg-cream border-b': profDetailsActive,
            'border-1 border-sky-blue': !allOptionsSelected,
            'border': allOptionsSelected,
          })}
          onClick={() => toggleProfDetailsActive(!profDetailsActive)}
        >
          <div className='text-lg font-roboto'>Proficiencies</div>
          <div className='text-xs text-gray-500'>1st level</div>
        </div>
        {profDetailsActive && (
          <div className='p-2 text-sm border-b border-l border-r'>
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
                      className={classnames({
                        'w-full rounded text-sm p-2': true,
                        'border-1 border-sky-blue': !defaultValue,
                        'border': defaultValue,
                      })}
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
