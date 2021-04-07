import React from "react";
import './../../scss/descript/CustomBg.scss';
import { 
    SkillDataType, 
    EquipmentDataType, 
    BackgroundFeatureDataType, 
    LanguageType
} from './../../lib/types'

interface Props {
    skillsData: SkillDataType
    languageData: any //LanguageDataType
    equipment: EquipmentDataType
    bgFeatures: BackgroundFeatureDataType[]
}
interface State {
    data: any
    customOptionIsSelected: boolean
    selectedCustomRuleOption: any
    backgroundFeatureIsSelected: boolean
    selectedBgFeature: any
}

// TODO
// for background features: 
//      sort them alphabetically, remove nonunique callers if going by feat name rather than conferring bg

class CustomBgSelector extends React.Component<Props, State> {
    handleSelection: (e: React.ChangeEvent<HTMLSelectElement>) => void
    displayBgFeatureDetail: (e: React.ChangeEvent<HTMLSelectElement>) => void
    buildProficiencySelectorsBlock: () => any
    buildBackgroundFeatureInfoBlock: () => any
    customOptionReferenceConstants: {
        [key: string]: number
    }
    customOptions: {
        id: number
        display: string
    }[]

    constructor(props: Props) {

        super(props)

        this.customOptionReferenceConstants = {
            'two_tools': 1,
            'two_languages': 2,
            'one_and_one': 3,
        };

        this.customOptions = [
            {
                id: this.customOptionReferenceConstants['two_tools'],
                display: '2 Skills and 2 Tools',
            },
            {
                id: this.customOptionReferenceConstants['two_languages'],
                display: '2 Skills and 2 Languages',
            },
            {
                id: this.customOptionReferenceConstants['one_and_one'],
                display: '2 Skills, 1 Tool, and 1 Language',
            },
        ];

        this.state = {
            data: {
                skillsData: this.props.skillsData,
                languageData: this.props.languageData.ALL,
                equipment: this.props.equipment,
                bgFeatures: this.props.bgFeatures,
            },
            customOptionIsSelected: false,
            selectedCustomRuleOption: {},
            backgroundFeatureIsSelected: false,
            selectedBgFeature: {},
        }

        this.handleSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
            this.setState({
                customOptionIsSelected: true,
                selectedCustomRuleOption: event.target.value,
            })
        }

        this.displayBgFeatureDetail = (event: React.ChangeEvent<HTMLSelectElement>) => {

            const selectedBgName = event.target.value;

            let bgFeatToSave;

            for (const bgFeat of this.state.data.bgFeatures) {
                if (selectedBgName == bgFeat.name) {
                    bgFeatToSave = bgFeat;
                    break;
                }
            }

            this.setState({
                backgroundFeatureIsSelected: true,
                selectedBgFeature: bgFeatToSave ? bgFeatToSave : {},
            })
        }

        this.buildProficiencySelectorsBlock = () => {

            if (!this.state.customOptionIsSelected) {
                return <div></div>;
            }

            let fullBlockToReturn;

            const { skillsData, languageData, equipment, bgFeatures } = this.state.data;

            const skills_block = _buildSkillsBlock(2, skillsData);
            const bg_feature_block = _buildBgFeatureBlock(bgFeatures, this.displayBgFeatureDetail);

            if (this.state.selectedCustomRuleOption == this.customOptionReferenceConstants['two_tools']) {

                const toolsBlock = _buildToolsBlock(2, equipment);

                fullBlockToReturn = (
                    <div className="space-sequence-20">
                        {skills_block}
                        {toolsBlock}
                        {bg_feature_block}
                    </div>
                )
            }

            if (this.state.selectedCustomRuleOption == this.customOptionReferenceConstants['two_languages']) {
                const languagesBlock = _buildLanguagesBlock(2, languageData);

                fullBlockToReturn = (
                    <div className="space-sequence-20">
                        {skills_block}
                        {languagesBlock}
                        {bg_feature_block}
                    </div>
                )
            }

            if (this.state.selectedCustomRuleOption == this.customOptionReferenceConstants['one_and_one']) {
                const toolsBlock = _buildToolsBlock(1, equipment);
                const languagesBlock = _buildLanguagesBlock(1, languageData);

                fullBlockToReturn = (
                    <div className="space-sequence-20">
                        {skills_block}
                        {toolsBlock}
                        {languagesBlock}
                        {bg_feature_block}
                    </div>
                )
            }

            return fullBlockToReturn;
        }

        this.buildBackgroundFeatureInfoBlock = () => {

            if (this.state.backgroundFeatureIsSelected == false) {
                return <div></div>;
            }

            return (
                <div>
                    <div>
                        <div>{this.state.selectedBgFeature.name}</div>
                        <div>
                            <span className="text-muted">Background Feature | </span>
                            <span className="text-muted">{this.state.selectedBgFeature.conferringBg}</span>
                        </div>
                    </div>
                    <div>
                        <div>{this.state.selectedBgFeature.description}</div>
                    </div>
                </div>
            )
        }
    }

    render() {

        const customProficiencySelectorsBlock = this.buildProficiencySelectorsBlock();
        const backgroundFeatureInfoBlock = this.buildBackgroundFeatureInfoBlock();

        return (
            <div className="space-sequence-20">
                <div>
                    <select className="form-control" onChange={this.handleSelection}>
                        <option value="">Choose an Option</option>
                        {
                            this.customOptions.map(opt => {
                                return (
                                    <option key={opt.id} value={opt.id}>{opt.display}</option>
                                )
                            })
                        }
                    </select>
                </div>

                {customProficiencySelectorsBlock}
                {backgroundFeatureInfoBlock}

            </div>
        )
    }

}


export default CustomBgSelector;



function _buildSkillsBlock(numOfSelectElems: number, skillsData: SkillDataType[]) {
    const dummy_array = _buildDummyArrayToMapOver(numOfSelectElems);

    return (
        <div className="space-sequence-20">
            <div><strong>Skill Proficiencies:</strong></div>
            {
                dummy_array.map(x => {
                    return (
                        <div key={'skills-dropdown-' + x}>
                            <select className="form-control">
                                <option value="">- Choose a Skill -</option>
                                {
                                    skillsData.map(skill => {
                                        return (
                                            <option key={skill.skill} value={skill.skill}>{skill.skill}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    )
                })
            }
        </div>
    )
}

function _buildToolsBlock(numOfSelectElems: number, equipment: EquipmentDataType[]) {
    const dummy_array = _buildDummyArrayToMapOver(numOfSelectElems);
    const sortedTools = [...equipment].sort();

    return (
        <div className="space-sequence-20">
            <div><strong>Tools Proficiencies:</strong></div>
            {
                dummy_array.map(x => {
                    return (
                        <div key={'tool-dropdown-' + x}>
                            <select className="form-control">
                                <option value="">- Choose a Tool -</option>
                                {
                                    sortedTools.map(tool => {
                                        return <option key={tool.name} value={tool.name}>{tool.name}</option>
                                    })
                                }
                            </select>
                        </div>
                    )
                })
            }
        </div>
    )
}

function _buildLanguagesBlock(numOfSelectElems: number, languages: LanguageType[]) {
    const dummy_array = _buildDummyArrayToMapOver(numOfSelectElems);

    return (
        <div className="space-sequence-20">
            <div><strong>Languages:</strong></div>
            {
                dummy_array.map(x => {
                    return (
                        <div key={'language-dropdown-' + x}>
                            <select className="form-control">
                                <option value="">- Choose a Language -</option>
                                {
                                    languages.map(language => {
                                        return (
                                            <option key={language.name} value={language.name}>{language.name}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    )
                })
            }
        </div>
    )
}

function _buildBgFeatureBlock(bgFeatures: BackgroundFeatureDataType[], displayBgFeatureDetailClosure: any) {

    return (
        <div>
            <div><strong>Background Features:</strong></div>
            <select className="form-control" onChange={displayBgFeatureDetailClosure}>
                <option value="">- Choose a Background Feature -</option>
                {
                    bgFeatures.map(feat => {
                        return <option value={feat.name}>{feat.name}</option>
                    })
                }
            </select>
        </div>
    )
}

function _buildDummyArrayToMapOver(elemsRequired: number) {
    let dummyArray = [];

    for (let i = 0; i < elemsRequired; i++) {
        dummyArray.push(i);
    }

    return dummyArray;

}
