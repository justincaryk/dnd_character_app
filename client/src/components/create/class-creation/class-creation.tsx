import React, { useState } from 'react'
import { useAllClassNamesQuery } from '../../../generated/graphql'
import ClassFeatures from './class-features'

const ClassCreation: React.FC = () => {
  const { data: classes, loading } = useAllClassNamesQuery()
  const [classSelected, setClassSelected] = useState<any>(null)

  if (loading) {
    return <div>...Loading</div>
  }

  if (!classSelected && classes) {
    return (
      <div className='space-y-2 max-w-screen-sm m-auto m-0'>
        {classes.allClasses?.nodes.map((c) => (
          <div
            className='w-full p-2 border-2 border-gray-200 rounded bg-white cursor-pointer flex justify-between items-center'
            onClick={() => setClassSelected(c ? c : null)}
            key={c?.id}
          >
            <div className='flex items-center space-x-6 cursor:pointer'>
              <img
                className='w-12 rounded'
                src={`/assets/${c?.name.toLowerCase()}_logo.jpeg`}
                alt=''
              />
              <div className='uppercase font-roboto font-bold text-xl'>
                {c?.name}
              </div>
            </div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 1035 1612'
              className='w-4 h-full'
            >
              <path
                fill='#1C9AEF'
                d='M653.5,109l741,742q19,19,19,45t-19,45l-741,742q-19,19-45.5,19t-45.5-19l-165-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l165-166q19-19,45.5-19T653.5,109Z'
                transform='translate(-378.5 -90)'
              ></path>
            </svg>
          </div>
        ))}
      </div>
    )
  }

  if (classSelected) {
    return (
      <div className='space-y-2 max-w-screen-sm m-auto m-0'>
        <ClassFeatures classObj={classSelected} setClassSelected={setClassSelected}/>
      </div>
    )
  }

  return <div>Create a class here</div>
}

export default ClassCreation
