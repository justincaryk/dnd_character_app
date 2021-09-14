import React, { useState } from 'react'
import { useSignUpMutation } from '../generated/graphql'

const SignUp: React.FC = () => {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [performSignup, { data, loading }] = useSignUpMutation()

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

    if (data?.signup?.boolean === true) {
      alert('signup successful')
      window.location.href = '/signin'
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
          SIGN UP
        </button>
      </div>
    </form>
  )
}

export default SignUp
