import React, { useState } from "react"
import "./../../scss/descript/SkillProficiencies.scss"

interface Props {
  skillOptions: SkillType[]
  numberOfSkillsGranted: number
}

interface SkillType {
  name: string
  isAutoGranted: boolean
}

const SkillProficienciesSelector: React.FC<Props> = ({
  skillOptions,
  numberOfSkillsGranted,
}) => {
  const [validSkillOptions] = useState(_getValidOptions(skillOptions))

  const currentBgRequiresChoice = _areSkillOptionChoicesRequired(skillOptions)

  if (!currentBgRequiresChoice) {
    return <div></div>
  }

  const numOfSelectElemsToGenerate = _calcNumOfSelectElemsToGenerate(
    numberOfSkillsGranted,
    skillOptions
  )
  const dummy_array_to_help_generate_correct_num_of_select_elems =
    _buildArrayWithThisManyItems(numOfSelectElemsToGenerate)

  return (
    <div className="space-sequence-20">
      {dummy_array_to_help_generate_correct_num_of_select_elems.map((x) => {
        return (
          <div key={x * 25}>
            <select className="form-control">
              <option value="" selected>
                - Choose a Skill -
              </option>
              {validSkillOptions.map((skill) => {
                return <option key={skill.name}>{skill.name}</option>
              })}
            </select>
          </div>
        )
      })}
    </div>
  )
}

export default SkillProficienciesSelector

function _getValidOptions(skills: SkillType[]) {
  let validOptions = []

  for (const skill of skills) {
    if (skill.isAutoGranted === false) {
      validOptions.push(skill)
    }
  }

  return validOptions
}

function _areSkillOptionChoicesRequired(skillOptsArray: SkillType[]) {
  for (const skill of skillOptsArray) {
    if (!skill.isAutoGranted) {
      return true
    }
  }

  return false
}

function _calcNumOfSelectElemsToGenerate(
  numOfSkillsGranted: number,
  skillOptionsArray: SkillType[]
) {
  let numOfSkillsAutoGranted = 0

  for (const skill of skillOptionsArray) {
    if (skill.isAutoGranted) {
      numOfSkillsAutoGranted++
    }
  }

  return numOfSkillsGranted - numOfSkillsAutoGranted
}

function _buildArrayWithThisManyItems(elemsRequired: number) {
  const someArray = []

  for (let i = 0; i < elemsRequired; i++) {
    someArray.push(i)
  }

  return someArray
}
