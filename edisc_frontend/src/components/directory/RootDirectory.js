import React, { useState, useEffect } from 'react'
import AddNew from '../add_new/AddNew'
import Axios from "axios";
import ElementDir from './ElementDir'


const RootDirectory = (props) => {

  const parentDirectoryId = props.folderId

  const [directory, setDirectory] = useState([])
  const [file, setFile] = useState([])

  useEffect(() => {
    Axios.get(`http://localhost:8000/polls/api/dir/${parentDirectoryId}`)
      .then(res => setDirectory(res.data));
  },[])

  useEffect(() => {
    Axios.get(`http://localhost:8000/polls/api/file/${parentDirectoryId}`)
      .then(res => setFile(res.data));
  }, [])

  const dir_test = () => {
    console.log(...directory)
  }

  const file_test = () => {
    console.log(...file)
  }

  return (
    <div>
      <AddNew></AddNew>
      <div className="center">
      <div className="elementlist">
        {directory.map((directory) => {
          return(<ElementDir key={directory.id} {...directory}></ElementDir>);
        })}
        </div>
      </div>
      {/*<button onClick={dir_test}>directory test</button>
      <button onClick={file_test}>file test</button>*/} 
    </div>
  )
}

export default RootDirectory