import React from 'react'
import GeneralBlock from './character-components/general-block'
import SavingThrowBlock from './character-components/saving-throw-block'
import SkillsBlock from './character-components/skills-block'
import CharacterCoreStats from './character-components/character-core-stats'
import CharacterSubHeader from './character-components/character-subheader'
import PassiveBlock from './character-components/passive-block'
import ActionFeatureBlock from './character-components/action-feature-block'

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
        {/* left column */}
        <div className='space-y-6 border-2 border-red-400 rounded p-2'>
          <SavingThrowBlock />
          <PassiveBlock />
        </div>
        
        {/* mid column */}
        <div className='border-2 border-red-400 rounded bg-white'><SkillsBlock/></div>

        {/* right column (main beef) */}
        <div className='col-span-2 space-y-10'>
          <GeneralBlock/>
          <div className='border-red-400 rounded border-2 h-96 overflow-x-scroll'>
            <ActionFeatureBlock />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharacterSheet
