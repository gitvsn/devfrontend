import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store';
import API from './api/api';
import Clipboard from 'v-clipboard';
import './api/config';
//Vue.config.productionTip = true;

Vue.use(Clipboard);

const modalWindowSuccess = Vue.observable({
	modalWindowSuccess: {
		type: null,
	},
});

const modalWindowError = Vue.observable({
	modalWindowError: {
		type: null,
	},
});

Object.defineProperty(Vue.prototype, '$modalWindowSuccess', {
	get() {
		return modalWindowSuccess.modalWindowSuccess;
	},
	set(value) {
		modalWindowSuccess.modalWindowSuccess = value;
	},
});

Object.defineProperty(Vue.prototype, '$modalWindowError', {
	get() {
		return modalWindowError.modalWindowError;
	},
	set(value) {
		modalWindowError.modalWindowError = value;
	},
});

router.beforeEach((to, from, next) => {
	// if (location.protocol === 'http:' && location.hostname !== 'localhost') {
	// 	window.location.replace("https://" + location.hostname);
	// }

	const isRequiresAuth = to.matched.some((route) => route.meta.requiresAuth);

	if (localStorage.token) {
		API.checkToken()
			.then(() => {
				const isLoginPage = to.path.includes('login');

				if (isLoginPage) {
					return next('/dashboard');
				}
				next();
			})
			.catch(() => {
				delete localStorage.token;
				next('/login');
			});
	} else if (isRequiresAuth) {
		next('/login');
	} else {
		next();
	}
});
new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: {
		App,
	},
});
