import React from "react";
import "./AddButton.css";

import { useEffect, useState } from "react";
import { FaRegQuestionCircle } from "react-icons/fa";

const AddButton = () => {
  const [add, setAdd] = useState(false);

  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [servings, setServings] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [image, setImage] = useState(null);

  async function saveData(e) {
    e.preventDefault();

    try {
      // create FormData
      const formData = new FormData();

      // append
      formData.append("name", name);
      formData.append("cook_time", time);
      formData.append("servings", servings);
      formData.append("ingredients", ingredients);
      formData.append("instructions", instructions);
      formData.append("image", image);

      // API POST

      const response = await fetch("http://localhost:3000/recipes", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      console.log(data);
      alert("Recipes Added!");

      if (response.ok) {
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  }

  const resetForm = () => {
    setName("");
    setTime("");
    setServings("");
    setIngredients("");
    setInstructions("");
    setImage(null);
  };

  return (
    <>
      <button className="addBtn" onClick={() => setAdd(true)}>
        +
      </button>

      {add && (
        <div className="addPopUp">
          <div className="add-popup-container">
            <div className="add-popup-head">
              <p></p>
              <h1>ADD NEW RECIPES</h1>
              <button
                className="closeBtn"
                onClick={() => {
                  resetForm();
                  setAdd(false);
                }}
              >
                X
              </button>
            </div>
            <div className="add-form-container">
              <form onSubmit={saveData}>
                <label htmlFor="">
                  Name{" "}
                  <span title="Enter your recipe's name.">
                    &nbsp; <FaRegQuestionCircle />
                  </span>
                </label>
                <input
                  value={name}
                  type="text"
                  name="name"
                  id=""
                  onChange={(e) => setName(e.target.value)}
                  required
                />

                <label htmlFor="">
                  Time
                  <span title="Enter your recipe's name.">
                    &nbsp; <FaRegQuestionCircle />
                  </span>
                </label>
                <input
                  value={time}
                  type="text"
                  name="time"
                  id=""
                  onChange={(e) => setTime(e.target.value)}
                  required
                />

                <label htmlFor="">
                  Serving
                  <span title="Enter your recipe's name.">
                    &nbsp; <FaRegQuestionCircle />
                  </span>
                </label>
                <input
                  value={servings}
                  type="text"
                  name="serving"
                  id=""
                  onChange={(e) => setServings(e.target.value)}
                  required
                />

                <label htmlFor="">
                  Ingredients
                  <span title="Enter your recipe's name.">
                    &nbsp; <FaRegQuestionCircle />
                  </span>
                </label>
                <textarea
                  value={ingredients}
                  type="text"
                  name="ingredients"
                  id=""
                  onChange={(e) => setIngredients(e.target.value)}
                  required
                />

                <label htmlFor="">
                  Instructions
                  <span title="Enter your recipe's name.">
                    &nbsp; <FaRegQuestionCircle />
                  </span>
                </label>
                <textarea
                  value={instructions}
                  type="text"
                  name="instructions"
                  id=""
                  onChange={(e) => setInstructions(e.target.value)}
                  required
                />

                <label htmlFor="">
                  Image
                  <span title="Enter your recipe's name.">
                    &nbsp; <FaRegQuestionCircle />
                  </span>
                </label>
                <input
                  type="file"
                  name=""
                  id=""
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0])}
                  required
                />

                <button
                  type="submit"
                  disabled={
                    name.trim() === "" ||
                    time.trim() === "" ||
                    servings.trim() === "" ||
                    ingredients.trim() === "" ||
                    instructions.trim() === "" ||
                    image === null
                  }
                  className="add-submit-btn"
                >
                  SAVE
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddButton;
