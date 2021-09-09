import React from 'react'
import SavingThrowBlock from './character-components/saving-throw-block'
import SkillsBlock from './character-components/skills-block'
import CharacterCoreStats from './character-core-stats'
import CharacterSubHeader from './character-subheader'
import PassiveBlock from './passive-block'

const CharacterSheet: React.FC = () => {
  return (
    <div className='md:mx-6'>
      {/* subheader */}
      <div className='-ml-96 pl-96 -mr-96 pr-96 -mt-8 pt-4 pb-4 bg-gray-dark' >
        <CharacterSubHeader />
      </div>

      {/* stats row */}
      <div className='pt-6'>
        <CharacterCoreStats />
      </div>

      {/* 3 columns */}
      <div className='mt-6 grid grid-cols-4 space-x-6'>
        <div className='space-y-6'>
          <SavingThrowBlock />
          <PassiveBlock />
        </div>
        <div><SkillsBlock/></div>
        <div className='border col-span-2'>col 3-50%</div>
      </div>
    </div>
  )
}

export default CharacterSheet
