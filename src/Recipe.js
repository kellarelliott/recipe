import React from 'react';
import style from './recipe.module.css'
import { Link } from 'react-router-dom';



const Recipe = ({ label, image, id }) => {


  return (

    <div className={style.recipe}>
      <Link to={`/${id}`}>
        <img className={style.img} src={image} alt="" />
      </Link>


    </div>
  )
}

export default Recipe;
