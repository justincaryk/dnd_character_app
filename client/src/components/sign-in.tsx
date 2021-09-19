import React, { useState } from 'react'
import { useSigninMutation } from '../generated/graphql'
import { AUTH_TOKEN } from '../constants'
const SignIn: React.FC = () => {
  const [formHasErrors, setFormHasErrors] = useState(false)
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
    } else {
      setFormHasErrors(true)
    }
  }

  return (
    <>
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
            SIGN IN
          </button>
        </div>
        {formHasErrors && (
          <div className='mt-4 text-center text-xl text-red-500 font-bold'>
            Incorrect username or password
          </div>
        )}
      </form>
    </>
  )
}

export default SignIn
