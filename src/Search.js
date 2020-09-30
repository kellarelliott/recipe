import React, { useEffect, useState } from 'react';
import './App.css'
import Recipe from './Recipe';
import history from './history';
import Masonry from 'react-masonry-css';

const Search = ({ match }) => {

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState(match.params.thing)


  const getRecipes = async () => {
    const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${query}`)
    const data = await response.json();
    setRecipes(data.recipes);
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

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <div className='Search'>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {recipes.map(recipe => (
          <React.Fragment key={recipe.recipe_id}>
            <Recipe
              id={recipe.recipe_id}
              label={recipe.title}
              image={recipe.image_url}
            />
          </React.Fragment>
        ))}
      </Masonry>

    </div>
  )
};


export default Search;
