import React, { useEffect, useState } from 'react';
import './App.css';




const App = () => {

  const API_KEY = process.env.REACT_APP_EDAMAM_API_KEY;
  const API_ID = process.env.REACT_APP_EDAMAM_APP_ID;

  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log('Effect has been run');
  }, []);

  return (
    <div className='App'>
      <form className='search-form'>
        <input className='search-bar' type='text' />
        <button className='search-button' type='submit'>
          Search
        </button>
      </form>
      <h1 onClick={() => setCounter(counter + 1)} >{counter}</h1>
    </div>
  );
};

export default App;
