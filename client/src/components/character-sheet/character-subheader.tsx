import React, { useState } from 'react'

const CharacterSubHeader: React.FC = () => {
  return (
    <div className='pb-2'>
      <div className='text-lg'>Character Name</div>
      <div className='text-sm text-gray-400'>Character Class + Level</div>
      <div className='text-sm'>Character Level</div>
    </div>
  )
}

export default CharacterSubHeader
