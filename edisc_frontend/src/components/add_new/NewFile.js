import React, { useState, useEffect, useContext } from 'react'
import Axios from "axios";

const NewFile = (props) => {

  const [file, setFile] = useState(null)

  const folder_id = props.folderId

 /* const addFile = () => {
    Axios.post("http://localhost:8000/polls/api/file/, {

    }
  }*/

  return (
    <div className='center'>
      {/* */}
      <div className='login'>
        <div>
          <span className='center'><input type="file" name="upload_file" onChange={(e) => { setFile(e.target.value) }} /></span>
          <span className='center'><button className='loginBtn'>Upload</button></span>
        </div>
      </div>
    </div>
  )
}

export default NewFile