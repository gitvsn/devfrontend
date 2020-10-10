import axios from 'axios';

const UPLOAD_AVATAR = '/upload/avatar';
const GET_AVATAR = '/getAvatar';
const GET_GOOGLE_2FA_STATUS = '/two_fa_is_enable';
const GET_PERSONAL_INFO = '/get_personal_info';

// User wallets
const GET_WALLET_INFO = '/getWallets';
const CHANGE_PERSONAL_INFO = '/change_personal_info';

const state = () => ({
	avatar: {},
	personalInfo: {},
	subscribeInfo: {},
	isGoogle2FAEnable: false,
	userId: null,
	balance: null,
	address: null,
});

const mutations = {
	setUserState(state, { field, value }) {
		state[field] = value;
	},
};

const actions = {
	setAvatar(context) {
		const normalizeAvatarObject = (data) => {
			const defaultAvatar = require('@/assets/img/user-default.svg');

			if (data) {
				return !data.avatar || data.avatar === 'none'
					? { ...data, avatar: defaultAvatar }
					: { ...data, avatar: 'data:image/png;base64, ' + data.avatar };
			}
			return { avatar: defaultAvatar };
		};
		return axios.post(GET_AVATAR).then((res) => {
			const data = {
				field: 'avatar',
				value: normalizeAvatarObject(res.data),
			};
			context.commit('setUserState', data);
		});
	},

	setPersonalInfo(context) {
		return axios.post(GET_PERSONAL_INFO).then((res) => {
			const data = {
				field: 'personalInfo',
				value: res.data,
			};
			context.commit('setUserState', data);
		});
	},

	uploadUserAvatar(context, payload) {
		const formData = new FormData();
		formData.append('document', payload);

		axios.post(UPLOAD_AVATAR, formData).then((res) => {
			if (res.status === 200) {
				context.dispatch('setAvatar');
			}
		});
	},

	getGoogle2FAStatus(context) {
		return axios.post(GET_GOOGLE_2FA_STATUS).then((res) => {
			if (res.data.status === 200) {
				const data = {
					field: 'isGoogle2FAEnable',
					value: res.data.response,
				};
				context.commit('setUserState', data);
			}
		});
	},

	getUserWallet(context) {
		return axios.post(GET_WALLET_INFO).then((response) => {
			if (response.data.status === 200) {
				const data = {
					field: 'balance',
					value: response.data.response[0].balance,
				};
				context.commit('setUserState', data);

				const data2 = {
					field: 'address',
					value: response.data.response[0].address,
				};
				context.commit('setUserState', data2);
			}
		});
	},

	changePersonalInfo(context, payload) {
		return axios.post(CHANGE_PERSONAL_INFO, payload);
	},
};

export default {
	state,
	mutations,
	actions,
};
