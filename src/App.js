import React from 'react';
import { AuthRedirect, Authenticated, Test, Navigation } from './components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Login } from './views';
import './styles/main.scss';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/auth-redirect'>
            <AuthRedirect />
          </Route>
          <Route exact path='/login'>
            <Login color='primary' />
          </Route>
          <Authenticated>
            <Navigation />
            <Route exact path='/test'>
              <Test />
            </Route>
          </Authenticated>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
