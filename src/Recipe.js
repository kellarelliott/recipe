import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';



const Recipe = ({ label, image, id, url }) => {


  return (

    <div className='recipe'>
      <img className='img' src={image} alt="" />
      <p className='label'>{label}</p>
      <a href={url}>
        <button className='view-button'>View Recipe</button>
      </a>
    </div>
  )
}

export default Recipe;
