import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import Navbar from './Navbar'

const User = () => {
    const { id } = useParams();
    const [user, setUser] = useState([]); 
    const [firstName, setFirstName] = useState("")
    const [lastName, setLasttName] = useState("")

    useEffect(() => {
        Axios.get(`http://127.0.0.1:8000/polls/api/profile/${id}`)
            .then(res => setUser(res.data));
    }, []);

    const editData = () => {
        Axios.put(`http://127.0.0.1:8000/polls/api/profile/${id}`, {
            first_name: firstName,
            last_name: lastName
        }).then(response => {
            console.log(response)
        })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className='element'>
                <p className='listFirstLine'>username: {user.username}</p>
                <p className='listSmallerText'>email: {user.email}</p>
                <p className='listSmallerText'>joined: {user.date_joined} KB</p>
                <hr/>
                <p className='listSmallerText'>is staff: {user.is_staff} KB</p>
                <p className='listSmallerText'>is active: {user.is_active} KB</p>
                <hr/>
                <p className='listFirstLine'>Personal data:</p>
                <p className='listSmallerText'>First name: {firstName}</p>
                <p className='listSmallerText'>email: {lastName}</p>
                <hr/>
                <span className='center'><input type="text" name="firstname" placeholder="firstname" onChange={(e) => { setFirstName(e.target.value) }} /></span>
                <span className='center'><input type="email" name="lastname" placeholder="lastname" onChange={(e) => { setLasttName(e.target.value) }} /></span>
                <span className='center'><button className='loginBtn' onClick={editData}>Login</button></span>
            </div>
        </div>
    )
}

export default User