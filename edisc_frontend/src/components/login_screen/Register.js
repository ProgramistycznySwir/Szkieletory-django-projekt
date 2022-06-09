import React from 'react'

const Register = () => {
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