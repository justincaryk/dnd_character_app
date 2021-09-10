import React, { useState } from 'react'
import classnames from 'classnames'

type IsActiveType = 'actions' | 'features' | 'inv' | 'notes'

const ActionFeatureBlock: React.FC = () => {
  const [isActive, setIsActive] = useState<IsActiveType>('actions')

  const checkIsActive = (caller: IsActiveType) => caller === isActive

  const baseHeaderClasses =
    'font-roboto text-xs text-gray-400 uppercase hover:text-black hover:bold cursor-pointer'
  const activeClasses = 'border-b-4'
  return (
    <div className='p-4'>
      <div className='flex justify-between w-full'>
        <div
          className={classnames({
            [baseHeaderClasses]: true,
            [activeClasses]: checkIsActive('actions'),
          })}
          onClick={() => setIsActive('actions')}
        >
          Actions
        </div>
        <div
          className={classnames({
            [baseHeaderClasses]: true,
            [activeClasses]: checkIsActive('features'),
          })}
          onClick={() => setIsActive('features')}
        >
          Features & Traits
        </div>
        <div
          className={classnames({
            [baseHeaderClasses]: true,
            [activeClasses]: checkIsActive('inv'),
          })}
          onClick={() => setIsActive('inv')}
        >
          Inventory
        </div>
        <div
          className={classnames({
            [baseHeaderClasses]: true,
            [activeClasses]: checkIsActive('notes'),
          })}
          onClick={() => setIsActive('notes')}
        >
          Notes
        </div>
      </div>
      {/* action block */}
      {
          isActive === 'actions' && (
            <div className='mt-4 space-y-4'>
                <div className='text-xs font-roboto text-gray-400'>Attacks per Action: 2</div>
                <div className='grid grid-cols-4'>
                    <div className='font-roboto text-xs uppercase'>Attack</div>
                    <div className='font-roboto text-xs uppercase'>Range</div>
                    <div className='font-roboto text-xs uppercase'>Hit</div>
                    <div className='font-roboto text-xs uppercase'>Damage</div>
                </div>
                <div className='grid grid-cols-4'>
                    <div className='text-xs font-bold flex items-center'>Greatsword +1</div>
                    <div className='text-xs font-bold flex items-center'>5 ft</div>
                    <div>
                        <span className='font-roboto text-lg border rounded px-4 py-1 inline-block'>+9</span>
                    </div>
                    <div className='font-roboto text-lg border rounded p-1 text-center'>2d6 + 6</div>
                </div>
                <div className='grid grid-cols-4'>
                    <div className='text-xs font-bold flex items-center'>GS (GWM)</div>
                    <div className='text-xs font-bold flex items-center'>5 ft</div>
                    <div>
                        <span className='font-roboto text-lg border rounded px-4 py-1 inline-block'>+4</span>
                    </div>
                    <div className='font-roboto text-lg border rounded p-1 text-center'>2d6 + 16</div>
                </div>
                <div className='grid grid-cols-4'>
                    <div className='text-xs font-bold flex items-center'>Crossbow, Heavy</div>
                    <div className='text-xs font-bold flex items-center'>100/400</div>
                    <div>
                        <span className='font-roboto text-lg border rounded px-4 py-1 inline-block'>+5</span>
                    </div>
                    <div className='font-roboto text-lg border rounded p-1 text-center'>1d10 + 2</div>
                </div>
                <div className='grid grid-cols-4'>
                    <div className='text-xs font-bold flex items-center'>Spell</div>
                    <div className='text-xs font-bold flex items-center'>See spell</div>
                    <div>
                        <span className='font-roboto text-lg border rounded px-4 py-1 inline-block'>+8</span>
                    </div>
                    <div className='font-roboto text-lg border rounded p-1 text-center'>See spell</div>
                </div>
            </div>
          )
      }
      
      {/* features block */}
    </div>
  )
}

export default ActionFeatureBlock
