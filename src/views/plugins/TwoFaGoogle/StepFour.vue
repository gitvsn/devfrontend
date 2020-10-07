<template>

  <div class="google-two-fa">
    <div class="KawaiiPopup__text">
      <p>Enable your Google Authenticator.</p>
    </div>
    <div class="custom-input mt-3">
      <label>
        <input type="password" class="custom-input__input" required>
        <span class="custom-input__content">
          <span class="custom-input__text">Password</span>
        <span class="custom-input__icon">
          <button class="pass-toggle"></button>
        </span>
        </span>
      </label>
      <div class="error-msg">
        <p>User is not found</p>
      </div>
    </div>
    <div class="mt-3">
      <TwoFaGoogleAuthForm/>
    </div>

  </div>
</template>

<script>
    //import {mapActions} from 'vuex'
    import TwoFaGoogleAuthForm from "./TwoFaGoogleAuthForm";

    export default {
        name: "StepFour",
        components: {
            TwoFaGoogleAuthForm,
        },
      // data() {
      //   return {
      //     twaCode: '',
      //     password: '',
      //     actionType: 'login',
      //     clearField: false
      //   }
      // },
      // props:{
      //   confirm:{
      //     type : Boolean,
      //     required: false,
      //     default: false,
      //   }
      // },
      // watch: {
      //   confirm : function (newV,oldV) {
      //     this.clickTwa();
      //   }
      // },
      // methods: {
      //   ...mapActions({
      //     changeUserTwa: 'user/changeUserTwa',
      //     checkPassword: 'user/checkPassword'
      //   }),
      //   clickTwa() {
      //     this.checkPassword(this.password)
      //       .then(res => {
      //         this.changeUserTwa({twaCode: this.twaCode, actionType: this.actionType })
      //           .then(res => {
      //             alert("2FA enabled")
      //             this.$message = {type: 'success', title: 'Success', text: '2FA enabled'};
      //           })
      //           .catch(e => {
      //             alert("Invalid code")
      //             this.$message = {type: 'error', title: 'Error', text: 'Invalid code'};
      //             this.clearField = !this.clearField;
      //           })
      //       })
      //       .catch(e => {
      //         alert("Invalid password")
      //         this.$message = {type: 'error', title: 'Error', text: 'Invalid password'};
      //       });
      //   },
      //   enteredLastValue(value){
      //     this.twaCode = value;
      //   }
      // },
      // mounted(){}
    }
</script>

<style scoped>

</style>
