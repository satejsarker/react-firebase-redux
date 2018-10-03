import React, { Component } from 'react';

import './App.css';
import AppNavbar from './components/layout/AppNavbar';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import {UserIsAuthenticated,UserIsNotAuthenticated} from './helpers/auth';
import {Provider} from 'react-redux';

import Dashbord from './components/layout/Dashbord';
import store from './store';
import AddClient from './components/clients/AddClient';
import ClientDetails from './components/clients/ClientDetails';
import EditClient from './components/clients/EditClient';
import Login from './components/auth/Login';
import Settings from './components/settings/Settings';
import Register from './components/auth/Register';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
     <Router>
        <div className="App">
          <AppNavbar />

          <div className="container">
            <Switch>
              <Route exact path="/" component={UserIsAuthenticated(Dashbord)} />
              <Route exact path="/client/add" component={UserIsAuthenticated(AddClient)} />
              <Route exact path="/client/edit/:id" component={ UserIsAuthenticated(EditClient)} />

              <Route exact path="/client/:id" component={UserIsAuthenticated(ClientDetails)} />
              <Route exact path="/login" component={UserIsNotAuthenticated(Login)} />

                <Route exact path="/settings" component={UserIsAuthenticated(Settings)} />
                <Route exact path='/register' component={UserIsNotAuthenticated(Register)} />
                <Route component={ UserIsNotAuthenticated(Login) } />
            </Switch>
          </div>
        </div>
      </Router>
      
      </Provider>
      );
  }
}

export default App;
