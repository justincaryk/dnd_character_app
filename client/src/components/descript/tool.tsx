import React from "react";
import "./../../scss/descript/ToolProficiencies.scss";

interface ToolType {
    name: string
    isAutoGranted: boolean
}
interface EquipmentType {
    type: string
    name: string
}

interface Props {
    equipment: EquipmentType[]
    toolOptions: ToolType[]
    numberOfToolsGranted: number
}

interface State {
    equipment: EquipmentType
}

export default class ToolProficienciesSelector extends React.Component<Props, State> {
    handleSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {}

    constructor(props: Props) {

        super(props);

        this.handleSelection = event => {
            // do something
        }

    }

    render() {

        const currentBgRequiresChoice = _areToolOptionChoicesRequired(this.props.toolOptions);
        
        if (!currentBgRequiresChoice) {
            return <div></div>;
        }

        const numOfSelectElemsToGenerate = _calcNumOfSelectElemsToGenerate(this.props.numberOfToolsGranted, this.props.toolOptions);
        const dummy_array_to_help_generate_correct_num_of_select_elems = _buildArrayWithThisManyItems(numOfSelectElemsToGenerate);
        const toolOptions = _getValidOptions(this.props.toolOptions, this.props.equipment);

        return (
            <div className="space-sequence-20">
                {dummy_array_to_help_generate_correct_num_of_select_elems.map(x => {
                    return (
                        <div key={x * 25}>
                            <select className="form-control" onChange={this.handleSelection}>
                                <option value="" selected>- Choose a tool -</option>
                                {toolOptions.map(tool => {
                                    return (
                                        <option key={tool}>{tool}</option>
                                    );
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
}


function _getValidOptions(tools: ToolType[], extraEquipment: EquipmentType[]) {
    let standardOptions = [];
    let instruments: string[] = [];
    let artisanTools: string[] = [];
    let gamingSet: string[] = [];

    for (const tool of tools) {

        if (tool.name == "Musical Instrument") {
            if (!instruments.length) {
                instruments = extraEquipment
                    .filter(x => x.type === 'instrument')
                    .map(x => x.name);
            }
            continue;
        }

        if (tool.name == "Artisan\'s Tools") {
            if (!artisanTools.length) {
                artisanTools = extraEquipment
                    .filter(x => x.type === 'artisan')
                    .map(x => x.name);
            }
            continue;
        }

        if (tool.name == "Gaming Set") {
            if (!gamingSet.length) {
                gamingSet = extraEquipment
                    .filter(x => x.type === 'gaming')
                    .map(x => x.name)
            }
            continue;
        }

        if (tool.isAutoGranted == false) {
            standardOptions.push(tool.name);
        }

    }

    const validOptions = standardOptions.concat(instruments, artisanTools, gamingSet);

    return validOptions;
}

function _areToolOptionChoicesRequired(toolOptsArray: ToolType[]) {
    for (const tool of toolOptsArray) {
        if (!tool.isAutoGranted) {
            return true;
        }
    }
    return false;
}

function _calcNumOfSelectElemsToGenerate(numOftoolsGranted: number, toolOptionsArray: ToolType[]) {
    let numOftoolsAutoGranted = 0;
    for (const tool of toolOptionsArray) {
        if (tool.isAutoGranted) {
            numOftoolsAutoGranted++;
        }
    }
    return numOftoolsGranted - numOftoolsAutoGranted
}

function _buildArrayWithThisManyItems(elemsRequired: number) {
    const someArray = [];

    for (let i = 0; i < elemsRequired; i++) {
        someArray.push(i);
    }

    return someArray;
}
