import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

const File = () => {

  const id = useParams

  const del = () => {
    Axios.delete(`http://localhost:8000/polls/api/file/${id}`)
  }

  return (
    <div>
      <div className="btn_bar">
        <nav className="btn_bar_links">
          <ul>
            <li>
              <button className='chooseBtn' onClick={del}>Delete</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default File