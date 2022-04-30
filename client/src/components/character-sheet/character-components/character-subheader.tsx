import React from 'react'

const CharacterSubHeader: React.FC = () => {
  return (
    <>
      <div className='inline-block mr-4 rounded'>
        <img
          className='max-w-xxs rounded'
          alt='Gone, find another'
          src='https://i.pinimg.com/originals/39/7b/93/397b933463afe1dbce57d50d915ef29f.jpg'
        />
      </div>
      <div className='inline-block'>
        <div className='text-4xl font-roboto text-white'>Logan Ninefingers</div>
        <div className='text-sm font-roboto text-gray-400'>Illrigger 7</div>
        <div className='text-sm font-roboto text-gray-300'>Painkiller</div>
      </div>
    </>
  )
}

export default CharacterSubHeader
