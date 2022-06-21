import React, {useState,useEffect, useContext} from 'react'
import Axios from "axios";
import AuthContext from "../../contexts/AuthContext"

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
  const [loginStatus, setLoginStatus] = useState("")

  const login = () => {
    Axios.post("http://127.0.0.1:8000/api/auth/token/obtain/", {
      username: username,
      password: password,
    }).then((response) => {
      if(!response.data.message) {
      setLoginStatus(response.data.message)
      }
      else {
        console.log(response.data)
        setLoginStatus(response.data[0].username)
      }
    })
    }

  }

    return (
      <div className='center'>
        <div className='login'>
            <form>
                <span className='center'><input type="text" name="username"/></span>
                <span className='center'><input type="password" name="password"/></span>
                <span className='center'><input type="submit" className='loginBtn'></input></span>
            </form>
        </div>
      </div>
    )
}

export default LogIn