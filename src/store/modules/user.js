import axios from 'axios';


//const UPLOAD_AVATAR = '/upload/avatar';
//const GET_AVATAR = '/getAvatar';
//const GET_USER_ID = '/get_id';

const GET_GOOGLE_2FA_STATUS = '/two_fa_is_enable';

//const GET_PERSONAL_INFO = '/get_personal_info';

//const GET_SUBSCRIBE_INFO = '/getSubInfo';

const state = () => ({
	avatar: {},
	personalInfo: {},
	subscribeInfo: {},
	isGoogle2FAEnable: false,
	userId: null,
});

const mutations = {
	setUserState(state, { field, value }) {
		state[field] = value;
	},
}

const actions = {
	// setAvatar(context) {
	// 	const normalizeAvatarObject = (data) => {
	// 		const defaultAvatar = require('@/assets/icons/user-default.svg');
	//
	// 		if (data) {
	// 			return !data.avatar || data.avatar === 'none'
	// 				? { ...data, avatar: defaultAvatar }
	// 				: { ...data, avatar: 'data:image/png;base64, ' + data.avatar };
	// 		}
	// 		return { avatar: defaultAvatar };
	// 	}
	//
	// 	return axios.post(GET_AVATAR)
	// 		.then(res => {
	// 			const data = {
	// 				field: 'avatar',
	// 				value: normalizeAvatarObject(res.data),
	// 			}
	// 			context.commit('setUserState', data);
	// 		});
	// },

	// setSubscribeInfo(context) {
	// 	return axios.post(GET_SUBSCRIBE_INFO)
	// 		.then(res => {
	// 			const data = {
	// 				field: 'subscribeInfo',
	// 				value: res.data.response,
	// 			}
	// 			context.commit('setUserState', data);
	// 		});
	// },

	// setPersonalInfo(context) {
	// 	return axios.post(GET_PERSONAL_INFO)
	// 		.then(res => {
	// 			const data = {
	// 				field: 'personalInfo',
	// 				value: res.data,
	// 			}
	// 			context.commit('setUserState', data);
	// 		});
	// },

	// uploadUserAvatar(context, payload) {
	// 	const formData = new FormData();
	// 	formData.append('document', payload);
	//
	// 	axios.post(UPLOAD_AVATAR, formData)
	// 		.then(res => {
	// 			if (res.status === 200) {
	// 				context.dispatch('setAvatar');
	// 			}
	// 		});
	// },

	getGoogle2FAStatus(context) {
		return axios.post(GET_GOOGLE_2FA_STATUS)
			.then(res => {
				if (res.data.status === 200) {
					const data = {
						field: 'isGoogle2FAEnable',
						value: res.data.response,
					}
					context.commit('setUserState', data);
				}
			});
	},

	// getUserId(context) {
	// 	return axios.post(GET_USER_ID)
	// 		.then(res => {
	// 			if (res.data.status === 200) {
	// 				const data = {
	// 					field: 'userId',
	// 					value: res.data.response,
	// 				}
	// 				context.commit('setUserState', data);
	// 			}
	// 		});
	// },
};

export default {
	state,
	mutations,
	actions,
}
