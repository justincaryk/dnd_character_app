import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import { useCreateCharacterMutation } from '../generated/graphql'
import { AuthContext } from '../global-state'
import { isEqual } from 'lodash'

const Home: React.FC = () => {
  const [authState, setAuthState] = useContext(AuthContext)
  const [performSignup, { data, loading }] = useCreateCharacterMutation()
  const history = useHistory()

  const handleCreateNewCharacter = async () => {
    const { data } = await performSignup({
      variables: {
        name: authState.username,
      },
    })
    const newAuthState = Object.assign(
      { currentCharacterId: data?.createCharacter?.character?.characterId },
      authState
    )

    setAuthState(newAuthState)

    history.push(
      `/create/${data?.createCharacter?.character?.characterId}/description`
    )
  }

  return (
    <div className='space-y-10 mt-10'>
      <div className='flex justify-center gap-x-10 max-w-full w-full'>
        <div className='self-end relative'>
          <button
            className='hover:no-underline decoration-none'
            onClick={handleCreateNewCharacter}
          >
            <img src='/assets/strip-1.png' alt='' />
            <div className='absolute top-1/2 left-7 -translate-x-1/2 -translate-y-1/2 text-2xl font-roboto font-bold text-blue-500'>
              Create a Character
            </div>
          </button>
        </div>
        <div className='self-end relative'>
          <a className='hover:no-underline' href='/view/characters'>
            <img src='/assets/strip-4.png' alt='' />
            <div className='absolute top-1/2 left-7 -translate-x-1/2 -translate-y-1/2 text-2xl font-roboto font-bold text-indigo-500'>
              View Characters
            </div>
          </a>
        </div>
      </div>
      <div className='flex justify-center gap-x-10 max-w-full w-full'>
        <div className='self-end relative'>
          <a className='hover:no-underline' href='/view/spells'>
            <img src='/assets/strip-3.png' alt='' />
            <div className='absolute top-1/2 left-7 -translate-x-1/2 -translate-y-1/2 text-2xl font-roboto font-bold text-green-500'>
              View Spells
            </div>
          </a>
        </div>
        <div className='self-end relative'>
          <a className='hover:no-underline' href='/view/classes'>
            <img src='/assets/strip-2.png' alt='' />
            <div className='absolute top-1/2 left-7 -translate-x-1/2 -translate-y-1/2 text-2xl font-roboto font-bold text-yellow-500'>
              View Classes
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
