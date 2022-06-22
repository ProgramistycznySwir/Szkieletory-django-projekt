import React, {useState, useEffect} from 'react'
import Axios from "axios";
import LogIn from './login_screen/LogIn';
import Register from './login_screen/Register'
import Navbar from './Navbar'
import AuthContext from '../contexts/AuthContext'
import RootDirectory from './directory/RootDirectory'

const Home = () => {

  const [profile, setProfile] = useState("")
  const [file, setFile] = useState("")

 /* useEffect(() => {
    Axios.get(`http://localhost:8000/polls/api/dir/${id}`)
      .then(res => setDirectory(res.data));
  }, []);*/

  useEffect(() => {
    Axios.get(`http://localhost:8000/polls/api/profile/${2}`)
      .then(res => setProfile(res.data));
  }, []);

  const test = () => {
    console.log(...profile)
  }
  
  return (
    <div>
      <Navbar></Navbar>
      <RootDirectory folderId={profile.root_directory_id} ></RootDirectory> {/*może do poprawy*/}
      <button onClick={test}>test</button>
    </div>

  )
}

export default Home
