import React, { useState } from 'react'
import { useSigninMutation } from '../generated/graphql'
import { useHistory } from 'react-router-dom';
import { AUTH_TOKEN } from '../constants';

const SignIn: React.FC = () => {
  const history = useHistory()
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [performSignup, { data, loading }] = useSigninMutation()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user || !pass) {
      return
    }

    const { data } = await performSignup({
      variables: {
        username: user,
        password: pass,
      },
    })
    
    if (data?.signin?.jwtToken) {
      localStorage.setItem(AUTH_TOKEN, data.signin.jwtToken)
      window.location.href = '/'
    }
  }

  return (
    <form className='text-center space-y-4' onSubmit={handleSubmit}>
      <div>
        <label className='block mb-1' htmlFor='username'>
          Username
        </label>
        <input
          name='username'
          className='border rounded text-xl p-2'
          placeholder='username'
          value={user}
          onChange={(e) => setUser(e.currentTarget.value)}
        />
      </div>
      <div>
        <label className='block mb-1' htmlFor='password'>
          Password
        </label>
        <input
          name='password'
          type='password'
          className='border rounded text-xl p-2'
          placeholder='password'
          value={pass}
          onChange={(e) => setPass(e.currentTarget.value)}
        />
      </div>
      <div>
        <button
          type='submit'
          className='border rounded p-2 bg-indigo-600 text-white font-bold'
        >
          SIGN IN
        </button>
      </div>
    </form>
  )
}

export default SignIn
