import React, {useState, useEffect} from 'react'
import Axios from "axios";
import LogIn from './login_screen/LogIn';
import Register from './login_screen/Register'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <h2>Welcome to the home page</h2>
    </div>

  )
}

export default Home