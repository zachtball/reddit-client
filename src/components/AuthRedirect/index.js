import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getToken } from '../../api/authApi';

export default () => {
  const history = useHistory();
  const codeParam = new URLSearchParams(window.location.href).get('code');
  useEffect(() => {
    getToken(codeParam).then((res) => {
      localStorage.setItem('REDDIT_TOKEN', res.data);
      if (res.status !== 200) {
        return console.log('error authenticating');
      }
      setTimeout(() => {
        history.push('/');
      }, [2000]);
    });
  }, []);

  return <>THIS IS AUTH REDIRECT</>;
};
