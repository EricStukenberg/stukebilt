import React, { Component } from 'react';
import Homepage from './containers/Homepage.js';
import Properties from './containers/Properties.js';
import NavBar from './components/NavBar.js'
import Footer from './components/Footer.js'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useHistory } from 'react-router-dom';

class App extends Component {
  state = {
    selected: 'home'
  }

  componentDidMount() {
    
  }

  handleNavClick = (selected) => {
    console.log(selected)
    // this.setState({
    //   selected: selected
    // });
  }
  render () {
    return (
      <div>
        <BrowserRouter>
          <NavBar selectItem={this.handleNavClick} selected={this.state.selected}/>
          <Switch>
            <Route exact path='/' >
              <Homepage />
            </Route>
            <Route exact path='/properties' >
              <Properties />
            </Route>
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }

}

export default App;
