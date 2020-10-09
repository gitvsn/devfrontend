<template>
	<div class="auth-box__content">
		<div class="auth-box__title">
			<p>
				Two-factor<br />
				authentication
			</p>
			<div class="auth-box__title-text mt-2">
				<p>Google Authentication</p>
			</div>
		</div>
		<div class="google-auth" :class="{error : error}">
			<TwoFaGoogleAuthForm @twaCode="twoFa" />
			<button class="my-btn w-100 mt-3" @click="onSubmit">
				<span>submit</span>
			</button>
      <div class="error-msg" >
        <p>Wrong code!</p>
      </div>
		</div>
		<ModalWindowError />
	</div>
</template>

<script>
import TwoFaGoogleAuthForm from '../plugins/TwoFaGoogle/TwoFaGoogleAuthForm';
import API from '@/api/api';
import ModalWindowError from '@/components/ErrorModal';
export default {
	name: 'TwoFaGoogle',
	components: { TwoFaGoogleAuthForm, ModalWindowError },
	methods: {
		onSubmit() {
			API.confirmLogin(this.code)
				.then((res) => {
					this.goToLDashboardPage();
				})
				.catch((err) => {
					localStorage.removeItem('token');
					if (err.response && err.response.status === 400) {
						this.error = true;
					} else {
						this.$modalWindowError = { type: err.message };
					}
				});
		},
		twoFa(twoFa) {
			this.code = twoFa;
		},
		goToLDashboardPage() {
			this.$router.push({ name: 'Dashboard' });
		},
	},
	data() {
		return {
			code: null,
			clearField: false,
      error: false
		};
	},
};
</script>
<style lang="scss"></style>
