<template>
	<header class="header">
		<router-link to="profile" class="mobile-logo">
			<img src="@/assets/img/logo.svg" alt=""
		/></router-link>
		<div class="user-short ml-auto">
			<router-link to="profile" class="user-short__icon">
				<img src="@/assets/img/user-img.jpg" alt="" />
			</router-link>
			<div class="user-short__content">
				<router-link to="profile">Mike Smith</router-link>
			</div>
			<div class="user-short__drop">
				<ul>
<!--					<li><router-link to="login" @click="goToLoginPage">Log out</router-link></li>-->
          <li><a @click="goToLoginPage">Log out</a></li>
				</ul>
			</div>
		</div>
	</header>
</template>

<script>
import { mapState } from 'vuex';

export default {
	name: 'TheHeader',
  components:{
  },
  data() {
    return {
      isShow: false,
    }
  },
  computed: {
    ...mapState({
      //avatarUrl: state => state.user.avatar.avatar,
    }),
  },
  methods: {
    goToLoginPage() {
      localStorage.removeItem('token');
      this.$router.push({name: 'Login'});
    },
    // setLocale(locale) {
    //   import(`../plugins/lang/${locale}.json`).then((messages) => {
    //     this.$i18n.setLocaleMessage(locale, messages);
    //     this.$i18n.locale = locale;
    //     document.title = this.$t("page--title");
    //     localStorage.lang = locale;
    //   });
    // },
    // toggleMobileUserCard(e) {
    //   const isClickOnTarget = this.$refs.mobileUserCard.contains(e.target);
    //
    //   if ((!this.isShow && isClickOnTarget) || (this.isShow && !isClickOnTarget)) {
    //     this.isShow = !this.isShow;
    //   }
    // },
  },
  mounted() {
    window.addEventListener('click', this.toggleMobileUserCard);
  },
  beforeDestroy() {
    window.removeEventListener('click', this.toggleMobileUserCard);
  },
};
</script>

<style scoped></style>
