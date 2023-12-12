import React, { useEffect, useState } from "react";
import { fetchRecipesById } from "../../utils/Api";
import { Link, useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import './RecipeDetail.scss'

function RecipeDetail() {
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchRecipesData = async () => {
      try {
        const data = await fetchRecipesById(id);
        // const data = await fetchRecipesById(22)
        setRecipe(data);
        setLoading(false);
      } catch {
        setLoading(false);
      }
    };
    fetchRecipesData();
  }, [id]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="details">
          <Link to={"/"}>Go Back</Link>
          <div className="header1">
            <h3> {recipe.title} </h3>
            <button className="favBtn">+ Add to Favorites</button>
          </div>
          <div className="content">
            <img className="img" src={recipe.image} alt={recipe.title} />
            <div className="recipeInfo">
              <span className="tag level">{recipe.level} </span>
              <span className="tag time">{recipe.time} </span>
              <span className="tag veg">
                {recipe.isVeg ? "veg" : "non-veg"}{" "}
              </span>
            </div>
            <div className="tags" >
                {recipe.ingredients.map((ingredient, index)=>(
                    <span key={index} className="ingredient" > {ingredient} </span>
                ))}
            </div>
            <h3>Instructions</h3>
            <ol>
            {recipe.instructions.map((instruction, index)=>(
                    <li key={index} className="instruction" > {instruction} </li>
                ))}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
}

export default RecipeDetail;
