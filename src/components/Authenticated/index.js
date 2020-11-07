import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getMe } from '../../api';
export default ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem('REDDIT_TOKEN');
    if (!token) {
      history.push('/login');
    } else {
      console.log(token);
      getMe().then(({ data }) => {
        console.log(data);
        setIsLoading(false);
      });
    }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>loading...</div>;
  }
  return <>{children}</>;
};
