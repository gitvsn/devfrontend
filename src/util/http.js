import axios from 'axios'

const http = axios.create({
    baseURL: process.env.VUE_APP_API_ENDPOINT,
    timeout: 50000,
    contentType: 'application/json',
});

http.axios = axios;
export default http
