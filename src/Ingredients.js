import React, { useState, useEffect } from 'react';


function Ingredients({ match }) {

  const [recipe, setRecipe] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  useEffect(() => {
    fetchIngredients();
  }, []);

  const fetchIngredients = async () => {
    const fetchIngredients = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${match.params.id}`)
    const recipe = await fetchIngredients.json();
    setRecipe(recipe.recipe);
    setIngredients(recipe.recipe.ingredients);
    console.log(recipe.recipe)

  }

  return (
    <div className='Ingredients'>
      <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'white', width: '50%' }}>
        <div style={{ alignSelf: 'center' }}>{recipe.title}</div>
        {ingredients.map(ingredient => (
          <li>{ingredient}</li>
        ))}
        <div >
          <img src={recipe.image_url} style={{ height: '70%', width: '70%' }} />
        </div>
      </div>

    </div>
  );
}
export default Ingredients;
