import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useAllClassNamesQuery, useGetCharacterByIdQuery, useUpdateCharacterMutation } from '../../../generated/graphql'
import ClassFeatures from './class-features'

const ClassCreation: React.FC = () => {
  const { data: classes, loading } = useAllClassNamesQuery()
  const { id }: any = useParams()
  const [classSelected, setClassSelected] = useState<any>(null)
  const [performUpdate] = useUpdateCharacterMutation()
  const { data: char, loading: charLoading, refetch: refetchChar } = useGetCharacterByIdQuery({
    variables: {
      characterId: id,
    },
  })

  useEffect(() => {
    if (char?.characterByCharacterId?.classId && classes?.allClasses?.nodes) {
      const c = classes?.allClasses?.nodes.find(c => c?.id === char.characterByCharacterId?.classId)
      setClassSelected(c)
    } 
    if (char?.characterByCharacterId && !char.characterByCharacterId.classId) {
      setClassSelected('empty')
    }
    
  }, [char?.characterByCharacterId, classes?.allClasses?.nodes])

  const handleClassSelection = async (c: any) => {
    setClassSelected(c)

    await performUpdate({
      variables: {
        characterId: id,
        classId: c.id
      }
    })
  }

  if (loading || charLoading || !char || !classSelected) {
    return <div>...Loading</div>
  }

  if (char.characterByCharacterId === undefined) {
    return null
  }

  if (classSelected === 'empty' && classes) {
    return (
      <div className='space-y-2 max-w-screen-sm m-auto m-0'>
        {classes.allClasses?.nodes.map((c) => (
          <div
            className='w-full p-2 border-2 border-gray-200 rounded bg-white cursor-pointer flex justify-between items-center'
            onClick={() => handleClassSelection(c)}
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
        <ClassFeatures 
          classObj={classSelected} 
          setClassSelected={setClassSelected}
          character={char.characterByCharacterId}
          refetchCharacter={refetchChar}
        />
      </div>
    )
  }

  return <div>Create a class here</div>
}

export default ClassCreation
