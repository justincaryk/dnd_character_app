import React, { useEffect, useState } from 'react'

import {
  useGetAllLanguagesQuery,
  useAllEquipmentQuery,
  useAllBgFeaturesQuery,
  useAllSkillsQuery,
  useAllBgsQuery,
  useGetCharacterByIdQuery,
  useUpdateCharacterMutation,
} from '../../../generated/graphql'

import SkillProficienciesSelector from './skill'
import ToolProficienciesSelector from './tool'
import LanguageSelector from './language'
import CustomBgSelector from './custom-bg'

import { BgOptionGenericType } from '../../../lib/types'
import { useParams } from 'react-router'

const PhysicalCharacteristicsChunk = () => {
  return (
    <div className='space-y-4'>
      <div>
        <strong className='text-gray-700'>Physical Characteristics:</strong>
      </div>
      <div>
        <div>
          <strong className='text-gray-700'>Hair</strong>
        </div>
        <div>
          <input className='w-full border rounded text-xl p-2'></input>
        </div>
      </div>
      <div>
        <div>
          <strong className='text-gray-700'>Skin</strong>
        </div>
        <div>
          <input className='w-full border rounded text-xl p-2'></input>
        </div>
      </div>
      <div>
        <div>
          <strong className='text-gray-700'>Eyes</strong>
        </div>
        <div>
          <input className='w-full border rounded text-xl p-2'></input>
        </div>
      </div>
      <div>
        <div>
          <strong className='text-gray-700'>Height</strong>
        </div>
        <div>
          <input className='w-full border rounded text-xl p-2'></input>
        </div>
      </div>
      <div>
        <div>
          <strong className='text-gray-700'>Weight</strong>
        </div>
        <div>
          <input className='w-full border rounded text-xl p-2'></input>
        </div>
      </div>
      <div>
        <div>
          <strong className='text-gray-700'>Age</strong>
        </div>
        <div>
          <input className='w-full border rounded text-xl p-2'></input>
        </div>
      </div>
      <div>
        <div>
          <strong className='text-gray-700'>Gender</strong>
        </div>
        <div>
          <input className='w-full border rounded text-xl p-2'></input>
        </div>
      </div>
    </div>
  )
}

interface ISelectedBackgroundProps {
  selectedBg: any
  equipment: any
  languages: any
  bgFeatures: any
  skills: any
  children?: React.ReactNode
}

const SelectedBgChunks: React.FC<ISelectedBackgroundProps> = (
  props: ISelectedBackgroundProps
) => {
  if (!props.selectedBg) return null

  const { selectedBg, equipment, languages, skills, bgFeatures } = props
  // make sure to return early in this condition state since the bg will no longer
  // be null, but rather the full object
  if (selectedBg.name == 'Custom Background') {
    return (
      <CustomBgSelector
        skillsData={skills.allSkills.skills}
        languageData={languages.allLanguages.languages}
        equipment={equipment.allEquipment.items}
        bgFeatures={bgFeatures.allBgFeatures.bgFeatures}
      ></CustomBgSelector>
    )
  }

  const skillsChunk = () => {
    return (
      <div className='space-y-4'>
        <div>
          <div>{selectedBg.description}</div>
        </div>
        <div>
          <strong className='text-gray-700'>Skill Proficiencies: </strong>
          {
            //@ts-ignore
            JSON.parse(selectedBg.skillOptions).options.map((skill, index) => {
              const isLast =
                index == selectedBg.skillOptions.length - 1 ? true : false

              if (skill.isAutoGranted) {
                const strChunk = isLast ? `${skill.name}` : `${skill.name}, `
                return strChunk
              }
            })
          }
        </div>
        <div>
          <SkillProficienciesSelector
            skillOptions={JSON.parse(selectedBg.skillOptions).options}
            numberOfSkillsGranted={selectedBg.numberOfSkillsGranted}
          ></SkillProficienciesSelector>
        </div>
      </div>
    )
  }

  const languagesChunk = () => (
    <div className='space-y-4'>
      <div>
        <strong className='text-gray-700'>Languages: </strong>
        {JSON.parse(selectedBg.languageOptions).options.map(
          (language: BgOptionGenericType, index: number) => {
            const isLast =
              index == selectedBg.languageOptions.length - 1 ? true : false
            if (language.isAutoGranted) {
              const strChunk = isLast
                ? `${language.name}`
                : `${language.name}, `
              return strChunk
            }
          }
        )}
      </div>
      <div>
        <LanguageSelector
          numberOfLanguagesGranted={selectedBg.numberOfExtraLanguages}
          languageOptionConstraints={
            JSON.parse(selectedBg.languageOptions).options
          }
          languages={languages.allLanguages.languages}
        />
      </div>
    </div>
  )

  const toolsChunk = () => (
    <div className='space-y-4'>
      <div>
        {JSON.parse(selectedBg.toolOptions).options.length ? (
          <strong className='text-gray-700'>Tool Proficiencies: </strong>
        ) : null}
        {JSON.parse(selectedBg.toolOptions).options.map(
          (tool: BgOptionGenericType, index: number) => {
            const isLast =
              index == selectedBg.toolOptions.length - 1 ? true : false

            if (tool.isAutoGranted) {
              const strChunk = isLast ? `${tool.name}` : `${tool.name}, `
              return strChunk
            }
          }
        )}
      </div>
      <div>
        <ToolProficienciesSelector
          allToolOptions={JSON.parse(selectedBg.toolOptions).options}
          numberOfToolsGranted={selectedBg.numberOfToolsGranted}
          equipment={equipment.allEquipment.items}
        ></ToolProficienciesSelector>
      </div>
    </div>
  )

  const bgFeatureChunk = () => (
    <div className='space-y-4'>
      <div>
        <strong className='text-gray-700'>Background Feature:</strong>
      </div>
      <div>{selectedBg.bgFeatureByBackgroundFeature.name}</div>
      <div>{selectedBg.bgFeatureByBackgroundFeature.description}</div>
    </div>
  )

  const alternateBgFeatureChunk = () => (
    <div className='space-y-4'>
      <div>
        <strong className='text-gray-700'>Alternate Background Feature:</strong>
      </div>
      <div>
        <div>{selectedBg.bgFeatureByAlternateBackgroundFeature?.name}</div>
        <div>
          {selectedBg.bgFeatureByAlternateBackgroundFeature?.description}
        </div>
      </div>
    </div>
  )

  return (
    <div className='space-y-4'>
      {skillsChunk()}
      {toolsChunk()}
      {selectedBg.languageOptions.length ? languagesChunk() : null}
      {bgFeatureChunk()}
      {selectedBg.bgFeatureByAlternateBackgroundFeature
        ? alternateBgFeatureChunk()
        : null}
    </div>
  )
}

const CharDescript: React.FC = () => {
  const { id }: any = useParams()
  const [performUpdate, { data, loading }] = useUpdateCharacterMutation()
  const { data: backgrounds, loading: bgsLoading } = useAllBgsQuery()
  const { data: languages, loading: langLoading } = useGetAllLanguagesQuery()
  const { data: equipment, loading: equipLoading } = useAllEquipmentQuery()
  const { data: bgFeatures, loading: bgFeatLoading } = useAllBgFeaturesQuery()
  const { data: skills, loading: skillLoading } = useAllSkillsQuery()
  const { data: char, loading: charLoading, refetch: updateCharacter } = useGetCharacterByIdQuery({variables: {
    characterId: id}})
  
  const [name, setName] = useState('')
  const [bgId, setBgId] = useState('')

  useEffect(()=> {
    if (char?.characterByCharacterId) {
      setName(char.characterByCharacterId.name || '')
      setBgId(char.characterByCharacterId.bgId || '')
    }
  },[char?.characterByCharacterId])

  const handleBgSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
    
    performUpdate({
      variables: {
        characterId: id,
        bgId: event.currentTarget.value
      }
    })

    setBgId(event.currentTarget.value)
    updateCharacter()
  }

  const handleNameUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (char?.characterByCharacterId?.name === name) {
      return null
    }

    performUpdate({
      variables: {
        characterId: id,
        name: name
      }
    })

    updateCharacter()
  }


  return (
    <div className='space-y-4 max-w-screen-sm m-auto m-0'>
      <div>
        <div>
          <div>
            <strong className='text-gray-700'>Character Name:</strong>
          </div>
          <input 
            className='w-full border rounded text-xl p-2' 
            value={name} 
            onChange={e => setName(e.currentTarget.value)} 
            onBlur={handleNameUpdate}/>
        </div>
      </div>
      <div>
        <div>
          <strong className='text-gray-700'>Background:</strong>
        </div>
        <div>
          <select 
            className='w-full border rounded text-xl p-2' 
            value={bgId} 
            onChange={handleBgSelection}
            defaultValue={''}
          >
            <option value=''>-- Choose a Background ---</option>
            {backgrounds?.allBgs?.nodes.map((bg) => {
              return bg && <option key={bg.name} value={bg.id}>{bg.name}</option>
            })}
          </select>
        </div>
      </div>

      <SelectedBgChunks
        selectedBg={backgrounds?.allBgs?.nodes.find(x => bgId == x?.id)}
        equipment={equipment}
        languages={languages}
        bgFeatures={bgFeatures}
        skills={skills}
      />
      <PhysicalCharacteristicsChunk />
    </div>
  )
}

export default CharDescript
