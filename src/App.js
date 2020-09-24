import React from 'react';
import './App.css';
import Ingredients from './Ingredients';
import Home from './Home';
import Search from './Search';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



const App = () => {

  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path={"/"} exact component={Home} />
          <Route path={"/search/:thing"} exact component={Search} />
          <Route path={"/:id"} exact component={Ingredients} />
        </Switch>
      </div>
    </Router>
  );
};
export default App;
