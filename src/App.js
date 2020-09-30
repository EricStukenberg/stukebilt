import React from 'react';
import Homepage from './containers/Homepage.js';
import Properties from './containers/Properties.js';
import NavBar from '../components/NavBar.js'
import { Router, Route, Switch } from "react-router";
import { useHistory } from 'react-router-dom';

const App = () => {
  state = {
    selected: 'home'
  }

  return (
    <div >
      <NavBar />
      <Router>
        <Switch>
          <Route exact path='/' >
            <Homepage></Homepage>
          </Route>
          <Route exact path='/properties' >
            <Properties></Properties>
          </Route>
        </Switch>
      </Router>
       
    </div>
  );
}

export default App;
