import React, { useEffect, useState } from 'react';
import './App.css'
import Recipe from './Recipe';
import Masonry from 'react-masonry-css';
import { useHistory } from 'react-router-dom';

const Search = ({ match }) => {

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState(match.params.thing)

  const [locationKeys, setLocationKeys] = useState([])
  const history = useHistory()

  useEffect(() => {

    return history.listen(location => {
      if (history.action === 'PUSH') {
        setLocationKeys([location.key]);
        setQuery(location.pathname.slice(8));
      }

      if (history.action === 'POP') {
        if (locationKeys[1] === location.key) {
          setLocationKeys(([_, ...keys]) => keys);
          setQuery(location.pathname.slice(8));
        } else {
          setLocationKeys((keys) => [location.key, ...keys]);
          setQuery(location.pathname.slice(8));
        }
      }
    })

  }, [locationKeys,])


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
      <nav className='search-nav'>
        <form onSubmit={getSearch} className='search-form' >
          <input className='search-bar' type='text' value={search} onChange={updateSearch} />
          <button className='search-button' type='submit'>
            Search
            </button>
        </form>
      </nav>

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
