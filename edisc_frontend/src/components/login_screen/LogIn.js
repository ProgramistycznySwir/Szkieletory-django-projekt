import React, {useState,useEffect} from 'react'
import Axios from "axios";

const LogIn = () => {

  const [user, setUser] = useState({username:"", email: ""})
  const [error, setError] = useState("")

  const login = (details) => {
    console.log(details)
  }

  

  return (
    <div>Tu będzie ekran logowania</div>
  )
}

export default LogIn