import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import history from './history';

const ErrorPage = ({ match }) => {

  const [searchValue, setSearchValue] = useState('');
  const [displayed, setDisplayed] = useState(match.params.otherthing);



  const updateSearch = e => {
    setSearchValue(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    if (searchValue !== '') {
      history.push(`/search/${searchValue}`);
      setSearchValue('');
      setDisplayed(searchValue);
      window.location.reload();
    }
  }
  return (
    <div className='ErrorPage'>
      <nav className='home-nav'>Just the Recipe</nav>
      <div className='errorText'>Unfortunately, we could not find a recipe for {displayed}. Please search for a different kind of recipe.</div>
      <form onSubmit={getSearch} className='search-form-home' >
        <input className='search-bar' type='text' value={searchValue} onChange={updateSearch} />
        <button className='search-button' type='submit' style={{ border: 'transparent', verticalAlign: 'middle' }}>
          Search
        </button>
      </form>
      <div className='foot'>
      </div>
    </div>

  )

};

export default ErrorPage;
