import React from 'react'
import { useHistory } from 'react-router'
import { useGetAllCharactersQuery } from '../../../generated/graphql'

const ViewCharacters: React.FC = () => {
  const { data, loading } = useGetAllCharactersQuery()
  const history = useHistory()

  if (loading) {
    return <div>...Loading</div>
  }

  return (
    <div className='space-y-4'>
      <div className='border-b-4 py-4 border-sky-blue font-bold text-4xl'>
        My Characters
      </div>
      <div className='flex justify-between'>
        <div>TODO: Create character Link</div>
        <div>TODO: Sort By</div>
      </div>
      <div className='grid grid-cols-3 gap-x-5 gap-y-5'>
        {data?.allCharacters?.nodes.map((char) => (
          <div className='bg-white'>
            <div className='bg-stone text-white p-2'>
              <div className='text-xl font-bold'>{char?.name}</div>
              <div className='whitespace-nowrap overflow-ellipsis font-roboto text-xs text-gray-400'>
                <span>Level {char?.currentLevel}</span>
                <span>
                  {' '}
                  |{' '}
                  {char?.subraceBySubraceId?.name ||
                    char?.raceByRaceId?.name ||
                    'No Race Selected'}
                </span>
                {char?.classByClassId?.name ? (
                  <span> | {char?.classByClassId?.name}</span>
                ) : null}
                {char?.subclassBySubclassId?.name ? (
                  <span>/{char?.subclassBySubclassId?.name}</span>
                ) : null}
              </div>
            </div>
            <div className='p-2 flex justify-between border-b border-l border-r'>
              <div>
                <button 
                    className='text-sky-blue font-roboto uppercase hover:no-underline cursor-pointer outline-none'
                    onClick={() => history.push(`/create/${char?.characterId}/sheet`)}
                >
                  View
                </button>
              </div>
              <div>
                <button 
                    className='text-sky-blue font-roboto uppercase hover:no-underline cursor-pointer outline-none'
                    onClick={() => history.push(`/create/${char?.characterId}/description`)}
                >
                  Edit
                </button>
              </div>
              <div>
                <button className='text-red-500 font-roboto uppercase hover:no-underline cursor-pointer outline-none'>
                  TODO: Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ViewCharacters
