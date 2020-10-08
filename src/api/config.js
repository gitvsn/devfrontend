import axios from 'axios';

const host = window.location.hostname;
const prodHosts = [
  '104.248.41.44',
  'pay.s-wallet.ai',
];

// export const baseHost = prodHosts.includes(host)
//   ? 'https://pay.s-wallet.ai' // PROD
//   : 'http://104.248.84.110:8080'; // DEV


export const baseHost = 'http://localhost:8777';
export const prodHost = 'http://209.188.21.146:8080';

axios.defaults.baseURL = prodHost + '/api/';

axios.interceptors.request.use(config => {
  config.headers.Authorization = localStorage.token;
  return config;
});
