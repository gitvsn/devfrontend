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
                <input type="text" class="custom-input__input " value="0xjdkf9ficksock4m4g354l5k6mdj5" readonly required>
              </label>
            </div>
            <button class="copy-btn"><img src="@/assets/img/copy.svg" alt=""> copy</button>
          </div>
        </div>
        <div class="box balance-box-wrapper">
          <div class="d-flex align-items-center mb-3">
            <div class="title m-0">
              <p>Balance history</p>
            </div>
            <nav class="chart-nav ml-auto">
              <ul>
                <li class="active"><button type="button">1d</button></li>
                <li><button type="button">7d</button></li>
                <li><button type="button">1m</button></li>
                <li><button type="button">3m</button></li>
                <li><button type="button">1y</button></li>
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
            <p><span>47 547</span> VSN</p>
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



export default {
  name: "Dashboard",
}
</script>

<style scoped lang="scss">
</style>
