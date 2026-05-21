import "./RecipesCard.css";


function RecipesCard(recipesData) {
  return (
    <>
      <div className="card-container">
        <div className="card">
          <img src={`/img/${recipesData.image_url}`} alt={recipesData.name} />
          <p>Name: {recipesData.name}</p>
          <p>Time: {recipesData.cook_time}</p>
          <p>Servings: {recipesData.servings}</p>
        </div>
      </div>
    </>
  );
}

export default RecipesCard;
