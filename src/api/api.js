import axios from 'axios';


const setConfigParams = (params) => ({ params });


// Authorization
const register = data => axios.post('registration', data);
const login = data => axios.post('authorization', data);
const checkToken = () => axios.post('check_token');

const confirmLogin = (code) => {
  const config = setConfigParams({ code, email: localStorage.email });

  return axios.post('confirm_login', {}, config)
    .then(res => {
      localStorage.token = 'Bearer_' + res.data.token;

      return res;
    });
}

const confirm2FA = (code) => {
  return axios.post('confirm_two_fa', {}, setConfigParams({ code }));
}

// Restore password
const restorePasswordCheckEmail = (email) => {
  return axios.post(`restore_password/email/${email}`);
};

const restorePasswordCheckToken = ({ token, password }) => {
  return axios.post(`restore_password/${token}/${password}`);
};


export default {
  register,
  login,
  confirmLogin,
  confirm2FA,
  checkToken,
  restorePasswordCheckEmail,
  restorePasswordCheckToken,
};
