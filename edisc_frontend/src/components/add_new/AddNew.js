import Navbar from '../Navbar'
import React, { useState, useEffect } from 'react'
import NewFile from './NewFile'
import NewFolder from './NewFolder'
import EditFolder from './EditFolder'
import Axios from "axios";


const AddNew = (props) => {

  const [active, setActive] = useState("File")

  const folder_id = props.folderId

  const del = () =>{
    Axios.delete(`http://localhost:8000/polls/api/dir/${folder_id}`)
  }


  return (
    <div>
      <div className="btn_bar">
        <nav className="btn_bar_links">
          <ul>
            <li>
            <button className={active === "File" ? 'chooseBtn_clicked' : 'chooseBtn'} onClick={() => setActive("File")}>Add new file</button>
            </li>
            <li>
            <button className={active === "Folder" ? 'chooseBtn_clicked' : 'chooseBtn'} onClick={() => setActive("Folder")}>Add new folder</button>
            </li>
            <li>
              <button className={active === "Edit" ? 'chooseBtn_clicked' : 'chooseBtn'} onClick={() => setActive("Edit")}>Edit name</button>
            </li>
            <li>
              <button className='chooseBtn' onClick={del}>Delete</button>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <div>
          {active === "File" && <NewFile folderId={folder_id}/>}
          {active === "Folder" && <NewFolder folderId={folder_id}/>}
          {active === "Edit" && <EditFolder folderId={folder_id} />}
        </div>
      </div>
    </div>
  )
}

export default AddNew