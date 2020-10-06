<template>
  <div class="google-two-fa">
    <div class="KawaiiPopup__text">
      <p>Scan this QR code in the<br> Google Authenticator app</p>
    </div>
    <div class="qr-box">
      <div class="qr-box__value">
<!--        <img style="height: 120px" :src="qrcodelink" alt="">-->
      </div>
      <div class="twoFaText">
        <p>If you are unable to scan the QR code, please enter this code manually into the app.<br>
        <strong class="d-block mt-3">
<!--            {{codeSecret}}-->
        </strong></p>
      </div>
    </div>
  </div>
</template>

<!--<script>-->
<!--    import { mapGetters, mapMutations, mapActions } from 'vuex'-->

<!--    export default {-->
<!--        name: "StepTwo",-->
<!--      data() {-->
<!--        return {-->
<!--          qrcodelink: '',-->
<!--          codeSecret: '',-->
<!--        }-->
<!--      },-->
<!--      computed: {-->
<!--        ...mapGetters({-->
<!--          getUserSecret: 'user/getUserSecret'-->
<!--        }),-->
<!--      },-->
<!--      methods: {-->
<!--        ...mapActions({-->
<!--          loadTwaLink: 'user/loadTwaLink',-->
<!--          loadUserSettings: 'user/loadUserSettings',-->
<!--          getUserInfo: 'user/getUserInfo',-->
<!--        }),-->
<!--      },-->
<!--      mounted(){-->
<!--        this.getUserInfo().then(res => {-->
<!--          this.loadUserSettings().then(res => {-->
<!--            this.loadTwaLink().then(res => {-->
<!--              let qrSecret = this.getUserSecret;-->
<!--              this.qrcodelink = res;-->
<!--              this.codeSecret= qrSecret;-->
<!--            })-->
<!--          })-->
<!--        });-->
<!--      }-->
<!--    }-->
<!--</script>-->

<style scoped lang="scss">

</style>
