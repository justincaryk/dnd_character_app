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
    <div className='text-xs w-2 h-2 rounded-full border border-dotted bg-gray-800'></div>
  )
  const notProf = (
    <div className='text-xs w-2 h-2 rounded-full border border-black'></div>
  )

  return (
    <div className='p-6 border-2 border-red-400 rounded'>
      <div>
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
            <div className='text-xs font-roboto'>{save.bonus}</div>
          </div>
        ))}
        <div className='mt-4 font-roboto text-sm text-center'>
          SAVING THROWS
        </div>
      </div>
    </div>
  )
}

export default SkillsBlock
