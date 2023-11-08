import { Optional } from '../models';

export const clearToken = (): void => {
  localStorage.setItem('token', '');
};

export const getToken = (): Optional<string> => {
  const token = localStorage.getItem('token');
  return token || null;
};

export const setToken = (token: string): void => {
  localStorage.setItem('token', token);
};
