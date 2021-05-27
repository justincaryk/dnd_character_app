import React, { useState } from 'react'
import './../../scss/descript/ToolProficiencies.scss'
import { EquipmentDataType } from './../../lib/types'
interface ToolType {
  name: string
  isAutoGranted: boolean
}

interface Props {
  equipment: EquipmentDataType[]
  allToolOptions: ToolType[]
  numberOfToolsGranted: number
}

const getValidOptions = (
  tools: ToolType[],
  extraEquipment: EquipmentDataType[]
) => {
  let standardOptions = []
  let instruments: string[] = []
  let artisanTools: string[] = []
  let gamingSet: string[] = []

  for (const tool of tools) {
    if (tool.name === 'Musical Instrument') {
      if (!instruments.length) {
        instruments = extraEquipment
          .filter((x) => x.type === 'instrument')
          .map((x) => x.name)
      }
      continue
    }

    if (tool.name === "Artisan's Tools") {
      if (!artisanTools.length) {
        artisanTools = extraEquipment
          .filter((x) => x.type === 'artisan')
          .map((x) => x.name)
      }
      continue
    }

    if (tool.name === 'Gaming Set') {
      if (!gamingSet.length) {
        gamingSet = extraEquipment
          .filter((x) => x.type === 'gaming')
          .map((x) => x.name)
      }
      continue
    }

    if (tool.isAutoGranted === false) {
      standardOptions.push(tool.name)
    }
  }

  const validOptions = standardOptions.concat(
    instruments,
    artisanTools,
    gamingSet
  )

  return validOptions
}

const areToolOptionChoicesRequired = (toolOptsArray: ToolType[]) => {
  for (const tool of toolOptsArray) {
    if (!tool.isAutoGranted) {
      return true
    }
  }
  return false
}

const calcNumOfSelectElemsToGenerate = (
  numOftoolsGranted: number,
  toolOptionsArray: ToolType[]
) => {
  let numOftoolsAutoGranted = 0
  for (const tool of toolOptionsArray) {
    if (tool.isAutoGranted) {
      numOftoolsAutoGranted++
    }
  }
  return numOftoolsGranted - numOftoolsAutoGranted
}

const buildArrayWithThisManyItems = (elemsRequired: number) => {
  const someArray = []

  for (let i = 0; i < elemsRequired; i++) {
    someArray.push(i)
  }

  return someArray
}

const ToolProficienciesSelector: React.FC<Props> = ({
  equipment,
  allToolOptions,
  numberOfToolsGranted,
}) => {
  const currentBgRequiresChoice = areToolOptionChoicesRequired(allToolOptions)
  const [validToolOptions] = useState(
    getValidOptions(allToolOptions, equipment)
  )

  if (!currentBgRequiresChoice) {
    return null
  }

  const numOfSelectElemsToGenerate = calcNumOfSelectElemsToGenerate(
    numberOfToolsGranted,
    allToolOptions
  )

  const emptyArrayOfCorrectLen = buildArrayWithThisManyItems(
    numOfSelectElemsToGenerate
  )

  return (
    <div className="space-sequence-20">
      {emptyArrayOfCorrectLen.map((x) => {
        return (
          <div key={x * 25}>
            <select className="form-control" defaultValue={''}>
              <option value="">- Choose a tool -</option>
              {validToolOptions.map((tool) => {
                return <option key={tool}>{tool}</option>
              })}
            </select>
          </div>
        )
      })}
    </div>
  )
}

export default ToolProficienciesSelector
