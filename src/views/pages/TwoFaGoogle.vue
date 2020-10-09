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
      <button class="my-btn w-100 mt-3" @click="onSubmit"><span>submit</span></button>
    </div>

  </div>
</template>

<script>
import TwoFaGoogleAuthForm from "../plugins/TwoFaGoogle/TwoFaGoogleAuthForm";
import API from '@/api/api';

export default {
  name: 'TwoFaGoogle',
  components: {
    TwoFaGoogleAuthForm,
  },
  methods: {
    onSubmit() {
      API.confirmLogin(this.code)
          .then((res) => {
            this.goToLDashboardPage();
          })
          .catch((err) => {
            localStorage.removeItem("token");
            if (err.response && err.response.status === 400) {
              this.setError('invalid_code')
            } else {
              alert(err.message)
              //this.$modalWindow = { type: err.message };
            }
          });
    },
    // enteredLastValue(value) {
    //     this.twaCode = value;
    //     this.authorize();
    // },
    goToLDashboardPage() {
      this.$router.push({name: "Dashboard"});
    },
  },
  data() {
    return {
      code : "dsfa",
      clearField: false
    }
  }
}
</script>
<style lang="scss">

</style>
