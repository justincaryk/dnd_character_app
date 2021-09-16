import React, { useState } from 'react'
import { useSignUpMutation } from '../generated/graphql'

const SignUp: React.FC = () => {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [signUpSuccessful, setSignUpSuccessful] = useState(false)
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
      setSignUpSuccessful(true)
      window.location.href = '/signin'
    }
  }

  return (
    <div>
      {signUpSuccessful ? (
        <div className='space-y-4 relative w-1/2 m-auto m-0 pt-12 text-xl text-center font-bold'>
          Sign up successful! 
        </div>
      ) : (
        <form
          className='space-y-4 relative w-1/2 m-auto m-0 pt-12'
          onSubmit={handleSubmit}
        >
          <div>
            <label className='block mb-1' htmlFor='username' hidden>
              Username
            </label>
            <input
              name='username'
              className='w-full border rounded text-xl p-2 text-center'
              placeholder='username'
              value={user}
              onChange={(e) => setUser(e.currentTarget.value)}
            />
          </div>
          <div>
            <label className='block mb-1' htmlFor='password' hidden>
              Password
            </label>
            <input
              name='password'
              type='password'
              className='w-full border rounded text-xl p-2 text-center'
              placeholder='password'
              value={pass}
              onChange={(e) => setPass(e.currentTarget.value)}
            />
          </div>
          <div>
            <button
              type='submit'
              className='w-full border rounded p-3 bg-indigo-600 text-white font-bold'
            >
              SIGN UP
            </button>
          </div>
        </form>
      )}
    </div>
  )
}

export default SignUp
