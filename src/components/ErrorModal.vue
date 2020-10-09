<template>
	<div v-show="show" class="KawaiiPopup-container">
		<div class="KawaiiPopup-bg"></div>
		<div class="KawaiiPopup-slide">
			<div class="KawaiiPopup">
				<button @click="closeWindow" class="KawaiiPopup__close"></button>
				<div class="popup-result">
					<div class="popup-result__icon">
						<img src="@/assets/img/error-icon.svg" alt="" />
					</div>
					<div class="KawaiiPopup__title mt-3">
						<p>{{ type }}</p>
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
export default {
	name: 'ErrorModal',
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
		};
	},
	watch: {
		$modalWindowError(newValue, oldValue) {
			this.type = newValue.type;
			this.show = !this.show;
		},
	},
};
</script>

<style scoped></style>
