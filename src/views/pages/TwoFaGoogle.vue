<template>
  <div class="auth-box__content">
    <div class="auth-box__title">
      <p>Two-factor<br>
        authentication</p>
      <div class="auth-box__title-text mt-2">
        <p>Google Authentication</p>
      </div>
    </div>
    <div class="google-auth">
      <TwoFaGoogleAuthForm/>
      <button class="my-btn w-100 mt-3"><span>submit</span></button>
    </div>

  </div>
</template>

<script>
    //import {mapActions, mapGetters} from 'vuex'
    import TwoFaGoogleAuthForm from "../plugins/TwoFaGoogle/TwoFaGoogleAuthForm";


    export default {
        name: 'TwoFaGoogle',
        components: {
            TwoFaGoogleAuthForm,
        },
        // methods: {
        //     ...mapActions({
        //         signIn: 'user/signIn',
        //         getInfo: 'user/getInfo',
        //         loadNotifications: 'user/loadNotifications',
        //         loadUserSettings: 'user/loadUserSettings',
        //         getUserInfo: 'user/getUserInfo',
        //         loadUserAvatar: 'user/loadUserAvatar',
        //         selectPair: 'market/selectPair'
        //     }),
        //     authorize() {
        //         this.signIn({email: localStorage.e, password: localStorage.p, code: this.twaCode}).then(res => {
        //             this.$router.push({name: 'Trade'});
        //             this.getUserInfo().then(res => {
        //                 this.loadUserSettings().then(res => {
        //                     this.loadNotifications().then(res => {
        //                         this.loadUserAvatar().then(res => {
        //                             this.getInfo().then(res => {
        //                                 localStorage.removeItem('e');
        //                                 localStorage.removeItem('p');
        //                                 this.selectPair('LTC-BTC')
        //                             })
        //                         })
        //                     })
        //                 })
        //             }).catch(e => {
        //             })
        //         }).catch(e => {
        //             this.$message = {type: 'error', title: 'Error 2FA', text: 'Invalid code'};
        //             this.clearField = !this.clearField;
        //         })
        //
        //     },
        //     enteredLastValue(value) {
        //         this.twaCode = value;
        //         this.authorize();
        //     }
        // },
        // data() {
        //     return {
        //         twaCode: '',
        //         clearField: false
        //     }
        // }
    }
</script>
<style lang="scss">

</style>
