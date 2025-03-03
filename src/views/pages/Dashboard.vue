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
						<div class="tooltip-result" :class="{ active: copyAddress }">
							<div class="d-flex align-items-center">
								<img src="@/assets/img/copy-icon-ok.svg" alt="" class="mr-2" />
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
								<strong>{{ deposit }} VSN</strong>
							</p>
						</li>
						<li>
							<p>
								<span style="background: #D932C5;"></span>
								Withdraw
								<strong>{{ withdraw }} VSN</strong>
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
import { mapActions, mapState } from 'vuex';
import API from '@/api/api';
import ModalWindowSuccess from '@/components/SuccessModal';
import Doughnut from '../plugins/Charts/Doughnut';
import LineChart from '../plugins/Charts/Line';

export default {
	name: 'Dashboard',
	data() {
		return {
			data: [50, 50],
			label: ['Deposit', 'Withdraw'],
			linearData: null,
			linearLabel: null,
			deposit: 0,
			withdraw: 0,
			copyAddress: false,
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
    getTransactionsData(){
      API.getTrChartInfo()
          .then(res => {
            if (res.data.status === 200) {


              let keys = [];
              for (let k in res.data.response) {
                if (res.data.response.hasOwnProperty(k)) {
                    keys.push(parseInt(k));
                }
              }

              keys.sort();

              this.transitions = res.data.response;

              let lab = [];
              let data = [];

              let i = 0;
              for (const property in this.transitions) {
                data.push(this.transitions[keys[i]]);
                lab.push(new Date(keys[i]).customFormat("#DD# #MMM#"));
                i++;
              }
              this.linearData = data;
              this.linearLabel = lab;
            }
          })
          .catch(err => {
            console.log(err);
          });
    },
		getTrInfo() {
			API.getTrInfo()
				.then((res) => {
					if (res.data.status === 200) {
						this.deposit = res.data.response.deposit;
						this.withdraw = res.data.response.withdraw;

						if (this.deposit === 0 && this.withdraw === 0) {
							this.data = [50, 50];
							return;
						}

						let sum = this.deposit + this.withdraw;
						let depositPercent = (this.deposit * 100) / sum;
						let withdrawPercent = (this.withdraw * 100) / sum;

						this.data = [
							this.rounding(depositPercent),
							this.rounding(withdrawPercent),
						];
					}
				})
				.catch((err) => {
					console.log(err);
				});
		},
		rounding(value) {
			if (value === null || value === undefined) {
				return value;
			} else {
				return Number(value.toFixed(2) > 0 ? Number(value.toFixed(2)) : 0);
			}
		},
		copy() {
			this.$clipboard(this.userAddress);
			this.copyAddress = true;
			setTimeout(() => {
				this.copyAddress = false;
			}, 2000);
			// this.$modalWindowSuccess = { type: 'Text copied!' };
		},
	},
	mounted() {
		this.getUserWallet();
		this.getTrInfo();
		this.getTransactionsData();
	},
};
</script>

<style scoped lang="scss"></style>
