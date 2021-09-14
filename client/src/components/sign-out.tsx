import React from 'react'
import { useHistory } from 'react-router'
import { AUTH_TOKEN } from '../constants'

const SignOut = () => {
    localStorage.setItem(AUTH_TOKEN, '')
    const history = useHistory()
    history.push('/')
    return null
}

export default SignOut