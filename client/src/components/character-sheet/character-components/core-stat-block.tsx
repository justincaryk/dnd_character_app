import React from 'react'

interface Props {
  attribute: string
  bonus: string
  score: number
}

const CoreStatBlock: React.FC<Props> = ({ attribute, bonus, score }) => {
  return (
    <div className='p-1 border-2 border-red-400 rounded bg-white'>
      <div className='text-center'>
        <div className='font-roboto text-gray-500 text-xs'>
          {attribute.toUpperCase()}
        </div>
        <div className='px-4 py-1 border rounded font-roboto text-xl'>
          {bonus}
        </div>
        <div className='font-roboto bold mt-1'>
          <span className='px-2 py-1 border-2 border-red-400 rounded-full'>
            {score}
          </span>
        </div>
      </div>
    </div>
  )
}

export default CoreStatBlock
