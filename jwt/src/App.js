import React, { Component } from 'react'
import store from './redux'
import { Provider } from 'react-redux'

import Admin from './screens/Admin'
import Home from './screens/Home'
import Restrito from './screens/Restrito'
import Login from './screens/Login'

import { Container } from 'semantic-ui-react'

import { Route, BrowserRouter as Router } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
            <Router>
              <Container>
                <Route exact path='/' component={Home} />
                <Route path='/admin' component={Admin} />
                <Route path='/restrito' component={Restrito} />
                <Route path='/login' component={Login} />
              </Container>
            </Router>
      </Provider>
    );
  }
}

export default App;
