import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store';
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

new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: {
		App,
	},
});
