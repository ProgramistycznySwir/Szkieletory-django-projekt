import React from 'react'
import { createContext, useState, useEffect } from 'react'
import Axios from 'axios'

const AuthContext = createContext()

export default AuthContext

export const AuthProvider = ({children}) => {

    let [user, setUser] = useState(null)
    let [authToken, setToken] = useState(null)

    let loginUser = async (e) => {
        let response = Axios({
            method: 'post',
            url: 'url_placeholder',
            data: {
                body:JSON.stringify({'username':null, 'password':null})
            },
            headers: {
                'Content-type': 'application/json',
                Accept: 'application/json'
            }
        })
    }

    let contextData = {
        loginUser:loginUser
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}