import React, { useState } from 'react';
import { AuthRedirect, Test, Navigation } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login } from './views';
import './styles/main.scss';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [authenticated, setAuthenticated] = useState(
    Boolean(localStorage.getItem('REDDIT_TOKEN'))
  );

  if (
    !authenticated &&
    !loading &&
    window.location.href.split('?')[0] !==
      `${window.location.origin}/auth-redirect`
  ) {
    return <Login />;
  }

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/auth-redirect'>
            <AuthRedirect
              setAuthenticated={setAuthenticated}
              setLoading={setLoading}
            />
          </Route>
          {authenticated && !loading && (
            <>
              <Navigation />
              <Route exact path='/test'>
                <Test />
              </Route>
            </>
          )}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
