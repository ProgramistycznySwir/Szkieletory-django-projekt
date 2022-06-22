import React from 'react'
import { Link } from 'react-router-dom';

const ElementFile = (props) => {

  const { id, name, type, size, parent_directory } = props

  return (
    <div className='element'>
      <Link to={`/file/${id}`}>
        <p className='listFirstLine'>{name}</p>
        <p className='listSmallerText'>type: {type}</p>
        <p className='listSmallerText'>size: {size} KB</p>
      </Link>
    </div>
  )
}

export default ElementFile