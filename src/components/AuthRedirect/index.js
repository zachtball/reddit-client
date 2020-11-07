import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getToken } from '../../api/authApi';

export default () => {
  const history = useHistory();
  const codeParam = new URLSearchParams(window.location.href).get('code');
  useEffect(() => {
    if (codeParam) {
      getToken(codeParam)
        .then((res) => {
          localStorage.setItem('REDDIT_TOKEN', res.data);

          history.push('/');
        })
        .catch((err) => {
          console.log('error authenticating', err);
          history.push('/login');
        });
    }
  }, []);

  return <>THIS IS AUTH REDIRECT</>;
};
