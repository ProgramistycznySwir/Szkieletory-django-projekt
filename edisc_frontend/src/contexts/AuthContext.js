import React from 'react'
import { createContext, useState, useEffect } from 'react'
import Axios from 'axios'
import jwt_decode from "jwt-decode"

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children}) => {

    let [user, setUser] = useState(null)
    let [authToken, setAuthToken] = useState(null)

    let loginUser = async (e) => {
        e.preventDeafult()
        console.log('form submitted')
        /*let response = Axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/auth/token/obtain/',
            data: {
                body:JSON.stringify({'username':e.target.username.value, 'password':e.target.password.value})
            },
            headers: {
                'Content-type': 'application/json',
                Accept: 'application/json'
            }
        })
        let data = await response.json()
        console.log('data', data)
        if(response.status === 200){
            setAuthToken(data)
            setUser(jwt_decode(data.access))
        }*/
    }

    let contextData = {
        user:user,
        loginUser:loginUser
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}


/*const AuthContext = createContext()

export default AuthContext;


export const AuthProvider = ({children}) => {
    let [user, setUser] = useState(null)
    let [authToken, setToken] = useState(null)
    let [loading, setLoading] = useState(true)

  //  const history = useHistory()

    let loginUser = async (e )=> {
        e.preventDefault()
        console.log('form submitted')
        let response = await fetch('http://127.0.0.1:8000/api/auth/token/obtain/', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'username':e.target.username.value, 'password':e.target.password.value})
        })
    }


    let contextData = {
        loginUser:loginUser
    }

        return(
        <AuthContext.Provider value={contextData} >
            {loading ? null : children}
        </AuthContext.Provider>)
}*/