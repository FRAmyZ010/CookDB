import { useEffect, useState } from "react";

import RecipesListCard from "../components/RecipesListCard"

import "./Recipes.css";

function Recipes() {

  const url = "http://localhost:3000"
  
    const [recipes, setRecipes] = useState([]);
  
    useEffect(()=>{
      async function fetchRecipes(){
        try{
          const response = await fetch(`${url}/recipes`);
          const data = await response.json();
  
          setRecipes(data);
        }catch (error){
          console.log(error);
        }
      }
      fetchRecipes();
    },[])
  return (
    <>
      <p className="title">YOUR RECIPES</p>
      <div className="container">
        <div className="row">
          
            {recipes.map((recipe)=>(
              <RecipesListCard key={recipe.id} recipesData={recipe}/>
            ))}
            

        </div>
      </div>
    </>
  );
}

export default Recipes;
