import React from 'react'
import "./ReturnButton.css"
import {useNavigate} from "react-router-dom"

const ReturnButton = () => {
    const navigate = useNavigate()

    const handleReturn = ()=>{
        navigate(-1)
    }
  return (
    <>
      <button className='return-btn' onClick={handleReturn}>↶</button>
    </>
  )
}

export default ReturnButton
