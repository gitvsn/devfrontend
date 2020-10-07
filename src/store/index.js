import Vue from 'vue';
import Vuex from 'vuex';

import User from './modules/user';
import Wallet from './modules/wallet';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        user: User,
        wallet: Wallet
    },
    strict: true,
});

export default store
