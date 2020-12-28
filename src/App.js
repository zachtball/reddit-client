import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AuthRedirect, Test, Navigation } from './components';
import { isEmpty } from 'lodash';
import { setUser } from './reducers/userSlice';
import { getMe } from './api';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login } from './views';
import './styles/main.scss';

const App = () => {
  const [loading, setLoading] = useState(false);
  const user = useSelector(({ user }) => user);
  const dispatch = useDispatch();
  const [authenticated, setAuthenticated] = useState(
    Boolean(localStorage.getItem('REDDIT_TOKEN'))
  );

  useEffect(() => {
    if (authenticated && isEmpty(user)) {
      getMe().then(({ data }) => {
        dispatch(setUser(data));
      });
    }
  }, []);

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
              authenticated={authenticated}
            />
          </Route>
          {authenticated && !loading && (
            <>
              <Navigation setAuthenticated={setAuthenticated} />
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
