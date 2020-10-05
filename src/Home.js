import React, { useEffect, useState } from 'react';
import './App.css';
import history from './history';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'




const Home = () => {

  const [search, setSearch] = useState('')


  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    if (search !== '') {
      history.push(`/search/${search}`);
      setSearch('');
      window.location.reload();
    }
  }


  return (
    <div className='Home'>
      <nav className='home-nav'>Just the Recipe</nav>
      <form onSubmit={getSearch} className='search-form-home' >
        <input className='search-bar' type='text' value={search} onChange={updateSearch} />
        <button className='search-button' type='submit' style={{ border: 'transparent', transform: 'translateY(-2px)' }}>
          Search
        </button>
      </form>
      <div className='foot'>
        <div style={{ padding: '2px' }}>
          Developed by Kellar Elliott
        </div>
        <div>
          <span>
            <a href='https://github.com/kellarelliott'><FontAwesomeIcon icon={faGithubSquare} size='2x' className='icon' /></a>
            <a href='https://www.linkedin.com/in/kellar-elliott/'><FontAwesomeIcon icon={faLinkedin} size='2x' className='icon' /></a></span>
        </div>
      </div>
    </div>
  );
};
export default Home;
