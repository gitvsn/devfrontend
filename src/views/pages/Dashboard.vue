<template>
	<div class="dashboard-page">
		<div class="page-title">
			<p>Dashboard</p>
		</div>
		<div class="content">
			<div class="content__wrap">
				<div class="box dashboard-wallet mb-3">
					<div class="title">
						<p>My wallet</p>
					</div>
					<div class="my-wallet">
						<div class="custom-input w-100">
							<label>
								<input
									type="text"
									class="custom-input__input "
									v-model="userAddress"
									readonly
									required
								/>
							</label>
						</div>
						<button class="copy-btn" @click="copy">
							<img src="@/assets/img/copy.svg" alt="" /> copy
						</button>
            <div class="tooltip-result">
              <div class="d-flex align-items-center">
                <img src="@/assets/img/copy-icon-ok.svg" alt="" class="mr-2">
                <p>Text copied!</p>
              </div>
            </div>
					</div>
				</div>
				<div class="box balance-box-wrapper mb-3 mb-xl-0">
					<div class="d-md-flex align-items-center mb-3">
						<div class="title m-0">
							<p>Balance history</p>
						</div>
						<!-- <nav class="chart-nav ml-md-auto mt-2 mt-md-0">
							<ul>
								<li class="active">
									<button type="button">1d</button>
								</li>
								<li>
									<button type="button">7d</button>
								</li>
								<li>
									<button type="button">1m</button>
								</li>
								<li>
									<button type="button">3m</button>
								</li>
								<li>
									<button type="button">1y</button>
								</li>
							</ul>
						</nav> -->
					</div>
					<line-chart :height="280" :data="linearData" :label="linearLabel" />
				</div>
			</div>
			<div class="content__side">
				<div class="balance-box  mb-3">
					<div class="d-flex align-items-center">
						<div class="balance-box__icon">
							<img src="@/assets/img/balance-icon.svg" alt="" />
						</div>
						<div class="balance-box__title ml-3">
							<p>Balance</p>
						</div>
					</div>
					<div class="balance-box__value">
						<p>
							<span>{{ userBalance }}</span> VSN
						</p>
					</div>
				</div>
				<div class="box balance-box-wrapper balance-statistic">
					<div class="title">
						<p>Balance statistics</p>
					</div>
					<div>
						<doughnut :data="data" :label="label" />
					</div>
					<ul class="chart-controls mt-3">
						<li>
							<p>
								<span style="background: #6237A0;"></span>
								Deposit
								<strong>{{deposit}} VSN</strong>
							</p>
						</li>
						<li>
							<p>
								<span style="background: #D932C5;"></span>
								Withdraw
								<strong>{{withdraw}} VSN</strong>
							</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<ModalWindowSuccess />
	</div>
</template>

<script>
import {mapActions, mapState} from 'vuex';
import API from '@/api/api';
import ModalWindowSuccess from '@/components/SuccessModal';
import Doughnut from '../plugins/Charts/Doughnut';
import LineChart from '../plugins/Charts/Line';

export default {
	name: 'Dashboard',
	data() {
		return {
			data: [50, 50],
			label: ['Deposit', 'Send'],
			linearData: [10000, 12000, 15000, 19000, 21000, 30000],
			linearLabel: [
				'10:59 PM',
				'11:59 PM',
				'12:59 PM',
				'1:59 AM',
				'2:59 AM',
				'3:59 AM',
			],
      deposit: 0,
      withdraw: 0,
		};
	},
	components: {
		Doughnut,
		LineChart,
		ModalWindowSuccess,
	},
	computed: {
		...mapState({
			userBalance: (state) => state.user.balance,
			userAddress: (state) => state.user.address,
		}),
	},
	methods: {
		...mapActions({
			getUserWallet: 'getUserWallet',
		}),
    getTrInfo(){
      API.getTrInfo()
          .then(res => {
            if (res.data.status === 200) {
              let deposit = res.data.response.deposit;
              let withdraw = res.data.response.withdraw;

              this.deposit = deposit;
              this.withdraw = withdraw;

              let sum = deposit + withdraw;
              let depositPercent = deposit !== 0 ? (deposit*100)/sum : 50;
              let withdrawPercent = withdraw !== 0 ? (withdraw*100)/sum : 50;
              this.data = [depositPercent , withdrawPercent];
            }
          })
          .catch(err => {
            console.log(err);
          });
    },
		copy() {
			this.$clipboard(this.userAddress);
			this.$modalWindowSuccess = { type: 'Text copied!' };
		},
	},
	mounted() {
		this.getUserWallet();
		this.getTrInfo();
	},
};
</script>

<style scoped lang="scss"></style>
