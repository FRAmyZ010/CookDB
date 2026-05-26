import "./RecipesListCard.css";
import ButtonReDirect from "./Button/ButtonReDirect"


function RecipesListCard({recipesData}) {
  return (
    <>
      <div className="recipes-card-container">

          <img src={`/img/${recipesData.image_url}`} alt={recipesData.name} />
          <div className="content">
            <p>Name: {recipesData.name}</p>
          <p>Time: {recipesData.cook_time}</p>
          <p>Servings: {recipesData.servings}</p>
          </div>
          

          <ButtonReDirect id={recipesData.id}/>

      </div>
    </>
  );
}

export default RecipesListCard;
