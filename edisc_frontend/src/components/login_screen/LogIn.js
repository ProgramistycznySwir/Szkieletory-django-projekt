import React, {useState,useEffect} from 'react'
import Axios from "axios";

const LogIn = ({Login, error}) => {
  return (
    <form>
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