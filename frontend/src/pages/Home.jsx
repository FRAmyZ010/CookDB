import "./Home.css";

import { useEffect, useState } from "react";

import RecipesCard from "../components/RecipesCard";

function Home() {
  const url = "http://localhost:3000";

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const response = await fetch(`${url}/recipes/latest/show`);
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
      <p className="title">YOUR LATEST RECIPES</p>
      <div className="home-container">
        <div className="row">
          {recipes.map((recipe) => (
            <RecipesCard key={recipe.id} recipesData={recipe} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
