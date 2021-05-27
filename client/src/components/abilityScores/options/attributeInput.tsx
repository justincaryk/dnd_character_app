import React, { useState } from 'react'
import './../../../scss/AttributeInput.scss'
import { AttributeInterface } from '../../../lib/types'

interface Props {
  attribute: AttributeInterface
  availablePoints: number
  pointCosts: any
}

// getting the index of the currently selected option
const getIndexOfOptions = (
  eventTargetVal: string,
  optionsInState: JSX.Element[]
) => {
  for (let i = 0; i < optionsInState.length; i++) {
    const opt = optionsInState[i]

    if (eventTargetVal === opt.props.value) {
      return i
    }
  }

  return 0
}

// creating and modifying the options array
const buildAvailableOptions = (props: Props) => {
  let availablePoints = props.availablePoints
  const pointCosts = props.pointCosts
  const pointDisplayVals = Object.keys(pointCosts)

  let lastPointKey = 8

  const optionsArr: JSX.Element[] = []

  for (const opt of pointDisplayVals) {
    let optionHmtl

    if (Math.sign(availablePoints - pointCosts[lastPointKey]) != -1) {
      optionHmtl = (
        <option
          value={lastPointKey + '-' + props.attribute.id}
          key={lastPointKey}
        >
          {lastPointKey}
        </option>
      )
      optionsArr.push(optionHmtl)
    }

    lastPointKey++
  }

  return optionsArr
}

const addOrRemoveAvailableOptionsAtIndex = (state: any, props: Props) => {
  const options = state.allOptions
  //selected index
  const currentlySelectedIndex = state.indexOfOptionSelected
  //starting index
  const startingIndex = currentlySelectedIndex + 1
  //avaiable points
  const availablePoints = props.availablePoints
  //cost of scores
  const pointCosts = props.pointCosts
  //all available point options
  const pointDisplayVals = Object.keys(pointCosts)
  //find the value of points already invested
  const priceAlreadyPaid = parseInt(
    //@ts-ignore
    pointCosts[options[currentlySelectedIndex].key]
  )

  //here we are finding the least expensive option that is NOT in the current options list
  //and checking if we can afford to add it back in

  const firstUnavailableOption = parseInt(pointDisplayVals[options.length])

  const priceOfFirstUnavailableOption = pointCosts[firstUnavailableOption]
  const realCostToIncreaseBeyondAvailOpt = firstUnavailableOption
    ? priceOfFirstUnavailableOption - priceAlreadyPaid
    : false

  // need to add options
  if (availablePoints >= realCostToIncreaseBeyondAvailOpt) {
    let currentPointKey = firstUnavailableOption

    for (let i = options.length; i < pointDisplayVals.length; i++) {
      let optionHmtl

      if (
        Math.sign(
          availablePoints - (pointCosts[currentPointKey] - priceAlreadyPaid)
        ) != -1
      ) {
        optionHmtl = (
          <option
            value={currentPointKey + '-' + props.attribute.id}
            key={currentPointKey}
          >
            {currentPointKey}
          </option>
        )
        options.push(optionHmtl)
      }

      currentPointKey++
    }
  }

  const lastOptionIsNotSelectedOption =
    options.length - 1 != currentlySelectedIndex ? true : false
  // here we look to see if the last currently available option costs more than we can afford
  if (lastOptionIsNotSelectedOption) {
    //@ts-ignore
    const lastAvailableOption = parseInt(options[options.length - 1].key)

    const priceOfLastAvailableOption = pointCosts[lastAvailableOption]
    const realCostOfLastAvailableOption =
      priceOfLastAvailableOption - priceAlreadyPaid

    // need to remove options
    if (availablePoints < realCostOfLastAvailableOption) {
      for (let i = startingIndex; i < options.length; i++) {
        let attributeScoreOfCurrentOption = options[i].key
        //@ts-ignore
        if (
          availablePoints <
          pointCosts[attributeScoreOfCurrentOption] - priceAlreadyPaid
        ) {
          options.length = i
          break
        }
      }
    }
  }

  return options
}

const AttributeInputBlock: React.FC<Props> = (props) => {
  const [attribute, setAttribute] = useState(props.attribute)
  const [hasValueSelected, setHasValueSelected] = useState<boolean>(false)
  const [indexOfOptionSelected, setIndexOfOptionSelected] = useState<number>(0)
  const [allOptions] = useState<JSX.Element[]>(buildAvailableOptions(props))

  const [options] = useState<JSX.Element[]>(
    addOrRemoveAvailableOptionsAtIndex(
      {
        allOptions: allOptions,
        indexOfOptionSelected: indexOfOptionSelected,
      },
      props
    )
  )

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    // const name = this.state.attributeName;
    const newAssignedScore = parseInt(event.target.value.split('-')[0])

    // we'll need to set this so we can strip more expensive options if user runs out of points elsewhere
    let indexOfOptionSelected = getIndexOfOptions(event.target.value, options)

    //used as a flag to ensure options aren't reset when a user selected a value
    const hasValueSelected = newAssignedScore != 8 ? true : false

    setIndexOfOptionSelected(indexOfOptionSelected)
    setHasValueSelected(hasValueSelected)

    //using this as a callback of sorts.. not sure whether this is reliable...
    props.attribute.currentAssignedScore = newAssignedScore
  }

  return (
    <div>
      <select className="form-control" onChange={handleChange}>
        {options}
      </select>
    </div>
  )
}

export default AttributeInputBlock
