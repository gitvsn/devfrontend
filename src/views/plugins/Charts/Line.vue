<script>
import { Line } from 'vue-chartjs';

export default {
	extends: Line,
	props: ['data', 'label'],
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
								display: true,
								showLabelBackdrop: false,
								position: 'right',
                ticks: {
                  maxTicksLimit: 5,
                  fontSize: 12,
                  fontColor: '#7f7f7f',
                  fontFamily: 'Gotham-Bold,sans-serif',
                  fontStyle: 'bold',
                },
                gridLines: {
                  drawBorder: false,
                  color: "rgba(0, 0, 0, 0)",
                  display: false,
                },
							},

						],
						xAxes: [
							{
                ticks: {
                  maxTicksLimit: 5,
                  fontSize: 13,
                  fontColor: '#7f7f7f',
                  fontFamily: 'Gotham-Bold,sans-serif',
                  fontStyle: 'bold',
                },
                gridLines: {
                  drawBorder: false,
                  color: "rgba(0, 0, 0, 0)",
                  display: false,
                },
							},
						],
					},
				}
			);
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
				this.renderLineChart();
		},
	},
};
</script>

<style></style>
