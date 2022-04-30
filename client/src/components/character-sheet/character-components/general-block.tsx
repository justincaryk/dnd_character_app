import React, { useState } from 'react'

const GeneralBlock: React.FC = () => {
  const [hitDieRemaining, setHitDieRemaining] = useState(7)
  const [showRemainingHitDieInput, toggleShowRemainingHitDieInput] =
    useState(false)
  return (
    <div className='p-1 grid grid-cols-5'>
      {/* initiative */}
      <div className='flex align-center justify-center'>
        <div>
          <div className='font-roboto text-xs uppercase text-center mb-2'>
            Initiative
          </div>
          <div className='border-2 border-red-400 rounded py-1 px-4 text-2xl text-center bg-white'>
            +2
          </div>
        </div>
      </div>
      {/* AC */}
      <div className='w-32 h-28 relative'>
        <div className='z-20 relative pt-4'>
          <div className='text-xs text-gray-400 font-roboto text-center'>
            ARMOR
          </div>
          <div className='text-center font-roboto bold text-2xl'>18</div>
          <div className='text-xs text-gray-400 font-roboto text-center'>
            CLASS
          </div>
        </div>
        <div className='absolute top-0 left-0 right-0 bottom-0 z-10'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 79 90'
            className='w-full h-full'
          >
            <path
              fill='#FEFEFE'
              d='M72.8,30.7v13.7c-1,3.6-9.7,30.9-31.9,38.6c-0.3-0.4-0.8-0.7-1.4-0.7c-0.6,0-1,0.3-1.4,0.7
                        C26,78.7,17.9,68.6,12.9,59.8c0,0,0,0,0,0c-0.3-0.5-0.6-1-0.8-1.5c-3.6-6.7-5.4-12.4-5.9-14V30.7c0.7-0.3,1.2-0.9,1.2-1.7
                        c0-0.1,0-0.2-0.1-0.3c6.2-4,8.5-11.5,9.2-15.2L38.1,7c0.3,0.4,0.8,0.7,1.4,0.7c0.6,0,1.1-0.3,1.4-0.7l21.4,6.6
                        c0.8,3.6,3,11.1,9.2,15.2V29c0,0.2,0,0.4,0.1,0.6C71.8,30.1,72.3,30.5,72.8,30.7z'
            ></path>
            <path
              fill='rgba(248, 113, 113)'
              d='M73.2,27.3c-0.4,0-0.8,0.2-1.1,0.4c-5.8-3.9-7.9-11.3-8.6-14.5l-0.1-0.4l-22-6.7c-0.1-0.9-0.8-1.7-1.8-1.7
                        s-1.7,0.8-1.8,1.7l-22,6.7l-0.1,0.4c-0.6,3.2-2.7,10.6-8.6,14.5c-0.3-0.3-0.7-0.4-1.1-0.4c-1,0-1.8,0.8-1.8,1.9
                        c0,0.8,0.5,1.5,1.2,1.7v13.5v0.2c0.9,3.2,9.7,31.2,32.4,39.2c0.1,1,0.8,1.8,1.8,1.8s1.8-0.8,1.8-1.8c9.3-3.3,17.3-10.1,23.8-20.4
                        c5.3-8.4,7.9-16.5,8.6-18.8V30.9c0.7-0.3,1.2-0.9,1.2-1.7C75,28.1,74.2,27.3,73.2,27.3z M72.5,44.3c-1,3.6-9.6,30.5-31.5,38.2
                        c-0.3-0.4-0.8-0.7-1.4-0.7c-0.6,0-1,0.3-1.4,0.7C16.3,74.8,7.8,47.9,6.7,44.3V30.9c0.7-0.3,1.2-0.9,1.2-1.7c0-0.1,0-0.2-0.1-0.3
                        c6.1-4,8.4-11.4,9.1-15l21.3-6.5c0.3,0.4,0.8,0.7,1.4,0.7c0.6,0,1.1-0.3,1.4-0.7l21.2,6.5c0.8,3.6,3,11,9.1,15c0,0.1,0,0.2,0,0.3
                        c0,0.8,0.5,1.5,1.2,1.7V44.3z M73.2,27.3c-0.4,0-0.8,0.2-1.1,0.4c-5.8-3.9-7.9-11.3-8.6-14.5l-0.1-0.4l-22-6.7
                        c-0.1-0.9-0.8-1.7-1.8-1.7s-1.7,0.8-1.8,1.7l-22,6.7l-0.1,0.4c-0.6,3.2-2.7,10.6-8.6,14.5c-0.3-0.3-0.7-0.4-1.1-0.4
                        c-1,0-1.8,0.8-1.8,1.9c0,0.8,0.5,1.5,1.2,1.7v13.5v0.2c0.9,3.2,9.7,31.2,32.4,39.2c0.1,1,0.8,1.8,1.8,1.8s1.8-0.8,1.8-1.8
                        c9.3-3.3,17.3-10.1,23.8-20.4c5.3-8.4,7.9-16.5,8.6-18.8V30.9c0.7-0.3,1.2-0.9,1.2-1.7C75,28.1,74.2,27.3,73.2,27.3z M72.5,44.3
                        c-1,3.6-9.6,30.5-31.5,38.2c-0.3-0.4-0.8-0.7-1.4-0.7c-0.6,0-1,0.3-1.4,0.7C16.3,74.8,7.8,47.9,6.7,44.3V30.9
                        c0.7-0.3,1.2-0.9,1.2-1.7c0-0.1,0-0.2-0.1-0.3c6.1-4,8.4-11.4,9.1-15l21.3-6.5c0.3,0.4,0.8,0.7,1.4,0.7c0.6,0,1.1-0.3,1.4-0.7
                        l21.2,6.5c0.8,3.6,3,11,9.1,15c0,0.1,0,0.2,0,0.3c0,0.8,0.5,1.5,1.2,1.7V44.3z M78.1,24.5c-8.7-1.8-9.9-14.9-9.9-15l-0.1-0.8L39.5,0
                        L10.9,8.7l-0.1,0.8c0,0.1-1.2,13.3-9.9,15l-1,0.2v20.4v0.3C0,45.8,9.6,82.1,39.1,89.9l0.3,0.1l0.3-0.1C69.5,82.1,79,45.8,79.1,45.4
                        V24.7L78.1,24.5z M76.7,45C76,47.5,66.6,80.1,39.5,87.5C12.6,80.1,3.2,47.4,2.5,45V26.7c8.3-2.4,10.3-13,10.7-16.1l26.4-8l26.4,8
                        c0.4,3.1,2.4,13.7,10.7,16.1V45z M63.5,13.2l-0.1-0.4l-22-6.7c-0.1-0.9-0.8-1.7-1.8-1.7s-1.7,0.8-1.8,1.7l-22,6.7l-0.1,0.4
                        c-0.6,3.2-2.7,10.6-8.6,14.5c-0.3-0.3-0.7-0.4-1.1-0.4c-1,0-1.8,0.8-1.8,1.9c0,0.8,0.5,1.5,1.2,1.7v13.5v0.2
                        c0.9,3.2,9.7,31.2,32.4,39.2c0.1,1,0.8,1.8,1.8,1.8s1.8-0.8,1.8-1.8c9.3-3.3,17.3-10.1,23.8-20.4c5.3-8.4,7.9-16.5,8.6-18.8V30.9
                        c0.7-0.3,1.2-0.9,1.2-1.7c0-1-0.8-1.9-1.8-1.9c-0.4,0-0.8,0.2-1.1,0.4C66.2,23.9,64.1,16.4,63.5,13.2z M72.5,30.9v13.5
                        c-1,3.6-9.6,30.5-31.5,38.2c-0.3-0.4-0.8-0.7-1.4-0.7c-0.6,0-1,0.3-1.4,0.7C16.3,74.8,7.8,47.9,6.7,44.3V30.9
                        c0.7-0.3,1.2-0.9,1.2-1.7c0-0.1,0-0.2-0.1-0.3c6.1-4,8.4-11.4,9.1-15l21.3-6.5c0.3,0.4,0.8,0.7,1.4,0.7c0.6,0,1.1-0.3,1.4-0.7
                        l21.2,6.5c0.8,3.6,3,11,9.1,15c0,0.1,0,0.2,0,0.3C71.3,30,71.8,30.6,72.5,30.9z'
            ></path>
          </svg>
        </div>
      </div>
      {/* hit dice / death save fail/pass */}
      <div className='col-span-3 border-red-400 border-2 ml-4 p-2 rounded bg-white'>
        <div className='grid grid-cols-2 h-full'>
          {/* hit die */}
          <div className='p-1'>
            <div className='font-roboto text-xs text-gray-400'>
              (TOTAL) 7d10
            </div>
            <div>
              <div className='font-roboto uppercase text-center'>Remaining</div>
              {showRemainingHitDieInput ? (
                <input
                  className='w-full rounded border'
                  onChange={e => {
                    if (isNaN(Number(e.currentTarget.value))) {
                      return false
                    }
                    setHitDieRemaining(Number(e.currentTarget.value))
                  }}
                  onBlur={() => toggleShowRemainingHitDieInput(false)}
                />
              ) : (
                <div
                  className='text-xl font-roboto text-center'
                  onClick={() => toggleShowRemainingHitDieInput(true)}
                >
                  {hitDieRemaining}
                </div>
              )}
            </div>
            <div className='font-roboto uppercase text-center'>Hit Die</div>
          </div>
          {/* successes / failures */}
          <div className='border-l p-1'>
            <div className='text-xs text-gray-400 font-roboto uppercase'>
              Successes
            </div>
            <div className='space-x-1'>
              <input className='round-full' name='successes' type='checkbox' />
              <input className='round-full' name='successes' type='checkbox' />
              <input className='round-full' name='successes' type='checkbox' />
            </div>
            <div className='text-xs text-gray-400 font-roboto uppercase'>
              Failures
            </div>
            <div className='space-x-1'>
              <input className='round-full' name='successes' type='checkbox' />
              <input className='round-full' name='successes' type='checkbox' />
              <input className='round-full' name='successes' type='checkbox' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GeneralBlock
