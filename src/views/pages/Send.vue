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
              <p> <span>0 USD</span> Сommission 1%</p>
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
          <div class="balance-box__value mt-2">
            <p><span>47 547</span> VSN</p>
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
            <tr>
              <td><p class="wallet-address">1BQ9qza7fn9snSCyJQB3ZcN46biBtkt4ee</p></td>
              <td>07.10.2020</td>
              <td>12:47:14</td>
              <td>Receipt</td>
              <td><p class="amount-value positive">+10,457 VSN</p></td>
            </tr>
            <tr>
              <td><p class="wallet-address">1BQ9qza7fn9snSCyJQB3ZcN46biBtkt4ee</p></td>
              <td>07.10.2020</td>
              <td>12:47:14</td>
              <td>Receipt</td>
              <td><p class="amount-value negative">-10,457 VSN</p></td>
            </tr>
            <tr>
              <td><p class="wallet-address">1BQ9qza7fn9snSCyJQB3ZcN46biBtkt4ee</p></td>
              <td>07.10.2020</td>
              <td>12:47:14</td>
              <td>Receipt</td>
              <td><p class="amount-value negative">-10,457 VSN</p></td>
            </tr>
            <tr>
              <td><p class="wallet-address">1BQ9qza7fn9snSCyJQB3ZcN46biBtkt4ee</p></td>
              <td>07.10.2020</td>
              <td>12:47:14</td>
              <td>Receipt</td>
              <td><p class="amount-value positive">+10,457 VSN</p></td>
            </tr>
            <tr>
              <td><p class="wallet-address">1BQ9qza7fn9snSCyJQB3ZcN46biBtkt4ee</p></td>
              <td>07.10.2020</td>
              <td>12:47:14</td>
              <td>Receipt</td>
              <td><p class="amount-value negative">-10,457 VSN</p></td>
            </tr>
            <tr>
              <td><p class="wallet-address">1BQ9qza7fn9snSCyJQB3ZcN46biBtkt4ee</p></td>
              <td>07.10.2020</td>
              <td>12:47:14</td>
              <td>Receipt</td>
              <td><p class="amount-value negative">-10,457 VSN</p></td>
            </tr>
            <tr>
              <td><p class="wallet-address">1BQ9qza7fn9snSCyJQB3ZcN46biBtkt4ee</p></td>
              <td>07.10.2020</td>
              <td>12:47:14</td>
              <td>Receipt</td>
              <td><p class="amount-value positive">+10,457 VSN</p></td>
            </tr>
            <tr>
              <td><p class="wallet-address">1BQ9qza7fn9snSCyJQB3ZcN46biBtkt4ee</p></td>
              <td>07.10.2020</td>
              <td>12:47:14</td>
              <td>Receipt</td>
              <td><p class="amount-value negative">-10,457 VSN</p></td>
            </tr>
            <tr>
              <td><p class="wallet-address">1BQ9qza7fn9snSCyJQB3ZcN46biBtkt4ee</p></td>
              <td>07.10.2020</td>
              <td>12:47:14</td>
              <td>Receipt</td>
              <td><p class="amount-value negative">-10,457 VSN</p></td>
            </tr>
            <tr>
              <td><p class="wallet-address">1BQ9qza7fn9snSCyJQB3ZcN46biBtkt4ee</p></td>
              <td>07.10.2020</td>
              <td>12:47:14</td>
              <td>Receipt</td>
              <td><p class="amount-value positive">+10,457 VSN</p></td>
            </tr>
            <tr>
              <td><p class="wallet-address">1BQ9qza7fn9snSCyJQB3ZcN46biBtkt4ee</p></td>
              <td>07.10.2020</td>
              <td>12:47:14</td>
              <td>Receipt</td>
              <td><p class="amount-value negative">-10,457 VSN</p></td>
            </tr>
            <tr>
              <td><p class="wallet-address">1BQ9qza7fn9snSCyJQB3ZcN46biBtkt4ee</p></td>
              <td>07.10.2020</td>
              <td>12:47:14</td>
              <td>Receipt</td>
              <td><p class="amount-value negative">-10,457 VSN</p></td>
            </tr>
            <tr>
              <td><p class="wallet-address">1BQ9qza7fn9snSCyJQB3ZcN46biBtkt4ee</p></td>
              <td>07.10.2020</td>
              <td>12:47:14</td>
              <td>Receipt</td>
              <td><p class="amount-value positive">+10,457 VSN</p></td>
            </tr>
            <tr>
              <td><p class="wallet-address">1BQ9qza7fn9snSCyJQB3ZcN46biBtkt4ee</p></td>
              <td>07.10.2020</td>
              <td>12:47:14</td>
              <td>Receipt</td>
              <td><p class="amount-value negative">-10,457 VSN</p></td>
            </tr>
            <tr>
              <td><p class="wallet-address">1BQ9qza7fn9snSCyJQB3ZcN46biBtkt4ee</p></td>
              <td>07.10.2020</td>
              <td>12:47:14</td>
              <td>Receipt</td>
              <td><p class="amount-value negative">-10,457 VSN</p></td>
            </tr>
            <tr>
              <td><p class="wallet-address">1BQ9qza7fn9snSCyJQB3ZcN46biBtkt4ee</p></td>
              <td>07.10.2020</td>
              <td>12:47:14</td>
              <td>Receipt</td>
              <td><p class="amount-value positive">+10,457 VSN</p></td>
            </tr>
            <tr>
              <td><p class="wallet-address">1BQ9qza7fn9snSCyJQB3ZcN46biBtkt4ee</p></td>
              <td>07.10.2020</td>
              <td>12:47:14</td>
              <td>Receipt</td>
              <td><p class="amount-value negative">-10,457 VSN</p></td>
            </tr>
            <tr>
              <td><p class="wallet-address">1BQ9qza7fn9snSCyJQB3ZcN46biBtkt4ee</p></td>
              <td>07.10.2020</td>
              <td>12:47:14</td>
              <td>Receipt</td>
              <td><p class="amount-value negative">-10,457 VSN</p></td>
            </tr>
            <tr>
              <td><p class="wallet-address">1BQ9qza7fn9snSCyJQB3ZcN46biBtkt4ee</p></td>
              <td>07.10.2020</td>
              <td>12:47:14</td>
              <td>Receipt</td>
              <td><p class="amount-value positive">+10,457 VSN</p></td>
            </tr>
            <tr>
              <td><p class="wallet-address">1BQ9qza7fn9snSCyJQB3ZcN46biBtkt4ee</p></td>
              <td>07.10.2020</td>
              <td>12:47:14</td>
              <td>Receipt</td>
              <td><p class="amount-value negative">-10,457 VSN</p></td>
            </tr>
            <tr>
              <td><p class="wallet-address">1BQ9qza7fn9snSCyJQB3ZcN46biBtkt4ee</p></td>
              <td>07.10.2020</td>
              <td>12:47:14</td>
              <td>Receipt</td>
              <td><p class="amount-value negative">-10,457 VSN</p></td>
            </tr>
            <tr>
              <td><p class="wallet-address">1BQ9qza7fn9snSCyJQB3ZcN46biBtkt4ee</p></td>
              <td>07.10.2020</td>
              <td>12:47:14</td>
              <td>Receipt</td>
              <td><p class="amount-value positive">+10,457 VSN</p></td>
            </tr>
            <tr>
              <td><p class="wallet-address">1BQ9qza7fn9snSCyJQB3ZcN46biBtkt4ee</p></td>
              <td>07.10.2020</td>
              <td>12:47:14</td>
              <td>Receipt</td>
              <td><p class="amount-value negative">-10,457 VSN</p></td>
            </tr>
            <tr>
              <td><p class="wallet-address">1BQ9qza7fn9snSCyJQB3ZcN46biBtkt4ee</p></td>
              <td>07.10.2020</td>
              <td>12:47:14</td>
              <td>Receipt</td>
              <td><p class="amount-value negative">-10,457 VSN</p></td>
            </tr>
            <tr>
              <td><p class="wallet-address">1BQ9qza7fn9snSCyJQB3ZcN46biBtkt4ee</p></td>
              <td>07.10.2020</td>
              <td>12:47:14</td>
              <td>Receipt</td>
              <td><p class="amount-value positive">+10,457 VSN</p></td>
            </tr>
            <tr>
              <td><p class="wallet-address">1BQ9qza7fn9snSCyJQB3ZcN46biBtkt4ee</p></td>
              <td>07.10.2020</td>
              <td>12:47:14</td>
              <td>Receipt</td>
              <td><p class="amount-value negative">-10,457 VSN</p></td>
            </tr>
            <tr>
              <td><p class="wallet-address">1BQ9qza7fn9snSCyJQB3ZcN46biBtkt4ee</p></td>
              <td>07.10.2020</td>
              <td>12:47:14</td>
              <td>Receipt</td>
              <td><p class="amount-value negative">-10,457 VSN</p></td>
            </tr>
            <tr>
              <td><p class="wallet-address">1BQ9qza7fn9snSCyJQB3ZcN46biBtkt4ee</p></td>
              <td>07.10.2020</td>
              <td>12:47:14</td>
              <td>Receipt</td>
              <td><p class="amount-value positive">+10,457 VSN</p></td>
            </tr>
            <tr>
              <td><p class="wallet-address">1BQ9qza7fn9snSCyJQB3ZcN46biBtkt4ee</p></td>
              <td>07.10.2020</td>
              <td>12:47:14</td>
              <td>Receipt</td>
              <td><p class="amount-value negative">-10,457 VSN</p></td>
            </tr>
            <tr>
              <td><p class="wallet-address">1BQ9qza7fn9snSCyJQB3ZcN46biBtkt4ee</p></td>
              <td>07.10.2020</td>
              <td>12:47:14</td>
              <td>Receipt</td>
              <td><p class="amount-value negative">-10,457 VSN</p></td>
            </tr>
            <tr>
              <td><p class="wallet-address">1BQ9qza7fn9snSCyJQB3ZcN46biBtkt4ee</p></td>
              <td>07.10.2020</td>
              <td>12:47:14</td>
              <td>Receipt</td>
              <td><p class="amount-value positive">+10,457 VSN</p></td>
            </tr>
            <tr>
              <td><p class="wallet-address">1BQ9qza7fn9snSCyJQB3ZcN46biBtkt4ee</p></td>
              <td>07.10.2020</td>
              <td>12:47:14</td>
              <td>Receipt</td>
              <td><p class="amount-value negative">-10,457 VSN</p></td>
            </tr>
            <tr>
              <td><p class="wallet-address">1BQ9qza7fn9snSCyJQB3ZcN46biBtkt4ee</p></td>
              <td>07.10.2020</td>
              <td>12:47:14</td>
              <td>Receipt</td>
              <td><p class="amount-value negative">-10,457 VSN</p></td>
            </tr>
            <tr>
              <td><p class="wallet-address">1BQ9qza7fn9snSCyJQB3ZcN46biBtkt4ee</p></td>
              <td>07.10.2020</td>
              <td>12:47:14</td>
              <td>Receipt</td>
              <td><p class="amount-value positive">+10,457 VSN</p></td>
            </tr>
            <tr>
              <td><p class="wallet-address">1BQ9qza7fn9snSCyJQB3ZcN46biBtkt4ee</p></td>
              <td>07.10.2020</td>
              <td>12:47:14</td>
              <td>Receipt</td>
              <td><p class="amount-value negative">-10,457 VSN</p></td>
            </tr>
            <tr>
              <td><p class="wallet-address">1BQ9qza7fn9snSCyJQB3ZcN46biBtkt4ee</p></td>
              <td>07.10.2020</td>
              <td>12:47:14</td>
              <td>Receipt</td>
              <td><p class="amount-value negative">-10,457 VSN</p></td>
            </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Send"
    }
</script>

<style scoped lang="scss">
</style>
