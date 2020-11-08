import React from 'react';
import { Button } from '@material-ui/core';
import { redditAuthUrl } from '../../constants';

export default () => {
  return (
    <a className='login-link link-button' href={redditAuthUrl}>
      <Button variant='contained' color='primary'>
        Sign in with Reddit
      </Button>
    </a>
  );
};
