import React from 'react'
import "./DeleteBtn.css"
import { useNavigate } from "react-router-dom";

const DeleteBtn = ({id}) => {

    const url = "http://localhost:3000"
    const navigate = useNavigate();

    const handleDelete = async () => {
    try {
      const confirmDelete = window.confirm("Delete this recipe?");
      if (!confirmDelete) return;

      const res = await fetch(`${url}/recipes/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();
      console.log(data);

      alert("Deleted!");

      // optional: update UI without reload
      if (onDeleted) {
        onDeleted(id);
      } else {
        window.location.reload();
      }

      navigate(-2);
    } catch (err) {
      console.log(err);
    }
}

    
  return (
    <>
     <button className='del-btn' onClick={handleDelete}>X</button> 
    </>
  )
}

export default DeleteBtn
