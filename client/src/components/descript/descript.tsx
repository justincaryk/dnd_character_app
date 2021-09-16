import React, { useState } from 'react'

import {
  useGetAllLanguagesQuery,
  useAllEquipmentQuery,
  useAllBgFeaturesQuery,
  useAllSkillsQuery,
  useAllBgsQuery,
} from '../../generated/graphql'

import SkillProficienciesSelector from './skill'
import ToolProficienciesSelector from './tool'
import LanguageSelector from './language'
import CustomBgSelector from './custom-bg'

import { BgOptionGenericType } from './../../lib/types'

const PhysicalCharacteristicsChunk = () => {
  return (
    <div className='space-y-4'>
      <div>
        <strong>Physical Characteristics:</strong>
      </div>
      <div>
        <div>
          <strong>Hair</strong>
        </div>
        <div>
          <input className='w-full border rounded-b text-xl p-2'></input>
        </div>
      </div>
      <div>
        <div>
          <strong>Skin</strong>
        </div>
        <div>
          <input className='w-full border rounded-b text-xl p-2'></input>
        </div>
      </div>
      <div>
        <div>
          <strong>Eyes</strong>
        </div>
        <div>
          <input className='w-full border rounded-b text-xl p-2'></input>
        </div>
      </div>
      <div>
        <div>
          <strong>Height</strong>
        </div>
        <div>
          <input className='w-full border rounded-b text-xl p-2'></input>
        </div>
      </div>
      <div>
        <div>
          <strong>Weight</strong>
        </div>
        <div>
          <input className='w-full border rounded-b text-xl p-2'></input>
        </div>
      </div>
      <div>
        <div>
          <strong>Age</strong>
        </div>
        <div>
          <input className='w-full border rounded-b text-xl p-2'></input>
        </div>
      </div>
      <div>
        <div>
          <strong>Gender</strong>
        </div>
        <div>
          <input className='w-full border rounded-b text-xl p-2'></input>
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
          <strong>Skill Proficiencies: </strong>
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
        <strong>Languages: </strong>
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
        <strong>Tool Proficiencies: </strong>
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
        <strong>Background Feature:</strong>
      </div>
      <div>{selectedBg.bgFeatureByBackgroundFeature.name}</div>
      <div>{selectedBg.bgFeatureByBackgroundFeature.description}</div>
    </div>
  )

  const alternateBgFeatureChunk = () => (
    <div className='space-y-4'>
      <div>
        <strong>Alternate Background Feature:</strong>
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
  const [selectedBg, setSelectedBg] = useState<any>(null)
  const { data: backgrounds, loading: bgsLoading } = useAllBgsQuery()
  const { data: languages, loading: langLoading } = useGetAllLanguagesQuery()
  const { data: equipment, loading: equipLoading } = useAllEquipmentQuery()
  const { data: bgFeatures, loading: bgFeatLoading } = useAllBgFeaturesQuery()
  const { data: skills, loading: skillLoading } = useAllSkillsQuery()

  const handleBgSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const chosenBgName = event.target.value

    if (!chosenBgName) {
      setSelectedBg(null)
    }
    if (!backgrounds?.allBgs) {
      return
    }
    for (const bg of backgrounds.allBgs?.nodes) {
      if (chosenBgName == bg?.name) {
        setSelectedBg(bg)
        return
      }
    }
  }

  return (
    <div className='space-y-4'>
      <div>
        <div>
          <div>
            <strong>Character Name:</strong>
          </div>
          <input className='w-full border rounded-b text-xl p-2'></input>
        </div>
      </div>
      <div>
        <div>
          <strong>Background:</strong>
        </div>
        <div>
          <select className='w-full border rounded-b text-xl p-2' onChange={handleBgSelection}>
            <option value='' selected>
              -- Choose a Background ---
            </option>
            {backgrounds?.allBgs?.nodes.map((bg) => {
              return bg && <option key={bg.name}>{bg.name}</option>
            })}
          </select>
        </div>
      </div>

      <SelectedBgChunks
        selectedBg={selectedBg}
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
