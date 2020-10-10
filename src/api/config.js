import axios from 'axios';

const host = window.location.hostname;


export const baseHost = 'http://localhost:8777';
export const prodHost = 'http://104.219.250.215';

axios.defaults.baseURL = prodHost + '/api/';

axios.interceptors.request.use(config => {
  config.headers.Authorization = localStorage.token;
  return config;
});
