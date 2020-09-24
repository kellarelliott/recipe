import React, { useEffect, useState } from 'react';
import './App.css'
import Recipe from './Recipe';
import history from './history';
import { Link } from 'react-router-dom';

const Search = ({ match }) => {

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState(match.params.thing)

  const getRecipes = async () => {
    const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${query}`)
    const data = await response.json();
    setRecipes(data.recipes);
    console.log(query);

  }


  useEffect(() => {
    getRecipes()
  }, [query]);


  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    console.log(query);
    setQuery(search);
    setSearch('');
    history.push(`/search/${search}`)
  }

  return (
    <div className='Search'>
      <Link to='/'>
        <button>Home</button>
      </Link>
      <form onSubmit={getSearch} className='search-form'>
        <input className='search-bar' type='text' value={search} onChange={updateSearch} />
        <button className='search-button' type='submit'>
          Search
          </button>
      </form>
      <div className='search-results'>
        {recipes.map(recipe => (
          <React.Fragment key={recipe.recipe_id}>
            <Recipe
              id={recipe.recipe_id}
              label={recipe.title}
              image={recipe.image_url}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  )
};


export default Search;
