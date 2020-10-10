<template>
	<div class="auth-box__content">
		<div class="auth-box__title">
			<p>Registration</p>
		</div>
		<nav class="auth-nav">
			<ul>
				<li>
					<button type="button" @click="$router.push('login')">
						Authorization
					</button>
				</li>
				<li class="active">
					<button type="button" @click="$router.push('login')">
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
					@keydown.enter="registration"
					@focus="deleteError('name')"
					v-model="name"
					required
				/>
				<span class="custom-input__content">
					<span class="custom-input__text">Name</span>
					<span class="custom-input__icon">
						<svg
							width="13"
							height="15"
							viewBox="0 0 13 15"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M6.5 7.5C8.55156 7.5 10.2143 5.82129 10.2143 3.75C10.2143 1.67871 8.55156 0 6.5 0C4.44844 0 2.78571 1.67871 2.78571 3.75C2.78571 5.82129 4.44844 7.5 6.5 7.5ZM9.1 8.4375H8.6154C7.9712 8.73633 7.25446 8.90625 6.5 8.90625C5.74554 8.90625 5.0317 8.73633 4.3846 8.4375H3.9C1.74687 8.4375 0 10.2012 0 12.375V13.5938C0 14.3701 0.623884 15 1.39286 15H11.6071C12.3761 15 13 14.3701 13 13.5938V12.375C13 10.2012 11.2531 8.4375 9.1 8.4375Z"
								fill="#C6C6D7"
							/>
						</svg>
					</span>
				</span>
			</label>
			<div
				class="error-msg"
				:style="errors.includes('name') ? 'display: block' : 'display: none'"
			>
				<p>Invalid name</p>
			</div>
		</div>
		<div class="custom-input mt-4">
			<label>
				<input
					type="text"
					class="custom-input__input"
					@keydown.enter="registration"
					@focus="deleteError('surname')"
					v-model="surname"
					required
				/>
				<span class="custom-input__content">
					<span class="custom-input__text">Surname</span>
					<span class="custom-input__icon">
						<svg
							width="13"
							height="15"
							viewBox="0 0 13 15"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M6.5 7.5C8.55156 7.5 10.2143 5.82129 10.2143 3.75C10.2143 1.67871 8.55156 0 6.5 0C4.44844 0 2.78571 1.67871 2.78571 3.75C2.78571 5.82129 4.44844 7.5 6.5 7.5ZM9.1 8.4375H8.6154C7.9712 8.73633 7.25446 8.90625 6.5 8.90625C5.74554 8.90625 5.0317 8.73633 4.3846 8.4375H3.9C1.74687 8.4375 0 10.2012 0 12.375V13.5938C0 14.3701 0.623884 15 1.39286 15H11.6071C12.3761 15 13 14.3701 13 13.5938V12.375C13 10.2012 11.2531 8.4375 9.1 8.4375Z"
								fill="#C6C6D7"
							/>
						</svg>
					</span>
				</span>
			</label>
			<div
				class="error-msg"
				:style="errors.includes('surname') ? 'display: block' : 'display: none'"
			>
				<p>Invalid surname</p>
			</div>
		</div>
		<div class="custom-input mt-4">
			<label>
				<input
					type="text"
					class="custom-input__input"
					@keydown.enter="registration"
					@focus="deleteError('email')"
					v-model="email"
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
			<div
				class="error-msg"
				:style="errors.includes('email') ? 'display: block' : 'display: none'"
			>
				<p>Incorrect email</p>
			</div>

			<div
				class="error-msg"
				:style="
					errors.includes('email-in-use') ? 'display: block' : 'display: none'
				"
			>
				<p>User with the specified email is already registered in the system</p>
			</div>
		</div>
		<div class="custom-input mt-4">
			<label>
				<input
					:type="!showField.password ? 'password' : 'text'"
					class="custom-input__input"
					@keydown.enter="registration"
					@focus="deleteError('password')"
					v-model="password"
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
			<div
				class="error-msg"
				:style="
					errors.includes('password') ? 'display: block' : 'display: none'
				"
			>
				<p>
					Password must contain mixed upper and lowercase characters and numbers
				</p>
			</div>
		</div>
		<div class="custom-input mt-4">
			<label>
				<input
					:type="!showField.repeatPassword ? 'password' : 'text'"
					class="custom-input__input"
					@keydown.enter="registration"
					@focus="deleteError('repeat_password')"
					v-model="repeatPassword"
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
			<div
				class="error-msg"
				:style="
					errors.includes('repeat_password')
						? 'display: block'
						: 'display: none'
				"
			>
				<p>Password mismatch</p>
			</div>
		</div>
		<div class="checkbox mt-4">
			<label>
				<input type="checkbox" name="remember" v-model="termOfUseChecked" />
				<span class="checkbox__content">
					<span class="checkbox__box"></span>
					<span class="checkbox__text"
						>I agree to the
						<a href="#" target="_blank">Terms and Conditions</a></span
					>
				</span>
			</label>
			<div
				class="error-msg"
				:style="errors.includes('term') ? 'display: block' : 'display: none'"
			>
				<p>You should confirm term of use</p>
			</div>
		</div>
		<button
			type="button"
			class="my-btn w-100 mt-4"
			:disabled="isPending"
			@click="registration"
		>
			<span>
				register now
				<img class="ml-3" src="@/assets/img/right-arrow.svg" alt="" />
			</span>
		</button>
		<div class="text-center mt-4">
			<router-link to="restore-password" class="custom-link auth-box__link">
				Forgot your password?
			</router-link>
		</div>
		<modal-window-error />
		<modal-window-success @close="goToLoginPage()" />
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import API from '@/api/api';
import ModalWindowError from '@/components/ErrorModal';
import ModalWindowSuccess from '@/components/SuccessModal';
export default {
	name: 'Register',
	data() {
		return {
			email: null,
			password: null,
			repeatPassword: null,
			termOfUseChecked: false,
			name: null,
			surname: null,
			errors: [],
			showField: {
				password: false,
				repeatPassword: false,
			},
			isPending: false,
		};
	},
	components: { ModalWindowError, ModalWindowSuccess },
	computed: {
		...mapGetters({
			getRoute: 'user/getRoute',
		}),
	},
	methods: {
		registration() {
			let payload = {
				email: this.email,
				password: this.password,
				//referral: null,
				name: this.name,
				surname: this.surname,
			};

			if (this.validationFields()) {
				this.isPending = true;
				API.register(payload)
					.then((response) => {
						if (response.data.status === 200) {
							this.$modalWindowSuccess = {
								type: 'Registration successful!',
							};
							return;
						}

						switch (response.data.error) {
							case 'Email is un ready in use':
								return this.errors.push('email-in-use');

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
			}
		},
		goToLoginPage() {
			this.$router.push({ name: 'Login' });
		},
		deleteError(type) {
			let index = this.errors.indexOf(type);
			this.errors.splice(index, 1);
		},
		validationFields() {
			let isValid = true;

			let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			let pass = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{4,}$/;

			this.name = this.name === null ? '' : this.name.replace(/\s/g, '');
			this.surname =
				this.surname === null ? '' : this.surname.replace(/\s/g, '');
			let latin = /[a-zA-Z]$/;

			if (
				this.name === '' ||
				!latin.test(String(this.name)) ||
				this.name.replace(/\s/g, '').length < 2
			) {
				this.errors.push('name');
				isValid = false;
			}

			if (
				this.surname === '' ||
				!latin.test(String(this.surname)) ||
				this.surname.replace(/\s/g, '').length < 2
			) {
				this.errors.push('surname');
				isValid = false;
			}

			if (!re.test(String(this.email).toLowerCase())) {
				this.errors.push('email');
				isValid = false;
			}
			if (!pass.test(String(this.password))) {
				this.errors.push('password');
				isValid = false;
			}
			if (!this.termOfUseChecked) {
				this.errors.push('term');
				isValid = false;
				let _this = this;
				setTimeout((res) => {
					_this.deleteError('term');
				}, 2300);
			}
			if (this.password !== this.repeatPassword) {
				this.errors.push('repeat_password');
				isValid = false;
			}

			return isValid;
		},
	},
};
</script>

<style scoped></style>
