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
              <button className="closeBtn" onClick={() => setAdd(false)}>X</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddButton;
