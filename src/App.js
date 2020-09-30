import React, { Component } from 'react';
import Homepage from './containers/Homepage.js';
import Properties from './containers/Properties.js';
import NavBar from './components/NavBar.js'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useHistory } from 'react-router-dom';

class App extends Component {
  state = {
    selected: 'home'
  }

  componentDidMount() {


    
  }

  render () {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path='/' >
              <Homepage />
            </Route>
            <Route exact path='/properties' >
              <Properties />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }

}

export default App;
