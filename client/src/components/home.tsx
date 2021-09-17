import React from 'react'

const Home: React.FC = () => (
  <div className='space-y-10 mt-10'>
    <div className='flex justify-center gap-x-10 max-w-full w-full'>
      <div className='self-end relative'>
        <a className='hover:no-underline' href='/races'>
          <img src='/assets/strip-1.png' alt='' />
          <div className='absolute top-1/2 left-7 -translate-x-1/2 -translate-y-1/2 text-2xl font-roboto font-bold text-blue-500'>
            Create a character
          </div>
        </a>
      </div>
      <div className='self-end relative'>
        <a className='hover:no-underline' href='/classes'>
          <img src='/assets/strip-2.png' alt='' />
          <div className='absolute top-1/2 left-7 -translate-x-1/2 -translate-y-1/2 text-2xl font-roboto font-bold text-yellow-500'>
            View Classes
          </div>
        </a>
      </div>
    </div>
    <div className='flex justify-center gap-x-10 max-w-full w-full'>
      <div className='self-end relative'>
        <a className='hover:no-underline' href='/spells'>
          <img src='/assets/strip-3.png' alt='' />
          <div className='absolute top-1/2 left-7 -translate-x-1/2 -translate-y-1/2 text-2xl font-roboto font-bold text-green-500'>
            View Spells
          </div>
        </a>
      </div>
      <div className='self-end relative'>
        <a className='hover:no-underline' href='/feats'>
          <img src='/assets/strip-4.png' alt='' />
          <div className='absolute top-1/2 left-7 -translate-x-1/2 -translate-y-1/2 text-2xl font-roboto font-bold text-indigo-500'>
            View Feats
          </div>
        </a>
      </div>
    </div>
  </div>
)

export default Home
