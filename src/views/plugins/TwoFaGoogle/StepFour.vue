<template>

  <div class="google-two-fa">
    <div class="KawaiiPopup__text">
      <p>Enable your Google Authenticator.</p>
    </div>
    <div class="custom-input mt-3">
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
      <div class="error-msg">
        <p>User is not found</p>
      </div>
    </div>
    <div class="mt-3">
      <TwoFaGoogleAuthForm />
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
      twaCode: '',
      password: '',
      actionType: 'login',
      clearField: false,
      showPass: false,
      isErrors: false,
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
    onUpdateCode(code) {
      this.twaCode = code;
    },
    send() {
      let enableTwoFaDTO = {
        password: this.password,
        code: localStorage.getItem("twaCode")
      };

      API.enable2FA(enableTwoFaDTO)
          .then(res => {
            if (res.data.status !== 200) {
              this.showErrors()
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
      this.isErrors = true;
      setTimeout(() => {
        this.isErrors = false;
      }, 3000);
    },
    closeSuccessWindow() {
      // this.$modalWindow = {type: 'error'};
      this.$emit('success', true);
    }
  },
  mounted() {
  }
}
</script>

<style scoped>

</style>
