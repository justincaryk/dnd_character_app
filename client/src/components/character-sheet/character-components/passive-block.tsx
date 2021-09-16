import React from 'react'

const PassiveBlock: React.FC = () => {
  
  return (
    <div className='p-6 border-2 border-red-400 rounded bg-white'>
      <div className='space-y-2'>
        <div className='flex items-center justify-between'>
            <div className='border rounded-full text-lg px-2'>13</div>
            <div className='uppercase font-roboto text-xs'>Passive Perception (WIS)</div>
        </div>
        <div className='flex items-center justify-between'>
            <div className='border rounded-full text-lg px-2'>10</div>
            <div className='uppercase font-roboto text-xs'>Passive Investigation (INT)</div>
        </div>
        <div className='flex items-center justify-between'>
            <div className='border rounded-full text-lg px-2'>10</div>
            <div className='uppercase font-roboto text-xs'>Passive Insight (WIS)</div>
        </div>
        <div className='mt-4 font-roboto text-sm text-center'>SENSES</div>
      </div>
    </div>
  )
}

export default PassiveBlock
