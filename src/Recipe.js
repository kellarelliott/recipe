import React from 'react';

const Recipe = ({ label, ingredients, image }) => {
  return (
    <div>
      <h1>{label}</h1>
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <img src={image} alt="" />
    </div>
  )
}

export default Recipe;
