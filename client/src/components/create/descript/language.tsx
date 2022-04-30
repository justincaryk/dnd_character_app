import React from 'react'
import { LanguageType } from '../../../lib/types'

interface LanguageOptionConstraints {
  name: string
  isAutoGranted: boolean
}

interface Props {
  numberOfLanguagesGranted: number
  languageOptionConstraints: LanguageOptionConstraints[]
  languages: LanguageType[]
}

const getKeyReferenceForLanguage = (
  languageOptionConstraints: LanguageOptionConstraints[]
) => {
  if (languageOptionConstraints[0].name == 'ANY') {
    return 'ALL'
  }
  if (languageOptionConstraints[0].name == 'EXOTIC') {
    return 'EXOTIC'
  }
  return 'STANDARD'
}

const areLanguageOptionChoicesRequired = (
  languageOptsArray: LanguageOptionConstraints[]
) => {
  for (const language of languageOptsArray) {
    if (!language.isAutoGranted) {
      return true
    }
  }
  return false
}

const LanguageSelector: React.FC<Props> = ({
  numberOfLanguagesGranted,
  languageOptionConstraints,
  languages,
}) => {
  const getValidLanguageOptions = () => {
    const correctKeyReference = getKeyReferenceForLanguage(
      languageOptionConstraints
    )

    if (correctKeyReference == 'ALL') {
      return languages
    }
    return languages.filter(l => l.type === correctKeyReference.toLowerCase())
  }

  const calcNumOfSelectElemsToGenerate = () => {
    let numOfLanguagesAutoGranted = 0

    for (const language of languageOptionConstraints) {
      if (language.isAutoGranted) {
        numOfLanguagesAutoGranted++
      }
    }

    return numberOfLanguagesGranted - numOfLanguagesAutoGranted
  }

  const buildDummyArrayOfCorrectLength = () => {
    const elemsRequired = calcNumOfSelectElemsToGenerate()
    const someArray = []

    for (let i = 0; i < elemsRequired; i++) {
      someArray.push(i)
    }

    return someArray
  }

  const currentBgRequiresChoice = areLanguageOptionChoicesRequired(
    languageOptionConstraints
  )

  if (!currentBgRequiresChoice) {
    return <div></div>
  }

  const validLanguageOptions = getValidLanguageOptions()
  const dummy_array_to_generate_correct_num_of_select_elems =
    buildDummyArrayOfCorrectLength()

  return (
    <div className='space-y-4'>
      {dummy_array_to_generate_correct_num_of_select_elems.map(x => {
        return (
          <div key={x * 25}>
            <select className='w-full border rounded-b text-xl p-2'>
              <option value='' selected>
                - Choose a Language -
              </option>
              {validLanguageOptions.map(language => {
                return <option key={language.name}>{language.name}</option>
              })}
            </select>
          </div>
        )
      })}
    </div>
  )
}

export default LanguageSelector
