import Navbar from '../Navbar'
import React, { useState, useEffect } from 'react'
import NewFile from './NewFile'
import NewFolder from './NewFolder'

const AddNew = () => {

  const [active, setActive] = useState("")

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
            </ul>
          </nav>
        </div>
      <div>
        <div>
          {active === "File" && <NewFile/>}
          {active === "Folder" && <NewFolder/>}
        </div>
      </div>
    </div>
  )
}

export default AddNew