import React, { useState } from 'react'
import './../../scss/descript/CharDescription.scss'
import { appDictionary } from '../../lib/dictionary'
import {
    useGetAllLanguagesQuery,
    useAllEquipmentQuery,
    useAllBgFeaturesQuery,
    useAllSkillsQuery
} from '../../generated/graphql'

import SkillProficienciesSelector from './skill'
import ToolProficienciesSelector from './tool'
import LanguageSelector from './language'
import CustomBgSelector from './customBg'

import {
    SkillDataType,
    LanguageType,
    EquipmentDataType,
    BackgroundFeatureDataType,
    BackgroundDataType,
    BgOptionGenericType
} from './../../lib/types'

const PhysicalCharacteristicsChunk = () => {
    return (
        <div className="space-sequence-20">
            <div><strong>Physical Characteristics:</strong></div>
            <div>
                <div><strong>Hair</strong></div>
                <div><input className="form-control"></input></div>
            </div>
            <div>
                <div><strong>Skin</strong></div>
                <div><input className="form-control"></input></div>
            </div>
            <div>
                <div><strong>Eyes</strong></div>
                <div><input className="form-control"></input></div>
            </div>
            <div>
                <div><strong>Height</strong></div>
                <div><input className="form-control"></input></div>
            </div>
            <div>
                <div><strong>Weight</strong></div>
                <div><input className="form-control"></input></div>
            </div>
            <div>
                <div><strong>Age</strong></div>
                <div><input className="form-control"></input></div>
            </div>
            <div>
                <div><strong>Gender</strong></div>
                <div><input className="form-control"></input></div>
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

    const { selectedBg, equipment, languages, bgFeatures, skills } = props
    // make sure to return early in this condition state since the bg will no longer
    // be null, but rather the full object
    // if (selectedBg.name == 'Custom Background') {

    //     htmlBlockForUserSelectedBackground = (
    //         <CustomBgSelector
    //             skillsData={skills}
    //             languageData={languages}
    //             equipment={equipment}
    //             bgFeatures={bgFeatures}></CustomBgSelector>
    //     )

    //     return htmlBlockForUserSelectedBackground
    // }

    const skillsChunk = () => {

        return (
            <div className="space-sequence-20">
                <div>
                    <div>{selectedBg.description}</div>
                </div>
                <div>
                    <strong>Skill Proficiencies: </strong>
                    {
                        //@ts-ignore
                        selectedBg.skillOptions.map((skill, index) => {
                            //@ts-ignore
                            const isLast = index == selectedBg.skillOptions.length - 1 ? true : false

                            if (skill.isAutoGranted) {
                                const strChunk = isLast ? `${skill.name}` : `${skill.name}, `
                                return strChunk
                            }

                        })
                    }
                </div>
                <div>
                    <SkillProficienciesSelector
                        skillOptions={selectedBg?.skillOptions}
                        numberOfSkillsGranted={selectedBg?.numberOfSkillsGranted}></SkillProficienciesSelector>
                </div>
            </div>
        )
    }

    const languagesChunk = () => (
        <div className="space-sequence-20">
            <div>
                <strong>Languages: </strong>
                {
                    selectedBg?.languageOptions.map((language: BgOptionGenericType, index: number) => {
                        const isLast = index == selectedBg.languageOptions.length - 1 ? true : false
                        if (language.isAutoGranted) {
                            const strChunk = isLast ? `${language.name}` : `${language.name}, `
                            return strChunk
                        }

                    })
                }
            </div>
            <div>
                <LanguageSelector
                    numberOfLanguagesGranted={selectedBg.numberOfExtraLanguages}
                    languageOptionConstraints={selectedBg.languageOptions}
                    languages={languages.allLanguages.languages}
                />
            </div>
        </div>
    )

    const toolsChunk = () => (
        <div className="space-sequence-20">
            <div>
                <strong>Tool Proficiencies: </strong>
                {
                    selectedBg.toolOptions.map((tool: BgOptionGenericType, index: number) => {
                        const isLast = index == selectedBg.toolOptions.length - 1 ? true : false

                        if (tool.isAutoGranted) {
                            const strChunk = isLast ? `${tool.name}` : `${tool.name}, `
                            return strChunk
                        }

                    })
                }
            </div>
            <div>
                <ToolProficienciesSelector
                    toolOptions={selectedBg.toolOptions}
                    numberOfToolsGranted={selectedBg.numberOfToolsGranted}
                    equipment={equipment.allEquipment.items} ></ToolProficienciesSelector>
            </div>
        </div>
    )

    // const bgFeatureChunk = () => {
    //     return (
    //         <div className="space-sequence-20">
    //             <div>
    //                 <div>{selectedBg?.backgroundFeature.name}</div>
    //                 <div>Background Feature</div>
    //             </div>
    //             <div>
    //                 <div>{selectedBg?.backgroundFeature.description}</div>
    //             </div>
    //         </div>
    //     )
    // }

    // const alternateBgFeatureChunk = () => {
    //     if (!selectedBg?.alternateBackgroundFeature.name) {
    //         return null
    //     }

    //     return (
    //         <div className="space-sequence-20">
    //             <div>
    //                 <div>{selectedBg.alternateBackgroundFeature.name}</div>
    //                 <div>Alternate Background Feature</div>
    //             </div>
    //             <div>
    //                 <div>{selectedBg.alternateBackgroundFeature.description}</div>
    //             </div>
    //         </div>
    //     )
    // }

    return (
        <div className="space-sequence-20">
            {skillsChunk()}
            {toolsChunk()}
            {languagesChunk()}

            {/* {bgFeatureChunk()}

            {alternateBgFeatureChunk()} */}

        </div>
    )
}

const CharDescript: React.FC = () => {
    const [backgrounds] = useState<BackgroundDataType[]>(appDictionary.BACKGROUNDS)
    const [selectedBg, setSelectedBg] = useState<any>(null)
    const { data: languages, error: langError, loading: langLoading } = useGetAllLanguagesQuery()
    const { data: equipment, error: equipError, loading: equipLoading } = useAllEquipmentQuery()
    const { data: bgFeatures, error: bgFeatError, loading: bgFeatLoading } = useAllBgFeaturesQuery()
    const { data: skills, error: skillError, loading: skillLoading } = useAllSkillsQuery()

    const handleBgSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const chosenBgName = event.target.value

        if (!chosenBgName) {
            setSelectedBg(null)
        }

        for (const bg of backgrounds) {
            if (chosenBgName == bg.name) {
                setSelectedBg(bg)
                return
            }
        }
    }

    return (
        <div className="space-sequence-20">
            <div>
                <div>
                    <div><strong>Character Name:</strong></div>
                    <input className="form-control"></input>
                </div>
            </div>
            <div>
                <div><strong>Background:</strong></div>
                <div>
                    <select className="form-control" onChange={handleBgSelection}>
                        <option value="" selected>-- Choose a Background ---</option>
                        {
                            backgrounds.map(bg => {
                                return <option key={bg.name}>{bg.name}</option>
                            })
                        }
                    </select>
                </div>
            </div>

            <SelectedBgChunks
                selectedBg={selectedBg}
                equipment={equipment}
                languages={languages}
                bgFeatures={bgFeatures}
                skills={skills} />
            <PhysicalCharacteristicsChunk />
        </div>
    )
}

export default CharDescript
