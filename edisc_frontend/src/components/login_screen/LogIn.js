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

  let {loginUser} = useContext(AuthContext)

    return (
      <div className='center'>
        <div className='login'>
            <form onSubmit={loginUser}>
                <span className='center'><input type="text" name="username" placeholder="Enter Username" /></span>
                <span className='center'><input type="password" name="password" placeholder="Enter Password" /></span>
                <span className='center'><input type="submit" className='loginBtn'></input></span>
            </form>
        </div>
      </div>
    )
}

export default LogIn