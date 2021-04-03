import React from "react"
import "./../../scss/descript/LanguageSelections.scss"
import { LanguageType } from './../../lib/types'

interface LanguageOptionConstraints {
    name: string
    isAutoGranted: boolean
}
interface Props {
    numberOfLanguagesGranted: number
    languageOptionConstraints: LanguageOptionConstraints[]
    languages: LanguageType[]
}

export default class LanguageSelector extends React.Component<Props> {
    getValidLanguageOptions: () => LanguageType[]
    calcNumOfSelectElemsToGenerate: () => number
    buildDummyArrayOfCorrectLength: () => Array<any>

    constructor(props: Props) {

        super(props)

        this.getValidLanguageOptions = () => {
            const correctKeyReference = getKeyReferenceForLanguage(this.props.languageOptionConstraints)
            
            if (correctKeyReference == 'ALL') {
                return this.props.languages
            }
            return this.props.languages.filter(l => l.type === correctKeyReference.toLowerCase())
        }

        this.calcNumOfSelectElemsToGenerate = () => {
            
            let numOfLanguagesAutoGranted = 0
        
            for (const language of this.props.languageOptionConstraints) {
                if (language.isAutoGranted) {
                    numOfLanguagesAutoGranted++
                }
            }
        
            return this.props.numberOfLanguagesGranted - numOfLanguagesAutoGranted
        }

        this.buildDummyArrayOfCorrectLength = () => {
            const elemsRequired = this.calcNumOfSelectElemsToGenerate()
            const someArray = []
        
            for (let i = 0; i < elemsRequired; i++) {
                someArray.push(i)
            }
        
            return someArray
        }
    
    }


    render() {
        
        const currentBgRequiresChoice = areLanguageOptionChoicesRequired(this.props.languageOptionConstraints)

        if (!currentBgRequiresChoice) {
            return <div></div>
        }
  
        const validLanguageOptions = this.getValidLanguageOptions()
        const dummy_array_to_generate_correct_num_of_select_elems = this.buildDummyArrayOfCorrectLength()

        return (
            <div className="space-sequence-20">
                {dummy_array_to_generate_correct_num_of_select_elems.map(x => {
                    return (
                        <div key={x * 25}>
                            <select className="form-control">
                                <option value="" selected>- Choose a Language -</option>
                                { validLanguageOptions.map(language => {
                                    return (
                                        <option key={language.name}>{language.name}</option>
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
}

const getKeyReferenceForLanguage = (languageOptionConstraints: LanguageOptionConstraints[]) => {
    if (languageOptionConstraints[0].name == "ANY") { return 'ALL' }
    if (languageOptionConstraints[0].name == "EXOTIC") { return 'EXOTIC'}
    return 'STANDARD'
}

const areLanguageOptionChoicesRequired = (languageOptsArray: LanguageOptionConstraints[]) =>  {
    for (const language of languageOptsArray) {
        if (!language.isAutoGranted) {
            return true
        }
    }
    return false
}
