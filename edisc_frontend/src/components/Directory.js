import React, { useState, useEffect } from 'react'
import Add_new from './add_new/Add_new'
import Axios from "axios";


const Directory = () => {

  const [directory, setDirectory] = useState("")
  const [file, setFile] = useState("")

  useEffect(() => {
    Axios.get(`http://localhost:8000/polls/api/dir/`)
      .then(res => setDirectory(res.data));
  },[])

  useEffect(() => {
    Axios.get(`http://localhost:8000/polls/api/file/`)
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
      <Add_new/>
      {/*<button onClick={dir_test}>directory test</button>
      <button onClick={file_test}>file test</button>*/} 
      
    </div>
  )
}

export default Directory