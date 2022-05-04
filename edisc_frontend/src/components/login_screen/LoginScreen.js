import React from 'react'
import {Link} from 'react-router-dom';

const LoginScreen = () => {
  return (
    <header className="bar">
      <nav className="bar_links">
        <ul>
          <li>
            <Link className="logo_text" to="/">EDisc</Link>
          </li>
          <li>
            <Link className='link' to="/">Log in</Link>
          </li>
          <li>
            <Link className='link' to="/">Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default LoginScreen