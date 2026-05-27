import React from 'react'
import "./EditButton.css"

const EditButton = ({onClick}) => {
  return (
    <>
      <button className='edit-btn' onClick={onClick}>✎</button>
    </>
  )
}

export default EditButton
