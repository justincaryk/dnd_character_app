import React from 'react'
import CoreStatBlock from './core-stat-block'
import HealthBlock from './health-block'

const CharacterCoreStats: React.FC = () => {
  const coreStats = [
    {
      attribute: 'str',
      bonus: '+2',
      score: 14,
    },
    {
      attribute: 'dex',
      bonus: '+1',
      score: 12,
    },
    {
      attribute: 'con',
      bonus: '+3',
      score: 17,
    },
    {
      attribute: 'int',
      bonus: '+0',
      score: 11,
    },
    {
      attribute: 'wis',
      bonus: '+0',
      score: 10,
    },
    {
      attribute: 'cha',
      bonus: '+5',
      score: 20,
    },
  ]

  return (
    <div className='pb-2'>
      <div className='grid grid-cols-2 space-x-8'>
        <div className='grid grid-cols-6 space-x-4 p'>
          {coreStats.map((stat) => (
            <CoreStatBlock
              attribute={stat.attribute}
              bonus={stat.bonus}
              score={stat.score}
            />
          ))}
        </div>
        {/* right col split into 2 */}
        <div className='grid grid-cols-3 space-x-4'>
          <div className='grid grid-cols-2 space-x-4'>
            <div className='border-2 border-red-400 rounded flex items-center justify-center text-center bg-white'>
              <div>
                <div className='font-roboto text-xs'>PROFICIENCY</div>
                <div className='font-roboto text-xl bold'>+3</div>
                <div className='font-roboto text-xs'>BONUS</div>
              </div>
            </div>
            <div className='border-2 border-red-400 rounded flex items-center justify-center text-center bg-white'>
              <div>
                <div className='font-roboto text-xs'>WALKING</div>
                <div className='font-roboto text-xl bold'>30 ft</div>
                <div className='font-roboto text-xs'>SPEED</div>
              </div>
            </div>
          </div>
          <div className='col-span-2 border-2 border-red-400 rounded bg-white'>
            <HealthBlock maxHealth={67} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharacterCoreStats
