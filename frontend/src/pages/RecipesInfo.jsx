import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import RecipesListCard from "../components/RecipesListCard";
import ReturnButton from "../components/Button/ReturnButton"
import EditButton from "../components/Button/EditButton"
import EditRecipesModal from "../components/Modal/EditRecipesModal";
import DeleteBtn from "../components/Button/DeleteBtn";

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

  console.log(recipes);

  const [edit, setEdit] = useState(false)

  return (
    <>
      <div className="info-card">
        <div className="info-col-left">
            <ReturnButton/>
          <img
            src={`/img/${recipes[0]?.image_url}`}
            className="infoImg"
            alt=""
          />
          <p className="infoText">{`Name: ${recipes[0]?.name}`}</p>
          <p>{`Cook Time: ${recipes[0]?.cook_time}`}</p>
          <p>{`Portion: ${recipes[0]?.servings}`}</p>
          <div className="lower-btn">
            <EditButton onClick={()=>setEdit(true)}/>
            <DeleteBtn id={id}/>
          </div> 
        </div>

        <div className="info-col-right">
          <div className="ingredients">
            <h3>Ingredients |</h3>
            <ul className="ingredients-list">
              {recipes[0]?.ingredients?.split("\n").map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="instructions">
            <h3>Instructions |</h3>
            <ul className="instructions-list">
              {recipes[0]?.instructions?.split("\n").map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {edit&&
        <EditRecipesModal 
          onClose={()=>setEdit(false)}
          recipe={recipes[0]}
        />
      }
    </>
  );
};

export default RecipesInfo;
