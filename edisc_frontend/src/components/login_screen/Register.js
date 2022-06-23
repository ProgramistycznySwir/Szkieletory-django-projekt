import React, {useState,useEffect, useContext} from 'react'
import { useHistory } from 'react-router-dom';
import Axios from "axios";
import { DefaultAxios } from '../../defaultAxios';

const Register = () => {
	const history = useHistory();

  const [username, setUsername] = useState("")
  const [password, setPassowrd] = useState("")
  const [email, setUEmail] = useState("")

  const register = () => {
    // console.log
    // Axios.post(`http://127.0.0.1:8000/polls/register/`, {
    //   username: username,
    //   password: password,
    //   email: email,
    // })
    Axios.post(`http://localhost:8000/polls/register/`, {
      username: username,
      password: password,
      email: email,
    }) 
      .then((res) => {
      history.push('/login');
      console.log(res);
      console.log(res.data);
    });
  }

  return (
    <div className='center'>
      <div className='login'>
        <div>
          <span className='center'><input type="text" name="username" placeholder="Username" onChange={(e) => { setUsername(e.target.value) }} /></span>
          <span className='center'><input type="email" name="email" placeholder="Email" onChange={(e) => { setUEmail(e.target.value) }} /></span>
          <span className='center'><input type="password" name="password" placeholder="Password" onChange={(e) => { setPassowrd(e.target.value) }} /></span>
          <span className='center'><button className='loginBtn' onClick={register}>Register</button></span>
        </div>
      </div>
    </div>
  )
}

export default Register