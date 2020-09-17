import React from 'react';
import style from './recipe.module.css'
const Recipe = ({ label, ingredients, image }) => {
  return (
    <div className={style.recipe}>
      <h1>{label}</h1>
      <ol>
        {ingredients.map(ingredient => (
          <li className={style.ingredients}>{ingredient.text}</li>
        ))}
      </ol>
      <img className={style.img} src={image} alt="" />
    </div>
  )
}

export default Recipe;
