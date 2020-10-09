<template>
  <div class="google-two-fa">
    <div class="KawaiiPopup__text">
      <p>Scan this QR code in the<br>
        Google Authenticator app
      </p>
    </div>
    <div class="qr-box">
      <div class="qr-box__value">
        <img style="height: 120px" :src="qrCodeLink" alt="">
<!--        <img style="height: 120px" src="@/assets/img/qr.png" alt="">-->
      </div>
      <div class="twoFaText">
        <p>If you are unable to scan the QR code, please enter this code manually into the app.<br>
        <strong class="d-block mt-3">
            {{codeSecret}}
        </strong></p>
      </div>
    </div>
  </div>
</template>

<script>
    import API from '@/api/api';

    export default {
        name: "StepTwo",
      data() {
        return {
          qrCodeLink: '',
          codeSecret: '',
        }
      },
      mounted(){
        API.get2FAQrLink()
            .then(res => {
              this.qrCodeLink = res.data.response;
            })
            .catch(err => {
              this.$modalWindow = { type: err.message };
            });
        API.get2FASecret()
            .then(res => {
              this.codeSecret = res.data.response;
            })
            .catch(err => {
              this.$modalWindow = { type: err.message };
            })
      }
    }
</script>

<style scoped lang="scss">

</style>
