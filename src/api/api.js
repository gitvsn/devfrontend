import axios from 'axios';


const setConfigParams = (params) => ({ params });


// Authorization
const register = data => axios.post('registration', data);
const login = data => axios.post('authorization', data);
const checkToken = () => axios.post('check_token');

const confirmLogin = (code) => {
  const config = setConfigParams({ code : code,
                                          email: localStorage.email });

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

// Google 2FA
const get2FAQrLink = () => axios.post('get_two_fa_qr_link');
const get2FASecret = () => axios.post('get_two_fa_secret');

const enable2FA = data => axios.post('enable_two_fa', data);
const disable2FA = data => axios.post('disable_two_fa', data);




export default {
  register,
  login,
  confirmLogin,
  confirm2FA,
  checkToken,
  get2FAQrLink,
  get2FASecret,
  enable2FA,
  disable2FA,
  restorePasswordCheckEmail,
  restorePasswordCheckToken,
};
