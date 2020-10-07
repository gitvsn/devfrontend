import http from "../../util/http";


const userEndpoints = {
    GET_WALLETS: () => `/getWallets`,
    GET_WALLETS_MORE_INFO: () => `/get_wallets_more_info`,
    GET_PRICE: () => `/price`,
    EXCHANGE_CURRENCY: () => `/exchange`,
    GET_EXCHANGE_TRANSACTIONS: () => `/get_exchange_transactions`,
    GET_SEND_TRANSACTIONS: () => `/get_send_transactions`,
    GET_TOTAL_USD_BALANCE: () => `/get_total_usd_balance`,
    SEND_TO_ADDRESS: () => `/send_to_address`,
    GET_PM_USD_TRANSACTIONS: () => `/pm_get_transactions_usd`,

    SEND_PAY_CURRENCY_CALLBACK: () => `/backoffice/send_callback_pay_currency`
};


const state = {};
const mutations = {};

const actions = {
    getWallets({commit, state, dispatch, rootState}) {
        return http.post(`${userEndpoints.GET_WALLETS()}`, {},{
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
            .then(res => {
                return res;
            });
    },

    getWalletsMoreInfo({commit, state, dispatch, rootState}) {
        return http.post(`${userEndpoints.GET_WALLETS_MORE_INFO()}`, {},{headers: {"Authorization": localStorage.getItem("token")}})
    },

    getPrice({commit, state, rootState}, payload) {
        return http.post(`${userEndpoints.GET_PRICE()}`, payload, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        });
    },

    exchangeCurrency({commit, state, rootState}, payload) {
        return http.post(`${userEndpoints.EXCHANGE_CURRENCY()}`, payload, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        });
    },

    sendToAddress({commit, state, rootState}, payload) {
        return http.post(`${userEndpoints.SEND_TO_ADDRESS()}`, payload, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        });
    },

    getExchangeTransactions({commit, state, rootState}) {
        return http.post(`${userEndpoints.GET_EXCHANGE_TRANSACTIONS()}`, {}, {headers: {"Authorization": localStorage.getItem("token")}});
    },

    getSendTransactions({commit, state, rootState}) {
        return http.post(`${userEndpoints.GET_SEND_TRANSACTIONS()}`, {}, {headers: {"Authorization": localStorage.getItem("token")}});
    },

    getTotalUsdBalance({commit, state, rootState}) {
        return http.post(`${userEndpoints.GET_TOTAL_USD_BALANCE()}`, {}, {headers: {"Authorization": localStorage.getItem("token")}});
    },

    getPmUsdTransactions({commit, state, rootState}) {
        return http.post(`${userEndpoints.GET_PM_USD_TRANSACTIONS()}`, {}, {headers: {"Authorization": localStorage.getItem("token")}});
    },

    sendPayCurrencyCallBack({commit, state, rootState},payload) {
        return http.post(`${userEndpoints.SEND_PAY_CURRENCY_CALLBACK()}`, payload, {headers: {"Authorization": localStorage.getItem("token")}});
    },

};

const getters = {
    getRoute: state => state.route,
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
