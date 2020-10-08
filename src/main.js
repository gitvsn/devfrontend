import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store';
import API from './api/api'
import './api/config';
//Vue.config.productionTip = true;

const modalWindow = Vue.observable({
	modalWindow: {
		type: null,
	},
});

Object.defineProperty(Vue.prototype, '$modalWindow', {
	get() {
		return modalWindow.modalWindow;
	},
	set(value) {
		modalWindow.modalWindow = value;
	},
});


router.beforeEach((to, from, next) => {

	if (location.protocol === 'http:' && location.hostname !== 'localhost') {
		window.location.replace("https://" + location.hostname);
	}

	const isRequiresAuth = to.matched.some(route => route.meta.requiresAuth);

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
	}
	else if (isRequiresAuth) {
		next('/login');
	}
	else {
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
