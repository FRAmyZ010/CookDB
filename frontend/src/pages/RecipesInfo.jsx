import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import RecipesListCard from "../components/RecipesListCard";

import "./RecipesInfo.css";

const RecipesInfo = () => {
  const { id } = useParams();

  console.log(id);
  

  const url = "http://localhost:3000";

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const response = await fetch(`${url}/recipes/${id}`);
        const data = await response.json();

        setRecipes(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchRecipes();
  }, []);

  console.log(recipes)
  

  return (
    <>
      <div className="info-card">
        <div className="info-col-left">
          <img src={`/img/${recipes[0]?.image_url}` } className="infoImg" alt="" />
          <p>{`Name: ${recipes[0]?.name}`}</p>
          <p>{`Cook Time: ${recipes[0]?.cook_time}`}</p>
          <p>{`Portion: ${recipes[0]?.servings}`}</p>
        </div>

        <div className="info-col-right">
          <div className="ingredients">
            <h2>Ingredients |</h2>
          <p>{recipes[0]?.ingredients}</p>
          </div>
          
          <div className="instructions">
            <h2>Instructions |</h2>
            <p>{recipes[0]?.instructions}</p>
            
          </div>

        </div>
      </div>
    </>
  );
};

export default RecipesInfo;
