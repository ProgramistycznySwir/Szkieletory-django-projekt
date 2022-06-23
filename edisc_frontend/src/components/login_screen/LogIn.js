import React, {useState,useEffect, useContext} from 'react'
import Axios from "axios";
//import AuthContext from "../../contexts/AuthContext"

const LogIn = () => {

  /*
  const [details, setDetails] = useState({name: "", email: "", password: ""});

  const submitHandler = (e) => {
    e.preventDeafult()
    Login(details)
  }
  */

  //let {loginUser} = useContext(AuthContext)
//==================================================================================

  const [username, setUsername] = useState("")
  const [password, setPassowrd] = useState("")
  const [loginStatus, setLoginStatus] = useState(false)

  const login = () => {
    Axios.post("http://127.0.0.1:8000/api/auth/login", [{ 
      username: username,
      password: password,
    }]).then((response) => {
      if(!response.data.message) {
      setLoginStatus(false)
        console.log(response.data.message)
      }
      else {
        console.log(response.data.message)
        setLoginStatus(true)
      }
    })
    }

    return (
      <div className='center'>
        <div className='login'>
            <div>
                <span className='center'><input type="text" name="username" placeholder="username" onChange={(e) => {setUsername(e.target.value)}}/></span>
                <span className='center'><input type="password" name="password" placeholder="password" onChange={(e) => {setPassowrd(e.target.value)}}/></span>
                <span className='center'><button className='loginBtn' onClick={login}>Login</button></span>
            </div>
        </div>
        <p>{loginStatus}</p>
      </div>
    )
}

export default LogIn