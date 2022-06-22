import React from 'react'
import { Link } from 'react-router-dom';


const ElementDir = (props) => {

 const {id, name, content_size, parent_directory} = props

  return (
    <div className='element'>
      <Link to={`/directory/${id}`}>
        <p className='listFirstLine'>{name}</p>
        <p className='listSmallerText'>{content_size} files and folders</p>
      </Link>
    </div>
  )
}

export default ElementDir