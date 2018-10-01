import React, { Component } from 'react';

import './App.css';
import AppNavbar from './components/layout/AppNavbar';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';

import {Provider} from 'react-redux';

import Dashbord from './components/layout/Dashbord';
import store from './store';
import AddClient from './components/clients/AddClient';
import ClientDetails from './components/clients/ClientDetails';
import EditClient from './components/clients/EditClient';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
     <Router>
        <div className="App">
          <AppNavbar />

          <div className="container">
            <Switch>
              <Route exact path="/" component={Dashbord} />
              <Route exact path="/client/add" component={AddClient} />
              <Route exact path="/client/edit/:id" component={EditClient} />

              <Route exact path="/client/:id" component={ClientDetails} />
            </Switch>
          </div>
        </div>
      </Router>
      
      </Provider>
      );
  }
}

export default App;
