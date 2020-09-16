import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';




const App = () => {

  const API_KEY = process.env.REACT_APP_EDAMAM_API_KEY;
  const APP_ID = process.env.REACT_APP_EDAMAM_APP_ID;

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('')

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`, { mode: 'no-cors' })
    const data = await response.json();
    setRecipes(data.hits);
  }

  useEffect(() => {
    getRecipes()
  }, [query]);



  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className='App'>
      <form onSubmit={getSearch} className='search-form'>
        <input className='search-bar' type='text' value={search} onChange={updateSearch} />
        <button className='search-button' type='submit'>
          Search
        </button>
      </form>
      {recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.label}
          label={recipe.recipe.label}
          ingredients={recipe.recipe.ingredients}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  );
};
export default App;
