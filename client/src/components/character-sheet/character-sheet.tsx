import React from 'react'
import CharacterCoreStats from './character-core-stats'
import CharacterSubHeader from './character-subheader'

const CharacterSheet: React.FC = () => {
  return (
    <div className='md:mx-6'>
      {/* subheader */}
      <div className='bg-grey'>
        <CharacterSubHeader />
      </div>

      {/* stats row */}
      <div>
        <CharacterCoreStats />
      </div>

      {/* 3 columns */}
      <div className='grid grid-cols-4'>
        <div className='border '>col 1-25%</div>
        <div className='border '>col 2-25%</div>
        <div className='border col-span-2'>col 3-50%</div>
      </div>
    </div>
  )
}

export default CharacterSheet
