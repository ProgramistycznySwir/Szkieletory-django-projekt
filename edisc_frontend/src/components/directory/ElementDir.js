import React from 'react'
import { Link } from 'react-router-dom';


const ElementDir = (props) => {

 const {id, name, content_size, parent_directory} = props

  return (
    <div className='element'>
      <Link to={`/Directory/${id}`}>
        <h1>{name}</h1>
        <h1>{content_size}</h1>
      </Link>
    </div>
  )
}

export default ElementDir