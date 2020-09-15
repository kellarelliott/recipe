import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';




const App = () => {

  const API_KEY = process.env.REACT_APP_EDAMAM_API_KEY;
  const APP_ID = process.env.REACT_APP_EDAMAM_APP_ID;

  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    getRecipes()
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${API_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);

  }

  return (
    <div className='App'>
      <form className='search-form'>
        <input className='search-bar' type='text' />
        <button className='search-button' type='submit'>
          Search
        </button>
      </form>
      {recipes.map(recipe => (
        <Recipe />
      ))}
    </div>
  );
};

export default App;
