<template>
	<div class="auth-box__content">
		<div class="auth-box__title">
			<p>Reset password</p>
			<div class="auth-box__title-text mt-2">
				<p>Set new password for your account</p>
			</div>
		</div>
		<div class="custom-input">
			<label>
				<input
					:type="showField.password ? 'text' : 'password'"
					v-model="password"
					@keydown.enter="checkEmail"
					class="custom-input__input"
					required
				/>
				<span class="custom-input__content">
					<span class="custom-input__text">Password</span>
					<span class="custom-input__icon">
						<button
							class="pass-toggle"
							@click="showField.password = !showField.password"
							:class="{ active: !showField.password }"
						></button>
					</span>
				</span>
			</label>
			<div class="error-msg">
				<p>User is not found</p>
			</div>
		</div>
		<div class="custom-input mt-4">
			<label>
				<input
					:type="showField.repeatPassword ? 'text' : 'password'"
					v-model="repeatPassword"
					@keydown.enter="checkEmail"
					class="custom-input__input"
					required
				/>
				<span class="custom-input__content">
					<span class="custom-input__text">Repeat password</span>
					<span class="custom-input__icon">
						<button
							class="pass-toggle"
							@click="showField.repeatPassword = !showField.repeatPassword"
							:class="{ active: !showField.repeatPassword }"
						></button>
					</span>
				</span>
			</label>
			<div class="error-msg">
				<p>User is not found</p>
			</div>
		</div>
		<button
			type="button"
			class="my-btn w-100 mt-4"
			v-bind:disabled="isPending"
			@click="checkEmail"
		>
			<span>
				Confirm reset
			</span>
		</button>
		<div class="text-center mt-4">
			<router-link to="login" class="custom-link auth-box__link"
				>Back to login
			</router-link>
		</div>
		<ModalWindowSuccess @close="goToLoginPage()" />
		<ModalWindowError />
	</div>
</template>

<script>
import { mapActions } from 'vuex';
import API from '@/api/api';
import ModalWindowSuccess from '@/components/SuccessModal';
import ModalWindowError from '@/components/ErrorModal';

export default {
	name: 'SetNewPassword',
	components: { ModalWindowSuccess, ModalWindowError },
	data() {
		return {
			password: '',
			repeatPassword: '',
			showField: {
				password: false,
				repeatPassword: false,
			},
			isPending: false,
		};
	},
	methods: {
		...mapActions({
			restorePasswordCheckToken: 'user/restorePasswordCheckToken',
		}),
		goToLoginPage() {
			this.$router.push({ name: 'Login' });
		},
		showPassword() {
			this.passwotdHTMLtype =
				this.passwotdHTMLtype === 'text' ? 'password' : 'text';
		},
		checkEmail() {
			if (this.validPassword()) {
				let token = localStorage.tim;
				this.isPending = true;

				API.restorePasswordCheckToken({ token: token, password: this.password })
					.then((res) => {
						localStorage.removeItem('tim');
						this.$modalWindowSuccess = { type: 'Password changed!' };
					})
					.catch((err) => {
						this.setError(err);
					})
					.finally(() => {
						this.isPending = false;
					});
			}
		},
		setError(value) {
			this.error = value;
		},
		validPassword() {
			if (
				this.password === null ||
				this.password === '' ||
				this.password === undefined
			) {
				alert('Wrong password!');
				return false;
			}

			if (this.password !== this.repeatPassword) {
				alert('Wrong password!');
				return false;
			}
			return true;
		},
	},
};
</script>

<style scoped lang="scss"></style>
