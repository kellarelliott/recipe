import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';



const Recipe = ({ label, image, id }) => {


  return (

    <div className='recipe'>
      <img className='img' src={image} alt="" />
      <p>{label}</p>
      <Link to={`/${id}`}>
        <button className='view-button'>View Recipe</button>
      </Link>
    </div>
  )
}

export default Recipe;
