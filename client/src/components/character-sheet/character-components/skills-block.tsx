import React from 'react'

const SkillsBlock: React.FC = () => {
  const saves = [
    {
      skill: 'Acrobatics',
      stat: 'DEX',
      prof: false,
      bonus: '+1',
    },
    {
      skill: 'Animal Handling',
      stat: 'WIS',
      prof: false,
      bonus: '+0',
    },
    {
      skill: 'Arcana',
      stat: 'INT',
      prof: false,
      bonus: '+0',
    },
    {
      skill: 'Athletics',
      stat: 'STR',
      prof: true,
      bonus: '+5',
    },
    {
      skill: 'Deception',
      stat: 'CHA',
      prof: true,
      bonus: '+8',
    },
    {
      skill: 'History',
      stat: 'INT',
      prof: false,
      bonus: '+0',
    },
    {
      skill: 'Insight',
      stat: 'WIS',
      prof: false,
      bonus: '+0',
    },
    {
      skill: 'Intimidation',
      stat: 'CHA',
      prof: true,
      bonus: '+8',
    },
    {
      skill: 'Investigation',
      stat: 'INT',
      prof: false,
      bonus: '+0',
    },
    {
      skill: 'Medicine',
      stat: 'WIS',
      prof: false,
      bonus: '+0',
    },
    {
      skill: 'Nature',
      stat: 'INT',
      prof: false,
      bonus: '+0',
    },
    {
      skill: 'Perception',
      stat: 'WIS',
      prof: true,
      bonus: '+3',
    },
    {
      skill: 'Performance',
      stat: 'CHA',
      prof: false,
      bonus: '+5',
    },
    {
      skill: 'Persuasion',
      stat: 'CHA',
      prof: true,
      bonus: '+8',
    },
    {
      skill: 'Religion',
      stat: 'INT',
      prof: false,
      bonus: '+0',
    },
    {
      skill: 'Sleight of Hand',
      stat: 'DEX',
      prof: false,
      bonus: '+1',
    },
    {
      skill: 'Stealth',
      stat: 'DEX',
      prof: false,
      bonus: '+1',
    },
    {
      skill: 'Survival',
      stat: 'WIS',
      prof: false,
      bonus: '+0',
    },
  ]

  const prof = (
    <div className='text-xs w-2 h-2 rounded-full ring-2 bg-gray-800 ring-black'></div>
  )
  const notProf = (
    <div className='text-xs w-2 h-2 rounded-full ring-2 ring-black'></div>
  )

  return (
    <div className='p-6'>
      <div className='space-y-2'>
        <div className='grid grid-cols-5 mb-2'>
            <div className='text-xs font-roboto text-gray-500 bold'>PROF</div>
            <div className='text-xs font-roboto text-gray-500 bold'>MOD</div>
            <div className='col-span-2 text-xs font-roboto text-gray-500 bold'>SKILL</div>
            <div className='text-xs font-roboto text-gray-500 bold'>BONUS</div>
        </div>
        {saves.map((save) => (
          <div className='grid grid-cols-5'>
            <div className='flex items-center justify-center'>
              {save.prof ? prof : notProf}
            </div>
            <div className='font-roboto text-xs flex items-center'>{save.stat}</div>
            <div className='font-roboto text-xs col-span-2'>{save.skill}</div>
            <div className='text-xs font-roboto'>
              {save.bonus}
              {save.skill === 'Stealth' ? (
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className='w-4 h-4 inline-block'><g><polygon fill="#fff" points="35 8 36 39 12 39 14 8"></polygon><path fill="#b00000" d="M27.38,17.75a9.362,9.362,0,0,1,1.44,5.68v1.12a9.4423,9.4423,0,0,1-1.44,5.71A5.21983,5.21983,0,0,1,23,32H21V16h2A5.19361,5.19361,0,0,1,27.38,17.75Z"></path><path fill="#b00000" d="M44.39,12.1,23.89.39,3.5,12.29,3.61,35.9l20.5,11.71L44.5,35.71ZM35.21,24.55a13.50293,13.50293,0,0,1-1.5,6.41,11.09308,11.09308,0,0,1-4.25,4.42A12.00926,12.00926,0,0,1,23.34,37H15V11h8.16a12.35962,12.35962,0,0,1,6.2,1.56,10.97521,10.97521,0,0,1,4.29,4.41,13.31084,13.31084,0,0,1,1.56,6.39Z"></path></g></svg>
                </span>
              ) : null}
            </div>
          </div>
        ))}
        <div className='mt-4 font-roboto text-sm text-center'>
          SKILLS
        </div>
      </div>
    </div>
  )
}

export default SkillsBlock
