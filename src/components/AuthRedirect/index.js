import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getMe, getToken } from '../../api';

export default ({ setAuthenticated, setLoading, authenticated }) => {
  const [token, setToken] = useState(null);
  const history = useHistory();
  const codeParam = new URLSearchParams(window.location.href).get('code');
  console.log(authenticated);
  useEffect(() => {
    if (authenticated) {
      history.push('/');
    }
    setLoading(true);
    if (codeParam) {
      getToken(codeParam)
        .then((res) => {
          localStorage.setItem('REDDIT_TOKEN', res.data);
          setToken(localStorage.getItem('REDDIT_TOKEN'));
        })
        .catch((err) => {
          console.log('error authenticating', err);
          setLoading(false);
          history.push('/login');
        });
    }
  }, []);

  useEffect(() => {
    if (token) {
      setAuthenticated(true);
      getMe().then(({ data }) => {
        console.log(data);
        setLoading(false);
        history.push('/');
      });
    }
  }, [token]);

  return <>THIS IS AUTH REDIRECT</>;
};
