import React, {useState, useEffect} from 'react'
import Axios from "axios";
import LogIn from './LogIn';
import Register from './Register'

const LoginScreen = () => {
  const [active, setActive] = useState("Login")

  return (
    <div>
    <div className="navbar">
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
    </div>
    <div>
        <div>
        {active === "Login" && <LogIn></LogIn>}
        {active === "Register" && <Register></Register>}
        </div>
    </div>
    </div>
  )
}

export default LoginScreen