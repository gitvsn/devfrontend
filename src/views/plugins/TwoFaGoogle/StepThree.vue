<template>
  <div class="google-two-fa">
    <div class="KawaiiPopup__text">
      <p>Please save this Key on paper. This Key will allow you to recover your Google Authenticator in case of phone
        loss.</p>
    </div>
    <div class="twoFaText mt-4">
      <p>Resetting your Google Authentication requires opening a support ticket and takes at least 7 days to process.
        <strong class="d-block mt-3">
          {{ codeSecret }}
        </strong></p>
    </div>
  </div>
</template>

<script>
import API from '@/api/api';

export default {
  name: "StepThree",
  data() {
    return {
      codeSecret: '',
    }
  },
  mounted() {
    API.get2FASecret()
        .then(res => {
          this.codeSecret = res.data.response;
        })
        .catch(err => {
          this.$modalWindow = {type: err.message};
        })

  }
}
</script>

<style scoped lang="scss">

</style>
