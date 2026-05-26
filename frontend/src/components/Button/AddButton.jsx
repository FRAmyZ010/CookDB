import React from "react";
import "./AddButton.css";

import { useEffect, useState } from "react";

const AddButton = () => {
  const [add, setAdd] = useState(false);

  return (
    <>
      <button className="addBtn" onClick={() => setAdd(true)}>
        +
      </button>

      {add && (
        <div className="addPopUp">
          <div className="popup-container">
            <div className="popup-head">
              <p></p>
              <h1>ADD NEW RECIPES</h1>
              <button className="closeBtn" onClick={() => setAdd(false)}>
                X
              </button>
            </div>
            <div className="form-container">
              <form>
                <label htmlFor="">Name</label>
                <input type="text" name="name" id="" />

                <label htmlFor="">Time</label>
                <input type="text" name="time" id="" />

                <label htmlFor="">Serving</label>
                <input type="text" name="serving" id="" />

                <label htmlFor="">Ingredients</label>
                <input type="text" name="ingredients" id="" />

                <label htmlFor="">Instructions</label>
                <input type="text" name="instructions" id="" />

                <label htmlFor="">Image</label>
                <input type="file" name="" id="" accept="image/*"/>

                <button type="submit">SAVE</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddButton;
