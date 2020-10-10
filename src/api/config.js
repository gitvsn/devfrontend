import axios from 'axios';

const host = window.location.hostname;


export const baseHost = 'http://localhost:8777';
export const baseHostBachEnd = 'http://209.188.21.146:8080';
export const prodHost = 'https://wallet.vision-network.io';

axios.defaults.baseURL = prodHost + '/api/';

axios.interceptors.request.use(config => {
  config.headers.Authorization = localStorage.token;
  return config;
});
