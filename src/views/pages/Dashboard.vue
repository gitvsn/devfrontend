<template>
  <div class="dashboard-page">
    <div class="page-title">
      <p>Account settings</p>
    </div>
    <div class="content">
      <div class="content__wrap">
        <div class="box dashboard-wallet mb-3">
          <div class="title">
            <p>My wallet</p>
          </div>
          <div class="my-wallet">
            <div class="custom-input w-100">
              <label>
                <input type="text" class="custom-input__input " v-model="userWalletAddress" readonly
                       required>
              </label>
            </div>
            <button class="copy-btn"><img src="@/assets/img/copy.svg" alt=""> copy</button>
          </div>
        </div>
        <div class="box balance-box-wrapper mb-3 mb-xl-0">
          <div class="d-md-flex align-items-center mb-3">
            <div class="title m-0">
              <p>Balance history</p>
            </div>
            <nav class="chart-nav ml-md-auto mt-2 mt-md-0">
              <ul>
                <li class="active">
                  <button type="button">1d</button>
                </li>
                <li>
                  <button type="button">7d</button>
                </li>
                <li>
                  <button type="button">1m</button>
                </li>
                <li>
                  <button type="button">3m</button>
                </li>
                <li>
                  <button type="button">1y</button>
                </li>
              </ul>
            </nav>
          </div>
          chart here
        </div>
      </div>
      <div class="content__side">
        <div class="balance-box  mb-3">
          <div class="d-flex align-items-center">
            <div class="balance-box__icon">
              <img src="@/assets/img/balance-icon.svg" alt="">
            </div>
            <div class="balance-box__title ml-3">
              <p>Balance</p>
            </div>
          </div>
          <div class="balance-box__value">
            <p><span>{{userWalletBalance}}</span> VSN</p>
          </div>

        </div>
        <div class="box balance-box-wrapper balance-statistic">
          <div class="title">
            <p>Balance statistics</p>
          </div>
          chart here
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import  API  from '@/api/api';

export default {
  name: "Dashboard",
  data() {
    return {
      userWalletAddress: null,
      userWalletBalance: null,
    }
  },
  methods: {
    getWalletAddress() {
      API.getWallet()
          .then(response => {
            this.userWalletAddress = response.data.response[0].address
            this.userWalletBalance = response.data.response[0].balance
          })
          .catch(err => {
            //  this.$modalWindow = { type: err.message };
          })
          .finally(() => {
          //  this.isPending = false;
          });
    }
  },
  mounted() {
    this.getWalletAddress();
  }
}
</script>

<style scoped lang="scss">
</style>
