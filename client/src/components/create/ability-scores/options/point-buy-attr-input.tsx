import React, { useEffect, useState } from 'react'
import { AttributeInterface } from '../../../../lib/types'

interface Props {
  attribute: AttributeInterface
  availablePoints: any
  handleChange: any
}

type DefaultOptionType = {
  value: number
  text: string
  cost: number
}

const PointBuyAttrInputBlock: React.FC<Props> = ({
  attribute,
  availablePoints,
  handleChange,
}) => {
  const [defaultOptions] = useState<DefaultOptionType[]>([
    {
      value: 8,
      text: '8',
      cost: 0,
    },
    {
      value: 9,
      text: '9 (-1 Point)',
      cost: 1,
    },
    {
      value: 10,
      text: '10 (-2 Points)',
      cost: 2,
    },
    {
      value: 11,
      text: '11 (-3 Points)',
      cost: 3,
    },
    {
      value: 12,
      text: '12 (-4 Points)',
      cost: 4,
    },
    {
      value: 13,
      text: '13 (-5 Points)',
      cost: 5,
    },
    {
      value: 14,
      text: '14 (-7 Points)',
      cost: 7,
    },
    {
      value: 15,
      text: '15 (-9 Points)',
      cost: 9,
    },
  ])

  const [options, setOptions] = useState(defaultOptions)

  useEffect(() => {
    if (availablePoints === 27) {
      setOptions(defaultOptions)
    } else {
      const opts = []
      
      for (const defOpt of defaultOptions) {
        if (availablePoints >= defOpt.cost || defOpt.value <= attribute.currentAssignedScore) {
          opts.push(defOpt)
        }
      }
      setOptions(opts)
    }
  }, [availablePoints, attribute.currentAssignedScore])


  return (
    <div>
      <select
        className='w-full border rounded-b text-lg p-2'
        onChange={(e) => handleChange(e, attribute.id)}
        defaultValue={`${attribute.currentAssignedScore}`}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.text}
          </option>
        ))}
      </select>
    </div>
  )
}

export default PointBuyAttrInputBlock
