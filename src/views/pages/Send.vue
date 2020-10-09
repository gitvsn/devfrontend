<template>
  <div class="dashboard-page">
    <div class="page-title">
      <p>Send</p>
    </div>
    <div class="content">
      <div class="content__wrap">
        <div class="box send-wallet-wrapper mb-3">
          <div class="custom-input mb-3">
            <label>
              <input type="text" class="custom-input__input" required>
              <span class="custom-input__content">
          <span class="custom-input__text">Wallet Address</span>
        </span>
            </label>
            <div class="error-msg">
              <p>User is not found</p>
            </div>
          </div>
          <div class="amount">
            <div class="custom-input">
              <label>
                <input type="text" class="custom-input__input" required>
                <span class="custom-input__content">
          <span class="custom-input__text">Amount in VSN</span>
        </span>
              </label>
              <div class="error-msg">
                <p>User is not found</p>
              </div>
            </div>
            <div class="amount__info">
              <p><span>0 USD</span> Сommission 1%</p>
            </div>
            <button class="my-btn"><span>send</span></button>
          </div>
        </div>
      </div>
      <div class="content__side">
        <div class="balance-box send-wallet-wrapper mb-3">
          <div class="text-center">
            <div class="balance-box__icon mx-auto">
              <img src="@/assets/img/balance-icon.svg" alt="">
            </div>
            <div class="balance-box__title mt-3">
              <p>Balance</p>
            </div>
          </div>
          <div class="balance-box__value mt-2 text-center">
            <p><span>{{userBalance}}</span> VSN</p>
          </div>

        </div>
      </div>
    </div>
    <div class="box">
      <div class="title">
        <p>Transaction history</p>
      </div>
      <div class="custom-table">
        <div class="custom-table__wrap">
          <table cellspacing="0" cellpadding="0">
            <thead>
            <tr>
              <td>Hash</td>
              <td>Date</td>
              <td>Time</td>
              <td>Type</td>
              <td>Amount</td>
            </tr>
            </thead>
            <tbody>
            <tr v-for="el in transactions">
              <td @click="goToEtherscan(el.hash)"><p class="wallet-address">{{ el.hash }}</p></td>
              <td>{{new Date(el.created).customFormat("#DD#.#MM#.#YYYY#")}}</td>
              <td>{{new Date(el.created).customFormat("#hh#:#mm#:#ss#")}}</td>
              <td>{{el.type === 'DEPOSIT' ? 'Received' : 'Sent'}}</td>
              <td><p :class="el.type === 'DEPOSIT' ? 'amount-value positive' :'amount-value negative' ">10,457 VSN</p></td>
            </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import API from '@/api/api';

export default {
  name: "Send",
  data() {
    return {
      transactions: [],
      currentPage: 1,
      userWalletBalance: null,
    }
  },
  computed: {
    ...mapState({
      userBalance: state => state.user.balance,
    }),
  },
  methods: {
    ...mapActions({
      getUserWallet: 'getUserWallet',
    }),
    getTransactions() {
      API.getTransactions(this.currentPage)
          .then(res => {
            if (res.data.status === 200) {
               this.transactions = res.data.response.content
            }
          })
          .catch(err => {
            console.log(err);
          });
    },
    goToEtherscan(link){
      let href = `https://etherscan.io/tx/${link}`;
      window.open(href, '_blank');
    },
  },
  mounted() {
        this.getTransactions();
        this.getUserWallet();
  }
}
</script>

<style scoped lang="scss">
</style>
