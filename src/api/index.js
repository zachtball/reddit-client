import axios from 'axios';

export default () => {
  const token = localStorage.getItem('REDDIT_TOKEN');
  if (!token) {
    window.location.href = `${window.location.origin}/login`;
    return;
  }
  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('REDDIT_TOKEN')}`,
    },
  });
};

export * from './authApi';
export * from './userApi';
