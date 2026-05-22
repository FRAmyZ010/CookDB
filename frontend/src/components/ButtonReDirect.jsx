import React from 'react'
import "./ButtonReDirect.css"
import { useNavigate } from "react-router-dom";

const ButtonReDirect = () => {
  const navigate = useNavigate();
  return (
    <>
        <button className='button' onClick={()=>navigate("/recipes-info")}>CLICK</button> 
    </>
  )
}

export default ButtonReDirect
