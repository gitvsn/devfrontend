<template>
	<div class="google-two-fa">
		<div class="KawaiiPopup__text">
			<p>
				Scan this QR code in the<br />
				Google Authenticator app
			</p>
		</div>
		<div class="qr-box">
      <Preloader v-if="this.isPending"/>
			<div class="qr-box__value" v-else>
				<img style="height: 120px" :src="qrCodeLink" alt="" />
			</div>
			<div class="twoFaText">
				<p>
					If you are unable to scan the QR code, please enter this code manually
					into the app.<br />
					<strong class="d-block mt-3">
						{{ codeSecret }}
					</strong>
				</p>
			</div>
		</div>
		<ModalWindowError />
	</div>
</template>

<script>
import API from '@/api/api';
import ModalWindowError from '@/components/ErrorModal';
import Preloader from "@/views/plugins/Preloader";
export default {
	name: 'StepTwo',
	data() {
		return {
		  isPending: true,
			qrCodeLink: '',
			codeSecret: '',
		};
	},
	components: {Preloader, ModalWindowError },
	mounted() {
		API.get2FAQrLink()
			.then((res) => {
				this.qrCodeLink = res.data.response;
        this.isPending = false;
			})
			.catch((err) => {
				this.$modalWindowError = { type: err.message };
			});
		API.get2FASecret()
			.then((res) => {
				this.codeSecret = res.data.response;
			})
			.catch((err) => {
				this.$modalWindowError = { type: err.message };
			});
	},
};
</script>

<style scoped lang="scss"></style>
