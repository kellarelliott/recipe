import React, { useState, useEffect } from 'react';


function Ingredients({ match }) {

  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetchIngredients();
  }, []);

  const fetchIngredients = async () => {
    const fetchIngredients = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${match.params.id}`)
    const ingredients = await fetchIngredients.json();
    setIngredients(ingredients.recipe.ingredients);
    console.log(ingredients);

  }

  return (
    <div>
      {ingredients.map(ingredient => (
        <li>{ingredient}</li>
      ))};
    </div>
  );
}
export default Ingredients;
