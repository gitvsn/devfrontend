import http from '..';

const userEndpoints = {
	REGISTER: () => `/registration`,
	LOGIN: () => `/authorization`,
	CONFIRM_LOGIN: () => `/confirm_login`,
	CHECK_TOKEN: () => `/check_token`,
	UPLOAD_AVATAR: () => `/upload/avatar`,
	GET_AVATAR: () => `/getAvatar`,
	GET_ID: () => `/get_id`,
	CONFIRM_TWO_FA: () => `/confirm_two_fa`,

	GET_TWO_FA_QR_CODE: () => `/get_two_fa_qr_link`,
	GET_TWO_FA_SECRET: () => `/get_two_fa_secret`,

	ENABLE_TWO_FA: () => `/enable_two_fa`,
	DISABLE_TWO_FA: () => `/disable_two_fa`,
	TWO_FA_IS_ENABLE: () => `/two_fa_is_enable`,

	RESTORE_PASSWORD_CHECK_EMAIL: (email) => `restore_password/email/${email}`,
	RESTORE_PASSWORD_CHECK_TOKEN: (token, newPassword) =>
		`restore_password/${token}/${newPassword}`,

	CHANGE_PERSONAL_INFO: () => `/change_personal_info`,
	GET_PERSONAL_INFO: () => `/get_personal_info`,

	GET_SUBSCRIBE_INFO: () => `/getSubInfo`,
};

const state = {
	email: null,
	userId: null,
	route: null,
};

const mutations = {
	setCurrentRoute(state, route) {
		state.route = route;
	},
};

const actions = {
	setRoute({ dispatch, commit, state, rootState }, payload) {
		commit('setCurrentRoute', payload);
	},

	register({ commit, state, rootState }, payload) {
		return http.post(`${userEndpoints.REGISTER()}`, payload);
	},

	login({ commit, state, dispatch, rootState }, payload) {
		return http.post(`${userEndpoints.LOGIN()}`, payload, {}).then((res) => {
			if (res.data.status === 200) {
				localStorage.setItem('token', 'Bearer_' + res.data.response.token);
			}
			return res;
		});
	},

	confirmLogin({ commit, state, dispatch, rootState }, payload) {
		return http.post(
			`${userEndpoints.CONFIRM_LOGIN()}`,
			{},
			{
				headers: {
					Authorization: localStorage.getItem('token'),
				},
				params: {
					code: payload,
				},
			}
		);
	},

	confirmTwoFa({ commit, state, dispatch, rootState }, payload) {
		return http.post(
			`${userEndpoints.CONFIRM_TWO_FA()}`,
			{},
			{
				headers: {
					Authorization: localStorage.getItem('token'),
				},
				params: {
					code: payload,
				},
			}
		);
	},

	getTwoQrLink({ commit, state, dispatch, rootState }) {
		return http.post(
			`${userEndpoints.GET_TWO_FA_QR_CODE()}`,
			{},
			{ headers: { Authorization: localStorage.getItem('token') } }
		);
	},

	getTwoSecret({ commit, state, dispatch, rootState }) {
		return http.post(
			`${userEndpoints.GET_TWO_FA_SECRET()}`,
			{},
			{ headers: { Authorization: localStorage.getItem('token') } }
		);
	},

	checkToken({ commit, state, dispatch, rootState }) {
		return http.post(
			`${userEndpoints.CHECK_TOKEN()}`,
			{},
			{
				headers: {
					Authorization: localStorage.getItem('token'),
				},
			}
		);
	},

	enableTwoFa({ commit, state, dispatch, rootState }, payload) {
		return http.post(`${userEndpoints.ENABLE_TWO_FA()}`, payload, {
			headers: { Authorization: localStorage.getItem('token') },
		});
	},

	disableTwoFa({ commit, state, dispatch, rootState }, payload) {
		return http.post(`${userEndpoints.DISABLE_TWO_FA()}`, payload, {
			headers: { Authorization: localStorage.getItem('token') },
		});
	},

	twoFaIsEnable({ commit, state, dispatch, rootState }) {
		return http.post(
			`${userEndpoints.TWO_FA_IS_ENABLE()}`,
			{},
			{ headers: { Authorization: localStorage.getItem('token') } }
		);
	},

	uploadUserAvatar({ dispatch, commit, state, rootState }, payload) {
		let formData = new FormData();
		formData.append('document', payload);

		return http
			.post(`${userEndpoints.UPLOAD_AVATAR()}`, formData, {
				headers: {
					Authorization: localStorage.getItem('token'),
				},
			})
			.then((res) => {
				if (res.status === 200) {
					return res.data;
				}
			})
			.catch((e) => {});
	},

	getAvatar({ commit, state, dispatch, rootState }) {
		return http.post(
			`${userEndpoints.GET_AVATAR()}`,
			{},
			{ headers: { Authorization: localStorage.getItem('token') } }
		);
	},
	getId({ commit, state, dispatch, rootState }) {
		return http.post(
			`${userEndpoints.GET_ID()}`,
			{},
			{ headers: { Authorization: localStorage.getItem('token') } }
		);
	},

	restorePasswordCheckEmail({ commit, state, dispatch, rootState }, email) {
		return http.post(
			`${userEndpoints.RESTORE_PASSWORD_CHECK_EMAIL(email)}`,
			{},
			{}
		);
	},

	restorePasswordCheckToken({ commit, state, dispatch, rootState }, payload) {
		return http.post(
			`${userEndpoints.RESTORE_PASSWORD_CHECK_TOKEN(
				payload.token,
				payload.password
			)}`,
			{},
			{}
		);
	},

	changePersonalInfo({ commit, state, dispatch, rootState }, payload) {
		return http.post(`${userEndpoints.CHANGE_PERSONAL_INFO()}`, payload, {
			headers: { Authorization: localStorage.getItem('token') },
		});
	},

	getPersonalInfo({ commit, state, dispatch, rootState }) {
		return http.post(
			`${userEndpoints.GET_PERSONAL_INFO()}`,
			{},
			{ headers: { Authorization: localStorage.getItem('token') } }
		);
	},

	getSubscribeCrm({ commit, state, dispatch, rootState }) {
		return http.post(
			`${userEndpoints.GET_SUBSCRIBE_INFO()}`,
			{},
			{ headers: { Authorization: localStorage.getItem('token') } }
		);
	},
};

const getters = {
	getRoute: (state) => state.route,
};

export default {
	namespaced: true,
	state,
	actions,
	mutations,
	getters,
};
