import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import Navbar from './Navbar'

const User = () => {
    const { id } = useParams();
    const [user, setUser] = useState([]); 

    useEffect(() => {
        Axios.get(`http://127.0.0.1:8000/polls/api/profile/${id}`)
            .then(res => setUser(res.data));
    }, []);
    
    return (
        <div>
            <Navbar></Navbar>
            <div>User</div>
        </div>
    )
}

export default User