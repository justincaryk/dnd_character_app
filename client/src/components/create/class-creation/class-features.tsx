import React, { useEffect, useState, Dispatch, SetStateAction } from 'react'
import {
  useClassByIdQuery,
  useUpdateCharacterMutation,
  useDeleteAllCharacterSkillsMutation,
  useGetAllSkillsSelectedQuery,
} from '../../../generated/graphql'
import FeatureAsi from './feature/feature-asi'
import FeatureGeneral from './feature/feature-general'
import classnames from 'classnames'
import FeatureStartProf from './feature/feature-start-prof'
import { useParams } from 'react-router'
import HitPoints from './hit-points'
import SubclassFeatureGeneral from './feature/subclass-feature-general'

interface Props {
  classObj: {
    id: string
    name: string
    subclassId: string
  }
  setClassSelected: Dispatch<SetStateAction<boolean>>
  character: any
  refetchCharacter: any
}

const ClassFeatures: React.FC<Props> = ({
  classObj,
  setClassSelected,
  character,
  refetchCharacter,
}) => {
  const levels = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ]
  const [features, setFeatures] = useState<any[]>([])
  const [currentLevel, setCurrentLevel] = useState(1)
  const { id }: any = useParams()

  const [classFeaturesHigher, setClassFeaturesHigher] = useState<any[]>([])
  const [startingProficiencies, setStartingProficiencies] = useState<any>(null)
  const [hpDetailsActive, toggleHpDetailsActive] = useState(false)
  const [higherFeaturesVisible, toggleHigherFeaturesVisible] = useState(false)
  const { data, loading } = useClassByIdQuery({
    variables: {
      id: classObj.id,
    },
  })

  const [performUpdate] = useUpdateCharacterMutation()
  const [performDeleteAllSkills] = useDeleteAllCharacterSkillsMutation()

  const {
    data: skillsSel,
    loading: skillsSelLoad,
    refetch: refetchSkillsSel,
  } = useGetAllSkillsSelectedQuery({
    variables: {
      characterId: character.characterId,
      grantedByStartingProf: true,
    },
  })

  useEffect(() => {
    if (character.currentLevel) {
      setCurrentLevel(character.currentLevel)
    }
  }, [character.currentLevel])

  useEffect(() => {
    const classFeats = data?.classById?.classFeaturesByClassId?.nodes
    const subclassFeats =
      data?.classById?.subclassFeaturesByClassId?.nodes.filter(
        (x) => x?.subclassId === character.subclassId
      ) as any[]

    const merged = classFeats ? classFeats.concat(subclassFeats) : []
    //@ts-ignore
    merged.sort((a, b) => a.level - b.level)

    const filteredEligible = merged.filter((x) =>
      x?.level ? x.level <= currentLevel : false
    )

    setFeatures(filteredEligible || [])

    const filteredIneligible =
      data?.classById?.classFeaturesByClassId.nodes.filter((x) =>
        x?.level ? x.level > currentLevel : false
      )

    setClassFeaturesHigher(filteredIneligible || [])
  }, [data?.classById, currentLevel, character])

  useEffect(() => {
    const parsed = data
      ? JSON.parse(data?.classById?.startingProficiencies)
      : null

    setStartingProficiencies(parsed)
  }, [data])

  const handleClassDelete = async ()=> {
    setClassSelected(false)
    setCurrentLevel(1)
    await performUpdate({
      variables: {
        characterId: id,
        currentLevel: 1,
      },
    })
    await refetchCharacter()
    await useDeleteAllCharacterSkillsMutation
    await performDeleteAllSkills({
      variables: {
        characterId: character.characterId
      }
    })
  }
  const handleLevelChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentLevel(Number(e.currentTarget.value))

    await performUpdate({
      variables: {
        characterId: id,
        currentLevel: Number(e.currentTarget.value),
      },
    })
    await refetchCharacter()
  }

  if (loading || skillsSelLoad || !skillsSel) {
    return <div>...Loading</div>
  }

  return (
    <div className='space-y-4'>
      {/* row 1 - PAGE HEADER */}
      <div className='flex items-center justify-between border-b pb-5'>
        <div className='text-xl font-bold'>Character Level: {currentLevel}</div>
        <div className='border rounded p-2 bg-white'>
          <HitPoints
            characterId={id}
            hdFaces={data?.classById?.hdFaces ? data?.classById?.hdFaces : 0}
            currentLevel={currentLevel}
          />
          <div>
            <span className='font-bold'>Hit Dice: &nbsp;</span>
            <span>
              {currentLevel}d{data?.classById?.hdFaces}
            </span>
          </div>
        </div>
      </div>
      {/* row 2 */}
      <div className='flex justify-between'>
        <div className='flex space-x-4 items-center'>
          <img
            className='w-12 rounded'
            src={`/assets/${data?.classById?.name.toLowerCase()}_logo.jpeg`}
            alt=''
          />
          <div className='font-bold text-xl'>{data?.classById?.name}</div>
        </div>
        <div className='flex space-x-2 items-center'>
          <label className='font-bold text-sm mb-0' htmlFor='level'>
            Level
          </label>
          <select
            className='w-full border rounded text-md p-1'
            onChange={(e) => handleLevelChange(e)}
            name='level'
            value={currentLevel}
          >
            {levels.map((lvl) => (
              <option key={lvl} value={lvl}>
                {lvl}
              </option>
            ))}
          </select>
          <div
            className='text-red-500 text-4xl font-bold h-full cursor-pointer'
            onClick={handleClassDelete}
          >
            &times;
          </div>
        </div>
      </div>
      {/* row 3 STUPID NOTHINGNESS */}
      <div className='font-roboto text-sm uppercase'>Class Features</div>
      {/* row 4 HITPOINTS */}
      <div className='space-y-3'>
        <div className='border bg-white'>
          <div
            className={classnames({
              'p-2 hover:bg-cream cursor-pointer': true,
              'bg-cream border-b': hpDetailsActive,
            })}
            onClick={() => toggleHpDetailsActive(!hpDetailsActive)}
          >
            <div className='text-lg font-roboto'>Hit Points</div>
            <div className='text-xs text-gray-500'>1st level</div>
          </div>
          {hpDetailsActive && (
            <div className='p-2 text-sm'>
              <div>
                <strong>Hit Dice:</strong> 1d12 per{' '}
                {classObj.name.toLowerCase()} level
              </div>
              <div>
                <strong>Hit Points at 1st Level:</strong>{' '}
                {data?.classById?.hdFaces} + your Constitution modifier
              </div>
              <div>
                <strong>Hit Points at Higher Levels:</strong>{' '}
                {data?.classById?.hdNumber}d{data?.classById?.hdFaces} (or{' '}
                {data?.classById?.hdFaces
                  ? Math.floor(data?.classById?.hdFaces / 2) + 1
                  : null}
                ) + your Constitution modifier per{' '}
                {data?.classById?.name.toLowerCase()} level after 1st
              </div>
            </div>
          )}
        </div>
      </div>
      {/* row 5 STARTING PROFICIENCIES */}
      <FeatureStartProf
        characterId={character.characterId}
        startingProficiencies={startingProficiencies}
        savingThrows={data?.classById?.proficiency}
        skillsSel={skillsSel}
        refetchSkillsSel={refetchSkillsSel}
      />
      {/* row 6 ALL ELIGIBLE CLASS FEATURES */}
      <div className='space-y-3'>
        {features.map((feature, i) => {
          if (feature.name.toLowerCase() === 'ability score improvement') {
            return (
              <div key={i} className='relative'>
                {true && (
                  <div className='absolute -top-2 -left-2'>
                    <div className='bg-sky-blue circle rounded-full flex items-center justify-center h-6 w-6 text-white font-bold'>
                      !
                    </div>
                  </div>
                )}
                <FeatureAsi feature={feature} />
              </div>
            )
          } else if (feature.subclassId) {
            return (
              <div className='relative' key={i}>
                {feature.hasOptions && (
                  <div className='absolute -top-2 -left-2'>
                    <div className='bg-sky-blue circle rounded-full flex items-center justify-center h-6 w-6 text-white font-bold'>
                      !
                    </div>
                  </div>
                )}
                <SubclassFeatureGeneral
                  feature={feature}
                  featuresFiltered={features.filter(
                    (feat) => feat.level === feature.level && feat.isSuboption
                  )}
                />
              </div>
            )
          } else {
            return (
              <div className='relative' key={i}>
                {feature.hasOptions && (
                  <div className='absolute -top-2 -left-2'>
                    <div className='bg-sky-blue circle rounded-full flex items-center justify-center h-6 w-6 text-white font-bold'>
                      !
                    </div>
                  </div>
                )}
                <FeatureGeneral
                  feature={feature}
                  character={character}
                  refetchCharacter={refetchCharacter}
                  skillsSel={skillsSel}
                  refetchSkillsSel={refetchSkillsSel}
                />
              </div>
            )
          }
        })}
      </div>
      {/* row 7 - HIGHER LEVEL */}
      <div className='space-y-3'>
        <div className='relative inline-block'>
          <div className='uppercase font-roboto text-md'>
            Available at Higher Levels ({20 - currentLevel})
          </div>
          <div
            className='absolute -right-8 -top-2 text-4xl leading-none cursor-pointer font-bold text-green-400'
            onClick={() => toggleHigherFeaturesVisible(!higherFeaturesVisible)}
          >
            {higherFeaturesVisible ? '-' : '+'}
          </div>
        </div>
        {higherFeaturesVisible && (
          <>
            {classFeaturesHigher.map((feature, i) => {
              if (feature.name.toLowerCase() === 'ability score improvement') {
                return (
                  <div key={i}>
                    <FeatureAsi viewOnly feature={feature} />
                  </div>
                )
              } else if (feature.subclassId) {
                return <SubclassFeatureGeneral feature={feature} />
              } else {
                return (
                  <div key={i}>
                    <FeatureGeneral
                      viewOnly
                      feature={feature}
                      character={character}
                      skillsSel={skillsSel}
                      refetchSkillsSel={refetchSkillsSel}
                    />
                  </div>
                )
              }
            })}
          </>
        )}
      </div>
    </div>
  )
}

export default ClassFeatures
