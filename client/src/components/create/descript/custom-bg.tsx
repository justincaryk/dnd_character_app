import React, { useState } from 'react'

import {
  SkillDataType,
  EquipmentDataType,
  BackgroundFeatureDataType,
  LanguageType,
} from '../../../lib/types'

interface Props {
  skillsData: SkillDataType
  languageData: any //LanguageDataType
  equipment: EquipmentDataType
  bgFeatures: BackgroundFeatureDataType[]
}

// TODO
// for background features:
//      sort them alphabetically, remove nonunique callers if going by feat name rather than conferring bg

const buildSkillsBlock = (
  numOfSelectElems: number,
  skillsData: SkillDataType[]
) => {
  const dummy_array = buildDummyArrayToMapOver(numOfSelectElems)

  return (
    <div className='space-y-4'>
      <div>
        <strong>Skill Proficiencies:</strong>
      </div>
      {dummy_array.map((x) => {
        return (
          <div key={'skills-dropdown-' + x}>
            <select className='w-full border rounded-b text-xl p-2'>
              <option value=''>- Choose a Skill -</option>
              {skillsData.map((skill) => {
                return (
                  <option key={skill.skill} value={skill.skill}>
                    {skill.skill}
                  </option>
                )
              })}
            </select>
          </div>
        )
      })}
    </div>
  )
}

const buildToolsBlock = (
  numOfSelectElems: number,
  equipment: EquipmentDataType[]
) => {
  const dummy_array = buildDummyArrayToMapOver(numOfSelectElems)
  const sortedTools = [...equipment].sort()

  return (
    <div className='space-y-4'>
      <div>
        <strong>Tools Proficiencies:</strong>
      </div>
      {dummy_array.map((x) => {
        return (
          <div key={'tool-dropdown-' + x}>
            <select className='w-full border rounded-b text-xl p-2'>
              <option value=''>- Choose a Tool -</option>
              {sortedTools.map((tool) => {
                return (
                  <option key={tool.name} value={tool.name}>
                    {tool.name}
                  </option>
                )
              })}
            </select>
          </div>
        )
      })}
    </div>
  )
}

const buildLanguagesBlock = (
  numOfSelectElems: number,
  languages: LanguageType[]
) => {
  const dummy_array = buildDummyArrayToMapOver(numOfSelectElems)
  
  return (
    <div className='space-y-4'>
      <div>
        <strong>Languages:</strong>
      </div>
      {dummy_array.map((x) => {
        return (
          <div key={'language-dropdown-' + x}>
            <select className='w-full border rounded-b text-xl p-2'>
              <option value=''>- Choose a Language -</option>
              {languages.map((language) => {
                return (
                  <option key={language.name} value={language.name}>
                    {language.name}
                  </option>
                )
              })}
            </select>
          </div>
        )
      })}
    </div>
  )
}

const buildBgFeatureBlock = (
  bgFeatures: BackgroundFeatureDataType[],
  displayBgFeatureDetailClosure: any
) => {
  return (
    <div>
      <div>
        <strong>Background Features:</strong>
      </div>
      <select className='w-full border rounded-b text-xl p-2' onChange={displayBgFeatureDetailClosure}>
        <option value=''>- Choose a Background Feature -</option>
        {bgFeatures.map((feat) => {
          return <option value={feat.name}>{feat.name}</option>
        })}
      </select>
    </div>
  )
}

const buildDummyArrayToMapOver = (elemsRequired: number) => {
  let dummyArray = []

  for (let i = 0; i < elemsRequired; i++) {
    dummyArray.push(i)
  }

  return dummyArray
}

const CustomBgSelector: React.FC<Props> = ({
  skillsData,
  languageData,
  equipment,
  bgFeatures,
}) => {
  
  const customOptionReferenceConstants = {
    two_tools: 1,
    two_languages: 2,
    one_and_one: 3,
  }

  const customOptions = [
    {
      id: customOptionReferenceConstants['two_tools'],
      display: '2 Skills and 2 Tools',
    },
    {
      id: customOptionReferenceConstants['two_languages'],
      display: '2 Skills and 2 Languages',
    },
    {
      id: customOptionReferenceConstants['one_and_one'],
      display: '2 Skills, 1 Tool, and 1 Language',
    },
  ]

  const [data] = useState<any>({
    skillsData: skillsData,
    languageData: languageData,
    equipment: equipment,
    bgFeatures: bgFeatures,
  })

  const [customOptionIsSelected, setCustomOptionIsSelected] = useState(false)
  const [selectedCustomRuleOption, setSelectedCustomRuleOption] = useState<any>(
    {}
  )
  const [backgroundFeatureIsSelected, setBackgroundFeatureIsSelected] =
    useState(false)
  const [selectedBgFeature, setSelectedBgFeature] = useState<any>({})

  const handleSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCustomOptionIsSelected(true)
    setSelectedCustomRuleOption(event.target.value)
  }

  const displayBgFeatureDetail = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedBgName = event.target.value

    let bgFeatToSave

    for (const bgFeat of data.bgFeatures) {
      if (selectedBgName == bgFeat.name) {
        bgFeatToSave = bgFeat
        break
      }
    }

    setBackgroundFeatureIsSelected(true)
    setSelectedBgFeature(bgFeatToSave ? bgFeatToSave : {})
  }

  const buildProficiencySelectorsBlock = () => {
    if (!customOptionIsSelected) {
      return null
    }

    let fullBlockToReturn

    const { skillsData, languageData, equipment, bgFeatures } = data

    const skills_block = buildSkillsBlock(2, skillsData)
    const bg_feature_block = buildBgFeatureBlock(
      bgFeatures,
      displayBgFeatureDetail
    )

    if (
      selectedCustomRuleOption == customOptionReferenceConstants['two_tools']
    ) {
      const toolsBlock = buildToolsBlock(2, equipment)

      fullBlockToReturn = (
        <div className='space-y-4'>
          {skills_block}
          {toolsBlock}
          {bg_feature_block}
        </div>
      )
    }

    if (
      selectedCustomRuleOption ==
      customOptionReferenceConstants['two_languages']
    ) {
      
      const languagesBlock = buildLanguagesBlock(2, languageData)

      fullBlockToReturn = (
        <div className='space-y-4'>
          {skills_block}
          {languagesBlock}
          {bg_feature_block}
        </div>
      )
    }

    if (
      selectedCustomRuleOption == customOptionReferenceConstants['one_and_one']
    ) {
      const toolsBlock = buildToolsBlock(1, equipment)
      const languagesBlock = buildLanguagesBlock(1, languageData)

      fullBlockToReturn = (
        <div className='space-y-4'>
          {skills_block}
          {toolsBlock}
          {languagesBlock}
          {bg_feature_block}
        </div>
      )
    }

    return fullBlockToReturn
  }

  const buildBackgroundFeatureInfoBlock = () => {
    if (backgroundFeatureIsSelected == false) {
      return <div></div>
    }

    return (
      <div>
        <div>
          <div>{selectedBgFeature.name}</div>
          <div>
            <span className='text-muted'>Background Feature | </span>
            <span className='text-muted'>{selectedBgFeature.conferringBg}</span>
          </div>
        </div>
        <div>
          <div>{selectedBgFeature.description}</div>
        </div>
      </div>
    )
  }

  const customProficiencySelectorsBlock = buildProficiencySelectorsBlock()
  const backgroundFeatureInfoBlock = buildBackgroundFeatureInfoBlock()

  return (
    <div className='space-y-4'>
      <div>
        <select className='w-full border rounded-b text-xl p-2' onChange={handleSelection}>
          <option value=''>Choose an Option</option>
          {customOptions.map((opt) => {
            return (
              <option key={opt.id} value={opt.id}>
                {opt.display}
              </option>
            )
          })}
        </select>
      </div>

      {customProficiencySelectorsBlock}
      {backgroundFeatureInfoBlock}
    </div>
  )
}

export default CustomBgSelector
