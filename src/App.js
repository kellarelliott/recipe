import React, { useState, useEffect } from 'react';
import './App.css';
import history from './history';
import Ingredients from './Ingredients';
import Home from './Home';
import Search from './Search';
import ErrorPage from './ErrorPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



const App = () => {

  const [search, setSearch] = useState('');

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
    <Router>
      <div className='App'>
        <Switch>
          <Route path={"/"} exact component={Home} />
          <Route path={"/search/:thing"} exact component={Search} />
          <Route path={"/error"} exact component={ErrorPage} />

        </Switch>
      </div>
    </Router>
  );
};
export default App;
