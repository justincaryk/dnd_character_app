import React from 'react'

const SavingThrowBlock: React.FC = () => {
  const saves = [
    {
      stat: 'STRENGTH',
      prof: false,
      bonus: '+2',
    },
    {
      stat: 'DEXTERITY',
      prof: false,
      bonus: '+1',
    },
    {
      stat: 'CONSITUTION',
      prof: true,
      bonus: '+6',
    },
    {
      stat: 'INTELLIGENCE',
      prof: false,
      bonus: '+0',
    },
    {
      stat: 'WISDOM',
      prof: false,
      bonus: '+0',
    },
    {
      stat: 'CHARISMA',
      prof: true,
      bonus: '+8',
    },
  ]

  const prof = (
    <div className='text-xs w-2 h-2 rounded-full ring-2 bg-gray-800 ring-black'></div>
  )
  const notProf = (
    <div className='text-xs w-2 h-2 rounded-full ring-2 ring-black'></div>
  )

  return (
    <div className='p-6 border-2 border-red-400 rounded'>
      <div className='space-y-2'>
        {saves.map((save) => (
          <div className='grid grid-cols-6'>
            <div className='flex items-center justify-center text-center'>
              {save.prof ? prof : notProf}
            </div>
            <div className='text-xs font-roboto'>{save.bonus}</div>
            <div className='font-roboto text-xs col-span-4'>{save.stat}</div>
          </div>
        ))}
        <div className='mt-4 font-roboto text-sm text-center'>SAVING THROWS</div>
      </div>
    </div>
  )
}

export default SavingThrowBlock
