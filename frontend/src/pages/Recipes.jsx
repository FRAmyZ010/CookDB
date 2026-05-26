import { useEffect, useState } from "react";

import RecipesListCard from "../components/RecipesListCard";
import AddButton from "../components/Button/AddButton";

import "./Recipes.css";

function Recipes() {
  const url = "http://localhost:3000";

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const response = await fetch(`${url}/recipes`);
        const data = await response.json();

        setRecipes(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchRecipes();
  }, []);
  return (
    <>
      <div className="recipes-head">
        <p></p>
        <p className="title">YOUR RECIPES</p>
        <AddButton />
      </div>

      <div className="recipes-container">
        <div className="recipes-row">
          {recipes.map((recipe) => (
            <RecipesListCard key={recipe.id} recipesData={recipe} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Recipes;
