<script>
import { Line } from 'vue-chartjs';
import API from "@/api/api";

export default {
	extends: Line,
	props: ['data', 'label'],
	mounted() {
		this.renderLineChart();
    this.getTransactionsData();
	},
	computed: {
		chartData: function() {
			return this.data;
		},
	},
	methods: {
		renderLineChart: function() {
			this.renderChart(
				{
					labels: this.label,
					datasets: [
						{
							data: this.chartData,
              transitions: [],
							pointRadius: [0],
							pointHitRadius: [0],
							fill: false,
							backgroundColor: 'rbga(0,0,0,1)',
							borderColor: 'rgba(98,55,160,1)',
							pointRadius: 0,
							borderDashOffset: 0,
						},
					],
				},
				{
					legend: {
						display: false,
					},
					plugins: {
						datalabels: {
							display: false,
						},
					},
					responsive: true,
					maintainAspectRatio: false,
					scales: {
						yAxes: [
							{
								display: 'none',
								showLabelBackdrop: false,
								position: 'right',
								ticks: {
									stepSize: 10000,
								},
							},
							{
								gridLines: {
									color: '#F3F0FA',
								},
							},
						],
						xAxes: [
							{
								gridLines: {
									display: false,
								},
							},
						],
					},
				}
			);
		},
    getTransactionsData(){
      API.getTrChartInfo()
          .then(res => {
            if (res.data.status === 200) {
              this.transitions = res.data.response;
            }
          })
          .catch(err => {
            console.log(err);
          });
    },
		isArrayContentSame(a, b) {
			if (Array.isArray(a) && Array.isArray(b) && a.length == b.length) {
				a = a.concat().sort();
				b = b.concat().sort();
				return a.reduce((acc, e, i) => acc && e === b[i], true);
			} else {
				return false;
			}
		},
	},
	watch: {
		data: function(newData, oldData) {
			if (oldData.length == 0 || !this.isArrayContentSame(oldData, newData)) {
				this.$data._chart.destroy();
				//this.renderChart(this.data, this.options);
				this.renderLineChart();
			}
		},
	},
};
</script>

<style></style>
