import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { redditAuthUrl } from '../../constants';

export default () => {
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem('REDDIT_TOKEN')) {
      history.push('/');
    }
    setIsLoading(false);
  }, []);
  return !isLoading ? (
    <a className='login-link link-button' href={redditAuthUrl}>
      <Button variant='contained' color='primary'>
        Sign in with Reddit
      </Button>
    </a>
  ) : (
    <></>
  );
};
