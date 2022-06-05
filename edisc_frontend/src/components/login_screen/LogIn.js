import React, {useState,useEffect, useContext} from 'react'
import Axios from "axios";

const LogIn = ({Login, error}) => {

  const [details, setDetails] = useState({name: "", email: "", password: ""});

  const submitHandler = (e) => {
    e.preventDeafult()
    Login(details)
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Login</h2>
        {/*Error*/}
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input type="text" name="name" id="name"></input>
        </div>
        <div className="form-group">
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' id='password'></input>
        </div>
      </div>
      <input type='submit' value='login'></input>
    </form>
  )
}

export default LogIn