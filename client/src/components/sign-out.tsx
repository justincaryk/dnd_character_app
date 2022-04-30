import React from 'react'
import { AUTH_TOKEN } from '../constants'

const SignOut: React.FC = () => {
  localStorage.setItem(AUTH_TOKEN, '')
  window.location.href = '/signin'
  return null
}

export default SignOut
