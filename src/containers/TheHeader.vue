<template>
	<header class="header">
		<router-link to="profile" class="mobile-logo">
			<img src="@/assets/img/logo.svg" alt=""
		/></router-link>
		<div class="user-short ml-auto">
			<router-link to="profile" class="user-short__icon">
				<img v-if="!avatarUrl" src="@/assets/img/user-default.svg" alt="" />
				<img v-else :src="avatarUrl" alt="" />
			</router-link>
			<div class="user-short__content">
				<router-link to="profile">{{ userInfo.name }} {{ userInfo.surname }}</router-link>
			</div>
			<div class="user-short__drop">
				<ul>
					<li><a @click="goToLoginPage">Log out</a></li>
				</ul>
			</div>
		</div>
	</header>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
	name: 'TheHeader',
	components: {},
	data() {
		return {
			isShow: false,
		};
	},
	computed: {
		...mapState({
			avatarUrl: (state) => state.user.avatar.avatar,
      userInfo: state => state.user.personalInfo,
		}),
	},
	methods: {
		...mapActions({
			setAvatar: 'setAvatar',
      setPersonalInfo: "setPersonalInfo",
		}),
		goToLoginPage() {
			localStorage.removeItem('token');
			this.$router.push({ name: 'Login' });
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
		this.setAvatar();
		this.setPersonalInfo();
	},
	beforeDestroy() {
		window.removeEventListener('click', this.toggleMobileUserCard);
	},
};
</script>

<style scoped></style>
