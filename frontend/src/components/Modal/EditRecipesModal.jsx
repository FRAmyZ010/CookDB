import React from "react";
import { useState, useEffect } from "react";

import "./EditRecipesModal.css";

const EditRecipesModal = ({ onClose, recipe }) => {

    console.log(recipe)
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [servings, setServings] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (recipe) {
      setName(recipe.name || "");
      setTime(recipe.cook_time || "");
      setServings(recipe.servings || "");
      setIngredients(recipe.ingredients || "");
      setInstructions(recipe.instructions || "");
    }
  }, [recipe]);

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
      if (image){
        formData.append("image", image);
      }
      formData.append("old_image",recipe.image_url)
      

      // API POST

      const response = await fetch(
        `http://localhost:3000/recipes/${recipe.id}`,
        {
          method: "PUT",
          body: formData,
        },
      );

      const data = await response.json();

      console.log(data);
      alert("Recipes Updated");

      if (response.ok) {
        onClose();
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <div className="addPopUp">
        <div className="popup-container">
          <div className="popup-head">
            <p></p>
            <h1>EDIT RECIPES</h1>
            <button className="closeBtn" onClick={onClose}>
              X
            </button>
          </div>
          <div className="form-container">
            <form onSubmit={saveData}>
              <label htmlFor="">
                Name <span title="Enter your recipe's name.">ⓘ</span>
              </label>
              <input
                value={name}
                type="text"
                name="name"
                id=""
                onChange={(e) => setName(e.target.value)}
                required
              />

              <label htmlFor="">Time</label>
              <input
                value={time}
                type="text"
                name="time"
                id=""
                onChange={(e) => setTime(e.target.value)}
                required
              />

              <label htmlFor="">Serving</label>
              <input
                value={servings}
                type="text"
                name="serving"
                id=""
                onChange={(e) => setServings(e.target.value)}
                required
              />

              <label htmlFor="">Ingredients</label>
              <textarea
                value={ingredients}
                type="text"
                name="ingredients"
                id=""
                onChange={(e) => setIngredients(e.target.value)}
                required
              />

              <label htmlFor="">Instructions</label>
              <textarea
                value={instructions}
                type="text"
                name="instructions"
                id=""
                onChange={(e) => setInstructions(e.target.value)}
                required
              />

              <label htmlFor="">Image</label>
              <input
                type="file"
                name=""
                id=""
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                
              />

              <button
                type="submit"
                disabled={
                  name.trim() === "" ||
                  time.trim() === "" ||
                  servings=== null ||
                  ingredients.trim() === "" ||
                  instructions.trim() === ""
                }
              >
                SAVE
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditRecipesModal;
