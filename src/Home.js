import React, { useEffect, useState } from 'react';
import './App.css';
import history from './history';


const Home = () => {

  const [search, setSearch] = useState('')


  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    history.push(`/search/${search}`);
    setSearch('');
    window.location.reload();
  }


  return (
    <div className='Home'>
      <nav>Just the Recipe</nav>
      <form onSubmit={getSearch} className='search-form' >
        <input className='search-bar' type='text' value={search} onChange={updateSearch} />
        <button className='search-button' type='submit'>
          Search
          </button>
      </form>
      <div className='foot'>Sup</div>
    </div>
  );
};
export default Home;
