<template>
  <div class="google-two-fa">
    <div class="KawaiiPopup__text">
      <p>Please save this Key on paper. This Key will allow you to recover your Google Authenticator in case of phone
        loss.</p>
    </div>
    <div class="twoFaText mt-4">
      <p>Resetting your Google Authentication requires opening a support ticket and takes at least 7 days to process.
        <strong class="d-block mt-3">
<!--          {{codeSecret}}-->
        </strong></p>
    </div>
  </div>
</template>

<!--<script>-->
<!--    import { mapGetters, mapMutations, mapActions } from 'vuex'-->

<!--    export default {-->
<!--        name: "StepThree",-->
<!--      data(){-->
<!--        return {-->
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
<!--          changeUserTwa: 'user/changeUserTwa',-->
<!--          loadTwaLink: 'user/loadTwaLink',-->
<!--          loadUserSettings: 'user/loadUserSettings',-->
<!--          getUserInfo: 'user/getUserInfo',-->
<!--        }),-->
<!--      },-->
<!--      mounted(){-->
<!--        this.getUserInfo().then(res => {-->
<!--          this.loadUserSettings().then(res => {-->
<!--            this.loadTwaLink().then(res => {-->
<!--              this.codeSecret = this.getUserSecret;-->
<!--            })-->
<!--          })-->
<!--        });-->

<!--      }-->
<!--    }-->
<!--</script>-->

<style scoped lang="scss">

</style>
