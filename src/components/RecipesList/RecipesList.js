import React, { useEffect, useState } from "react";
import "./RecipesList.scss";
import { Link } from "react-router-dom";
function RecipesList({ recipes = [] }) {

  const [filteredData, setFilteredData] = useState(recipes)

  useEffect(() => {
    setFilteredData(recipes)
  },[recipes])

    const checkForRecipes = () => {
        if (filteredData.length === 0)
          return <div className="noRecipes" >No Recipes Found, search for the different item</div>
        else 
           return renderList()
        
    }


  const renderList = () => {
    return (
      <div className="list">
        {filteredData.map((recipe) => (
          <Link to={`/recipe/${recipe.id}`}>
            <div className="cardContainer">
              <div className="cardHeader">{recipe.title}</div>
              <div className="recipeInfo">
                <span className="tag level">{recipe.level} </span>
                <span className="tag time">{recipe.time} </span>
                <span className="tag veg">
                  {recipe.isVeg ? "veg" : "non-veg"}{" "}
                </span>
              </div>
              <img className="image" src={recipe.image} alt={recipe.title} />
            </div>
          </Link>
        ))}
      </div>
    );
  };

  const handleFilter = (event) => {
    const value = event.target.value
    if(value === ''){
      setFilteredData(recipes)
    }
    else{
      const filtered = recipes.filter((recipe) => {
        if(value === 'veg') {
          return recipe.isVeg
        }else if(value === 'non-veg'){
          return !recipe.isVeg
        }else {
          return recipe.level === value
        }
      });
      setFilteredData(filtered)
    }
  }

  return (
    <div className="recipeList">
      <div className="recipeHeader">
      <h3 className="title">Check out these Recipes</h3>
      <select onChange={handleFilter} name="filter" id="filter" >
        <option value="" >All</option>
        <option value="veg">Veg</option>
        <option value="non-veg">Non Veg</option>
        <option value="easy">Easy</option>
        <option value='medium'>Medium</option>
        <option value='hard'>Hard</option>
        
      </select>

      </div>
      {checkForRecipes()}
    </div>
  );
}

export default RecipesList;
