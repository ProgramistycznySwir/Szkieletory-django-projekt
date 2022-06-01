import React from 'react'
import {Link} from 'react-router-dom';

const navbar = () => {
  return (
    <div className="navbar">
        <nav className="navbar_links">
          <ul>
            <li>
              <Link className='link' to='/'>Home</Link>
            </li>
            <li>
              <Link className='link' to='/my_files'>Home</Link>
            </li>
          </ul>
        </nav>
      </div>
  )
}

export default navbar