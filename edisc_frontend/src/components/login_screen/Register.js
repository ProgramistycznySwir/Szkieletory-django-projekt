import React, {useState,useEffect, useContext} from 'react'
import Axios from "axios";

const Register = () => {

  const [username, setUsername] = useState("")
  const [password, setPassowrd] = useState("")
  const [email, setUEmail] = useState("")

  const login = () => {
    Axios.post("http://127.0.0.1:8000/api/auth/token/obtain/", {
      username: username,
      password: password,
      email: email,
    }).then((response) => {
      console.log(response)
    })
    }

  return (
    <div className='center'>
      <div className='login'>
          <form>
            <span className='center'><input type="text" name="username" placeholder="Username" /></span>
            <span className='center'><input type="email" name="email" placeholder="Email" /></span>
            <span className='center'><input type="password" name="password" placeholder="Password" /></span>
            <span className='center'><input type="password" name="password_repeat" placeholder="Password" /></span>
            <span className='center'><input type="submit" className='loginBtn'></input></span>
          </form>
      </div>
    </div>
  )
}

export default Register