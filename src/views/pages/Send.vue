<template>
  <div class="dashboard-page">
    <ErrorModal/>
    <SuccessModal/>
    <div class="page-title">
      <p>Send</p>
    </div>
    <div class="content">
      <div class="content__wrap">
        <div class="box send-wallet-wrapper mb-3">
          <div class="custom-input mb-3">
            <label>
              <input v-model="send.address" type="text" class="custom-input__input" required>
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
                <input  v-model="send.amount" type="text" class="custom-input__input" required>
                <span class="custom-input__content">
          <span class="custom-input__text">Amount in VSN</span>
        </span>
              </label>
              <div class="error-msg">
                <p>User is not found</p>
              </div>
            </div>
<!--            <div class="amount__info">-->
<!--              <p><span>0 USD</span> Сommission 1%</p>-->
<!--            </div>-->
            <button @click="sendTokens" class="my-btn"><span>send</span></button>
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
            <p><span>{{ userBalance }}</span> VSN</p>
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
              <td>Status</td>
            </tr>
            </thead>
            <tbody>
            <tr v-for="el in transactions">
              <td><p class="wallet-address"><button class="link" @click="goToEtherscan(el.hash)">{{ el.hash }}</button></p></td>
              <td>{{new Date(el.created).customFormat("#DD#.#MM#.#YYYY#")}}</td>
              <td>{{new Date(el.created).customFormat("#hh#:#mm#:#ss#")}}</td>
              <td>{{el.type === 'DEPOSIT' ? 'Received' : 'Sent'}}</td>
              <td><p :class="el.type === 'DEPOSIT' ? 'amount-value' :'amount-value' ">{{el.amount}} VSN</p></td>
              <td>
                  <p v-if="el.status==='SUCCESS'" :class="getStatusClass(el.status)">Success</p>
                  <p v-if="el.status==='FAILED'" :class="getStatusClass(el.status)">Failed</p>
                  <p v-if="el.status==='PENDING'" :class="getStatusClass(el.status)">Pending</p>
              </td>
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
import ErrorModal from "@/components/ErrorModal";
import SuccessModal from "@/components/SuccessModal";

export default {
  name: "Send",
  components:{
    ErrorModal,
    SuccessModal
  },
  data() {
    return {
      transactions: [],
      currentPage: 1,
      send:{
        currency : 'VSN',
        amount: null,
        address: null
      }
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
               this.transactions = res.data.response.content;
               this.transactions = this.transactions.reverse();
            }
          })
          .catch(err => {
            console.log(err);
          });
    },
    getStatusClass(status){
      switch (status) {
        case 'SUCCESS':
          return 'success';
        case 'FAILED':
          return 'failed';
        default :
          return  'pending'
      }
    },
    goToEtherscan(link){
      let href = `https://etherscan.io/tx/${link}`;
      window.open(href, '_blank');
    },
    sendTokens() {
      if (parseFloat(this.send.amount) < 0 || this.send.amount === null || isNaN(parseFloat(this.send.amount))) {
          this.$modalWindowError = {type: "Not valid amount"}
          return;
        }
      if(this.send.address.length !== 42 || this.send.address[0] !== '0' || this.send.address[1] !== 'x'){
        this.$modalWindowError = {type: "Not valid address"}
        return;
      }

      API.send(this.send)
          .then(res => {
            if (res.data.status === 200) {
               this.$modalWindowSuccess = { type: "You sent VSN"}
               this.getTransactions();
            } else if (res.data.status === 400) {
              this.$modalWindowError = { type: res.data.error}
            }
          })
          .catch(err => {
            this.$modalWindowError = { type: err.data.error}
          });
    }
  },
  mounted() {
        this.getTransactions();
        this.getUserWallet();
  }
}
</script>

<style scoped lang="scss">
</style>
