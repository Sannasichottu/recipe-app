import React from 'react'
import './RecipesList.scss'
function RecipesList({recipes = []}) {
  return (
    <div className='recipeList'>
     <h3 className='title' >
        Check out these Recipes
     </h3>
     <div className='list' >
        {recipes.map(recipe => (
            
            <div className='cardContainer' > 
                <div className='cardHeader'>
                    {recipe.title}
                </div>
                <div className='recipeInfo'>
                    <span className='tag level'>{recipe.level} </span>
                    <span className='tag time' >{recipe.time} </span>
                    <span  className='tag veg'>{recipe.isVeg ? "veg" : "non-veg" } </span>
                </div>
                <img className='image' 
                    
                src={
                    recipe.image
                }  alt={recipe.title} />
            </div>

        
        ) 
        )}
     </div>
    </div>
  )
}

export default RecipesList
