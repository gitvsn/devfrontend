<template>
	<div class="KawaiiPopup-container">
		<div class="KawaiiPopup-bg"></div>
		<div class="KawaiiPopup-slide">
			<div class="KawaiiPopup">
				<button @click="closeWindow" class="KawaiiPopup__close"></button>
				<div class="popup-result">
					<div class="popup-result__icon">
						<img src="@/assets/img/success-icon.svg" alt="" />
					</div>
					<div class="KawaiiPopup__title mt-3">
						<p v-if="type === CHECK_MAIL">Please check your mail</p>
						<p v-if="type === PASSWORD_CHANGED">
							Your password has been successfully changed
						</p>
						<p v-if="type === DATA_SAVED">
							Your data has been saved successfully
						</p>
					</div>
					<button type="button" class="my-btn" @click="closeWindow">
						<span>OK</span>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
const CHECK_MAIL = 'ch_m';
const PASSWORD_CHANGED = 'ps_ch';
const DATA_SAVED = 'dt_sv';
export default {
	name: 'SuccessModal',
	methods: {
		closeWindow() {
			this.show = false;
			this.$emit('close');
		},
	},
	data() {
		return {
			show: false,
			type: null,
			CHECK_MAIL,
			PASSWORD_CHANGED,
			DATA_SAVED,
		};
	},
	watch: {
		$modalWindow(newValue, oldValue) {
			this.type = newValue.type;
			this.show = !this.show;
		},
	},
};
</script>

<style scoped></style>
