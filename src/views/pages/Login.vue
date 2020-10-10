<template>
	<TwoFaGoogle @close="closeModalWindow" v-if="open2fa" />
	<div class="auth-box__content" v-else>
		<div class="auth-box__title">
			<p>Authorization</p>
		</div>
		<nav class="auth-nav">
			<ul>
				<li class="active">
					<button type="button" @click="$router.push('login')">
						Authorization
					</button>
				</li>
				<li>
					<button type="button" @click="$router.push('register')">
						Registration
					</button>
				</li>
			</ul>
		</nav>
		<div class="custom-input">
			<label>
				<input
					type="text"
					class="custom-input__input"
					v-model="email"
					@keydown.enter="login"
					required
				/>
				<span class="custom-input__content">
					<span class="custom-input__text">E-mail</span>
					<span class="custom-input__icon">
						<svg
							width="16"
							height="12"
							viewBox="0 0 16 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M15.6969 3.9625C15.8187 3.86563 16 3.95625 16 4.10938V10.5C16 11.3281 15.3281 12 14.5 12H1.5C0.671875 12 0 11.3281 0 10.5V4.1125C0 3.95625 0.178125 3.86875 0.303125 3.96562C1.00312 4.50937 1.93125 5.2 5.11875 7.51562C5.77813 7.99687 6.89062 9.00938 8 9.00313C9.11563 9.0125 10.25 7.97813 10.8844 7.51562C14.0719 5.2 14.9969 4.50625 15.6969 3.9625ZM8 8C8.725 8.0125 9.76875 7.0875 10.2937 6.70625C14.4406 3.69688 14.7562 3.43437 15.7125 2.68437C15.8937 2.54375 16 2.325 16 2.09375V1.5C16 0.671875 15.3281 0 14.5 0H1.5C0.671875 0 0 0.671875 0 1.5V2.09375C0 2.325 0.10625 2.54062 0.2875 2.68437C1.24375 3.43125 1.55938 3.69688 5.70625 6.70625C6.23125 7.0875 7.275 8.0125 8 8Z"
								fill="#C6C6D7"
							/>
						</svg>
					</span>
				</span>
			</label>
		</div>
		<div class="custom-input mt-4">
			<label>
				<input
					:type="fieldType ? 'text' : 'password'"
					v-model="password"
					@keydown.enter="login"
					class="custom-input__input"
					required
				/>
				<span class="custom-input__content">
					<span class="custom-input__text">Password</span>
					<span class="custom-input__icon">
						<button
							type="button"
							class="pass-toggle"
							:class="{ active: !fieldType }"
							@click="fieldType = !fieldType"
						></button>
					</span>
				</span>
			</label>
			<div
				class="error-msg"
				:style="
					errors.includes('password') ? 'display: block' : 'display: none'
				"
			>
				<p>Password or email is incorrect</p>
			</div>
		</div>
		<div class="checkbox mt-4">
			<label>
				<input type="checkbox" name="remember" :checked="safeData"  @click="addDataToLocalStorage()"/>
				<span class="checkbox__content">
					<span class="checkbox__box"></span>
					<span class="checkbox__text">Remember me</span>
				</span>
			</label>
		</div>
		<button
			type="button"
			class="my-btn w-100 mt-4"
			v-bind:disabled="isPending"
			@click="login"
		>
			<span>
				sign in <img class="ml-3" src="@/assets/img/right-arrow.svg" alt="" />
			</span>
		</button>
		<div class="text-center mt-4">
			<router-link to="restore-password" class="custom-link auth-box__link">
				Forgot your password?</router-link
			>
		</div>
		<modal-window />
		<modal-window-success />
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import API from '@/api/api';
import TwoFaGoogle from '@/views/pages/TwoFaGoogle';
import ModalWindow from '@/components/ErrorModal';
import ModalWindowSuccess from '@/components/SuccessModal';
export default {
	name: 'Login',
	components: { TwoFaGoogle, ModalWindow, ModalWindowSuccess },
	data() {
		return {
			email: localStorage.getItem("email") !== undefined ? localStorage.getItem("email") : '',
			password: '',
			fieldType: false,
			isPending: false,
			open2fa: false,
      safeData: localStorage.getItem("email") !== undefined,
			errors: [],
		};
	},
	computed: {
		...mapGetters({
			getRoute: 'user/getRoute',
		}),
	},
	methods: {
		login() {
			let payload = {
				email: this.email,
				password: this.password,
			};

			API.login(payload)
				.then((response) => {
					if (response.data.status === 200) {
						if (!response.data.response.twoFaEnable) {
							localStorage.token = 'Bearer_' + response.data.response.token;
							this.goToLDashboardPage();
						} else {
							localStorage.email = response.data.response.username;
							this.open2fa = true;
						}
						return;
					}

					switch (response.data.error) {
						case 'Error authorization':
							return this.errors.push('password');

						default:
							this.$modalWindowError = { type: response.data.error };
					}
				})
				.catch((err) => {
					this.$modalWindowError = { type: err.message };
				})
				.finally(() => {
					this.isPending = false;
				});
		},
    addDataToLocalStorage(){
		  if(!this.safeData && this.email !== null){
        localStorage.setItem("email", this.email);
        this.safeData = true;
      } else{
        localStorage.removeItem("email");
        this.safeData = false;
      }
    },
		closeModalWindow() {
			this.open2fa = false;
		},
		goToLDashboardPage() {
			this.$router.push({ name: 'Dashboard' });
		},
	},
};
</script>

<style scoped lang="scss"></style>
