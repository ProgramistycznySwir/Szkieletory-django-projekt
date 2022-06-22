import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import Axios from "axios";

const Directory = () => {

  const { id } = useParams();
  const [directory, setDirectory] = useState([])
  const [file, setFile] = useState([])

  useEffect(() => {
    Axios.get(`http://localhost:8000/polls/api/dir/${id}`)
      .then(res => setDirectory(res.data));
  }, [])

  useEffect(() => {
    Axios.get(`http://localhost:8000/polls/api/file/${id}`)
      .then(res => setFile(res.data));
  }, [])


  return (
    <div>
      <AddNew></AddNew>
      <h1>Folders</h1>
      <div className="center">
        <div className="elementlist">
          {directory.map((directory) => {
            return (<ElementDir key={directory.id} {...directory}></ElementDir>);
          })}
        </div>
      </div>
      <h1>Files</h1>
      <div className="center">
        <div className="elementlist">
          {file.map((file) => {
            return (<ElementFile key={file.id} {...file}></ElementFile>);
          })}
        </div>
      </div>
    </div>
  )
}

export default Directory