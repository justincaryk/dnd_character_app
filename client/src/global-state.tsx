import React, { useState, createContext } from 'react'

export const AuthContext = createContext<any>(null)

interface Props {
    children?: any
}
export const AuthProvider: React.FC<Props> = ({children}) => {
    const [authState, setAuthState] = useState({
        userId: '',
        username: '',
        currentCharacterId: ''
    })

    return (
        <AuthContext.Provider value={[authState, setAuthState]}>
            {children}
        </AuthContext.Provider>
    )
}
