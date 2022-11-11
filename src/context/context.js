import React, {createContext, useState} from 'react'

export const AuthContext = createContext({})

export default function AuthProvider({children}) {

    const [user, setUser] = useState('')
    const API_KEY = "AIzaSyCJEyg9FXBDGLp_wzF2rG-FGy1KZAeg59Y"

    return (
        <AuthContext.Provider value={{user, setUser, API_KEY}}>
            {children}
        </AuthContext.Provider>
    )
}