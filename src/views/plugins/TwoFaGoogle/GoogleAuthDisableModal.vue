<template>
  <div class="KawaiiPopup-container">
    <div class="KawaiiPopup-bg"></div>
    <div class="KawaiiPopup-slide">
      <div class="KawaiiPopup TwoFaPopup">
        <button @click="closeWindow()" class="KawaiiPopup__close"></button>
        <div class="KawaiiPopup__title mb-3">
          <p>Google authenticator</p>
        </div>
        <div class="auth-alert-msg">
          <img src="@/assets/img/alert-shield.svg" alt="">
          <p>
            <strong>Your account is more secure
              if password and Google Authenticator are enabled.
            </strong>
            Disabling Google Authenticator makes it easier to hack your account.
          </p>
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
    </div>
  </div>
</template>

<script>
import TwoFaGoogleAuthForm from "./TwoFaGoogleAuthForm";
import {mapActions, mapState} from 'vuex'
import SuccessModal from "../../../components/SuccessModal";
import ErrorModal from "../../../components/ErrorModal";

export default {
  name: "GoogleAuthDisableModal",
  components: {

    TwoFaGoogleAuthForm
  },
  data() {
    return {
      twaCode: '',
      password: '',
      showPass: false,
      clearTwoFa: false,
      isErrors: false,
    }
  },
  // props:{
  //     confirm:{
  //         type : Boolean,
  //         required: false,
  //         default: false,
  //     }
  // },
  // watch: {
  //     confirm(newValue, oldValue) {
  //         this.send();
  //     }
  // },
  methods: {
    ...mapActions({
      disableTwoFa: 'user/disableTwoFa',
    }),
    send() {
      this.validation();
      let disableTwoFaDTO = {
        password: this.password,
        code: this.twaCode
      };

      this.disableTwoFa(disableTwoFaDTO)
          .then(res => {
            if (res.data.status !== 200) {
              this.clearTwoFa = !this.clearTwoFa;
              this.showErrors()
            } else {
              this.closeSuccessWindow()
            }
          })

    },
    getTwaCode(code) {
      this.twaCode = code;
    },
    showPassword() {
      this.showPass = !this.showPass;
    },
    showErrors() {
      this.isErrors = true;
      setTimeout(() => {
        this.isErrors = false;
      }, 2300)
    },
    // closeSuccessWindow() {
    //   this.$modalWindow = {type: 'error'};
    //   this.$emit('closeWindow');
    // },
    closeWindow(isSuccess) {
      this.$emit("closeWindow", isSuccess);
    },
    validation() {
      return this.passwordValid && this.passwordTwaCode;
    }
  },
  // computed: {
  //   passwordValid() {
  //     if (this.password === null || this.password === undefined) {
  //       return false;
  //     }
  //     return this.password.replace(/\s/g, '').length > 4;
  //   },
  //   passwordTwaCode() {
  //     if (this.twaCode === null || this.twaCode === undefined) {
  //       return false;
  //     }
  //     return this.twaCode.replace(/\s/g, '').length === 6;
  //   }
  // },
  // mounted(){}
}
</script>

<style scoped lang="scss">
.modal {
  max-width: 400px;
}

.google-auth-steps {
  height: 100%;
}

.notice-container {
  display: flex;
  margin-top: 35px;

  img {
    margin-right: 22px;
  }

  .notice-text {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .notice-title {
      font-size: 11px;
      color: #000;
      margin-bottom: 10px;
    }

    .notice-subtitle {
      font-size: 11px;
      color: #AFB2C1;
    }
  }
}

.disable-google-auth {
  margin-top: 20px;
  border-radius: 15px;
  background-color: #f5f6fa;
  padding: 30px 40px;

  .input-container {
    border-bottom: 1px solid rgba(175, 178, 193, 0.2);
    margin-bottom: 24px;
    position: relative;

    .label {
      font-size: 11px;
      text-transform: capitalize;
      margin-bottom: 3px;
    }

    input {
      font-size: 13px;
      font-weight: bold;
      color: #000000;
      width: 100%;
      border: none;
      outline: none;
      height: 20px;
      display: flex;
      align-items: center;
      margin-bottom: 5px;
      background: none;
    }

    .show-password {
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }
}

.confirm-btn-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;

  .confirm-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 43px;
    font-size: 13px;
    font-weight: bold;
    color: #ffffff;
    cursor: pointer;
    text-transform: uppercase;
    border-radius: 100px;
    background-color: #33aa7e;

  }
}

.ga-code-cont {
  display: flex;
  flex-wrap: wrap;
  margin-right: -5px;
  margin-left: -5px;
  align-items: center;

  .title {
    padding-right: 5px;
    padding-left: 5px;
    font-size: 12px;
  }

  .ga-code {
    padding-right: 5px;
    padding-left: 5px;

    .form-control {
      padding: .375rem .85rem;
    }
  }

  .error-message {
    display: none;
    justify-content: center;
    margin-top: 12px;
    text-transform: uppercase;
    font-size: 11px;
    color: #e33e23;
    width: 100%;
    background-color: rgba(227, 62, 35, 0.1);
    padding: 3px 0;
    position: relative;

    .icon {
      cursor: pointer;
      position: relative;
      width: 10px;
      display: flex;
      align-items: center;

      &:before, &:after {
        position: absolute;
        content: " ";
        height: 10px;
        width: 2px;
        background-color: #e33e23;
      }

      &:before {
        transform: rotate(45deg);
      }

      &:after {
        transform: rotate(-45deg);
      }
    }
  }
}
</style>
