<template>

  <div class="google-two-fa">
    <div class="KawaiiPopup__text">
      <p>Enable your Google Authenticator.</p>
    </div>
    <div class="custom-input mt-3" :class="{error : isErrorInPass}">
      <label>
        <input class="custom-input__input" :type="showPass? 'text' : 'password'"
               v-model="password" required>
        <span class="custom-input__content">
          <span
              class="custom-input__text"
          >Password
          </span>
        <span class="custom-input__icon">
          <button
              @click="showPassword"
              :class="!showPass ? 'pass-toggle active' : 'pass-toggle'"
          >
          </button>
        </span>
        </span>
      </label>
      <div class="error-msg" >
        <p>Wrong data!</p>
      </div>
    </div>
    <div class="mt-3" :class="{error : isErrorInCode}">
      <TwoFaGoogleAuthForm @twaCode="getTwoFa"/>
      <div class="error-msg" >
        <p>Wrong code!</p>
      </div>
    </div>

  </div>
</template>

<script>
//import {mapActions} from 'vuex'
import API from '@/api/api';
import TwoFaGoogleAuthForm from "./TwoFaGoogleAuthForm";

export default {
  name: "StepFour",
  components: {
    TwoFaGoogleAuthForm,
  },
  data() {
    return {
      code: null,
      password: '',
      actionType: 'login',
      clearField: false,
      showPass: false,
      isErrorInPass: false,
      isErrorInCode: false,
    }
  },
  props: {
    confirm: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
  watch: {
    confirm(newValue, oldValue) {
      this.send();
    }
  },
  methods: {
    send() {
      let enableTwoFaDTO = {
        password: this.password,
        code: this.code
      };

      API.enable2FA(enableTwoFaDTO)
          .then(res => {
            if (res.data.status === 400) {
              this.isErrorInCode = true;
            } else if (res.data.status === 403){
              this.isErrorInPass = true;
            } else {
              this.closeSuccessWindow();
            }
          })
          .catch(err => {
            this.showErrors()
            //this.$modalWindow = { type: err.message };
          })

    },
    showPassword() {
      this.showPass = !this.showPass;
    },
    showErrors() {
      this.isErrorInPass = true;
      this.isErrorInCode = true;
      setTimeout(() => {
        this.isErrorInPass = false;
        this.isErrorInCode = false;
      }, 3000);
    },
    getTwoFa(twoFa){
      this.code = twoFa;
    },
    closeSuccessWindow() {
      this.$emit('success', true);
    }
  },
  mounted() {
  }
}
</script>

<style scoped>

</style>
