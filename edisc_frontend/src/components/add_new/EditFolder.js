import React, { useState, useEffect, useContext } from 'react'
import Axios from "axios";

const EditFolder = (props) => {

    const [name, setName] = useState("new_folder")

    const folder_id = props.folderId

    const editFolder = () => {
        Axios.post(`http://localhost:8000/polls/api/dir/${folder_id}`, [{
            name: name,
        }]).then(response => {
            console.log(response)
        })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className='center'>
            <div className='login'>
                <div>
                    <span className='center'><input type="text" name="folder_name" placeholder="new_folder" onChange={(e) => { setName(e.target.value) }} /></span>
                    <span className='center'><button className='loginBtn' onClick={editFolder}>Edit folder name</button></span>
                </div>
            </div>
        </div>
    )
}

export default EditFolder