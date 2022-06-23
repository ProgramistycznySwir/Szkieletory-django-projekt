import React, { useState, useEffect, useContext } from 'react'
import Axios from "axios";

const NewFile = (props) => {

  const [file, setFile] = useState(null)

  const folder_id = props.folderId

  const addFile = () => {

    const formData = new FormData()

    formData.append(
      "myFile",
      file,
      file.name
    )

    Axios.post("http://localhost:8000/polls/api/file/", formData)
  }

  return (
    <div className='center'>
      {/* */}
      <div className='login'>
        <div>
          <span className='center'><input type="file" name="upload_file" onChange={(e) => { setFile(e.target.files[0]) }} /></span>
          <span className='center'><button className='loginBtn'>Upload</button></span>
        </div>
      </div>
    </div>
  )
}

export default NewFile