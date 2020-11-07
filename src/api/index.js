import axios from 'axios';
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem(
  'REDDIT_TOKEN'
)}`;
export const http = axios;

export * from './authApi';
export * from './userApi';
