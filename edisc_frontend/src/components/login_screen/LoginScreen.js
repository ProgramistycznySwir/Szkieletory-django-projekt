import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import LogIn from './LogIn';
import Register from './Register'

const LoginScreen = () => {

  const [active, setActive] = useState("page")

  return (
    <header>
      <article className="navbar">
        <nav className="navbar_links">
          <ul>
            <li>
              <button className={active === "Login" ? 'link_clicked':'link'} onClick = {() => setActive("Login")}>Login</button>
            </li>
            <li>
              <button className={active === "Register" ? 'link_clicked':'link'} onClick = {() => setActive("Register")}>Register</button>
            </li>
          </ul>
        </nav>
      </article>
      <article>
        <div>
          {active === "Login" && <LogIn></LogIn>}
          {active === "Register" && <Register></Register>}
        </div>
      </article>
    </header>
  )
}

export default LoginScreen