import { http } from './index';

export const getMe = () => {
  return http.get('api/user/me');
};
