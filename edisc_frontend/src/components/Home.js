import React, {useState, useEffect} from 'react'
import Axios from "axios";
import LogIn from './login_screen/LogIn';
import Register from './login_screen/Register'
import Navbar from './Navbar'
import AuthContext from '../contexts/AuthContext'
import Directory from './Directory'

const Home = () => {

  const [user, setProfile] = useState("")
  const [file, setFile] = useState("")

 /* useEffect(() => {
    Axios.get(`http://localhost:8000/polls/api/dir/${id}`)
      .then(res => setDirectory(res.data));
  }, []);*/

  useEffect(() => {
    Axios.get(`http://localhost:8000/polls/api/profile/$`)
      .then(res => setProfile(res.data));
  }, []);

  const test = () => {
    console.log(...file)
  }
  
  return (
    <div>
      <Navbar></Navbar>
      <Directory></Directory>
      <button onClick={test}>test</button>
    </div>

  )
}

export default Home
