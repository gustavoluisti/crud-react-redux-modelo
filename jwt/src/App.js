import React, { Component } from 'react';
import './App.css';
// import axios from 'axios'
// import jwtDecode from 'jwt-decode'

import store from './redux'
import { Provider } from 'react-redux'

import Admin from './screens/Admin'
import Header from './Header'
import Home from './screens/Home'
import Restrito from './screens/Restrito'
import Login from './screens/Login'

import { Route, BrowserRouter as Router } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
            <Router>
              <div>
                <Route exact path='/' component={Home} />
                <Route path='/admin' component={Admin} />
                <Route path='/restrito' component={Restrito} />
                <Route path='/login' component={Login} />
                <Header />
              </div>
            </Router>
      </Provider>
    );
  }
}

export default App;
