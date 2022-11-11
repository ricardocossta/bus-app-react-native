import React, {createContext, useState} from 'react'

export const AuthContext = createContext({})

export default function AuthProvider({children}) {

    const [token, setToken] = useState(null)
    const [userId, setUserId] = useState(null)
    const [userName, setUserName] = useState(null)
    const API_KEY = "AIzaSyCJEyg9FXBDGLp_wzF2rG-FGy1KZAeg59Y"

    return (
        <AuthContext.Provider value={{token, setToken, API_KEY, userId, setUserId, userName, setUserName}}>
            {children}
        </AuthContext.Provider>
    )
}