import React, { Component } from 'react';

import './App.css';
import AppNavbar from './components/layout/AppNavbar';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Dashbord from './components/layout/Dashbord';
class App extends Component {
  render() {
    return <Router>
        <div className="App">
          <AppNavbar />

          <div className="container">
            <Switch>
              <Route exact path="/" component={Dashbord} />
            </Switch>
          </div>
        </div>
      </Router>;
  }
}

export default App;
