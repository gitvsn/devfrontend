import axios from 'axios';

const TRANSACTIONS_LIMIT = 10;

const setConfigParams = (params) => ({ params });

const getAvatar = (personalInfo) => {
	return axios.post('change_personal_info', personalInfo);
};

// Authorization
const register = (data) => axios.post('registration', data);
const login = (data) => axios.post('authorization', data);
const checkToken = () => axios.post('check_token');

const confirmLogin = (code) => {
	const config = setConfigParams({ code: code, email: localStorage.email });

	return axios.post('confirm_login', {}, config).then((res) => {
		localStorage.token = 'Bearer_' + res.data.token;
		return res;
	});
};

const getPersonalInfo = () => {
	return axios.post('get_personal_info');
};


const confirm2FA = (code) => {
	return axios.post('confirm_two_fa', {}, setConfigParams({ code }));
};

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

const enable2FA = (data) => axios.post('enable_two_fa', data);
const disable2FA = (data) => axios.post('disable_two_fa', data);

// Transactions
const getTransactions = (page = 1) => {
	return axios.post(
		'get_user_transactions' + `?page=${page}` + `&size=${TRANSACTIONS_LIMIT}`
	);
};
const getTrInfo = () => axios.post('get_transactions_info');
const getTrChartInfo = () => axios.post('get_transactions_to_chart');
const send = data => axios.post('send', data);

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
	getPersonalInfo,
	restorePasswordCheckEmail,
	restorePasswordCheckToken,
	getTransactions,
	getTrChartInfo,
	getTrInfo,
	send
};
