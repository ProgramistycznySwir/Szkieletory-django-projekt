import React, {useState, useEffect} from 'react'
import Axios from "axios";
import LogIn from './login_screen/LogIn';
import Register from './login_screen/Register'
import Navbar from './Navbar'
import AuthContext from '../contexts/AuthContext'
import Directory from './Directory'

const Home = () => {

  const [user, setUser] = useState("")

 /* useEffect(() => {
    Axios.get(`http://localhost:8000/polls/api/dir/${id}`)
      .then(res => setDirectory(res.data));
  }, []);*/

  return (
    <div>
      <Navbar></Navbar>
      <Directory></Directory>
    </div>

  )
}

export default Home