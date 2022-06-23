import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {

 // const [path, setPath] = useState("/user")
  
  const path = window.location.pathname

  return (
    <div className="navbar">
        <nav className="navbar_links">
          <ul>
            <li>
              <Link className={path === "/" ? 'link_clicked' : 'link'} to='/'>Home</Link>
            </li>
            <li>
              <Link className={path === "/user" ? 'link_clicked' : 'link'} to='/user'>User page</Link>
            </li>
          </ul>
        </nav>
      </div>
  )
}

export default Navbar