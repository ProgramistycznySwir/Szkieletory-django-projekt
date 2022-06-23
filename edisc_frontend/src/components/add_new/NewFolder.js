import React, { useState, useEffect, useContext } from 'react'
import Axios from "axios";

const NewFolder = (props) => {

  const [name, setName] = useState("")

  const folder_id = props.folderId

  const addFolder = () => {
    Axios.post("http://localhost:8000/polls/api/dir/", [{
      name: name,
      parent_directory_id: folder_id,
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
          <span className='center'><button className='loginBtn' onClick={addFolder}>Add</button></span>
        </div>
      </div>
    </div>
  )
}

export default NewFolder