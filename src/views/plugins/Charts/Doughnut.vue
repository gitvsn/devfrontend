<script>
import { Doughnut } from 'vue-chartjs';
export default {
	extends: Doughnut,
	props: ['data', 'label'],
	mounted() {
		this.renderLineChart();
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
							borderWidth: 1,
							borderColor: ['#6237A0', '#D932C5'],
							backgroundColor: ['#6237A0', '#D932C5'],
							data: this.chartData,
						},
					],
				},
				{
					legend: {
						display: false,
						position: 'bottom',
						fullWidth: true,
						labels: {
							usePointStyle: true,
							fontFamily: 'Helvetica',
							fontColor: '#B9B9C9',
							boxWidth: 10,
							fontSize: 14,
						},
					},
					cutoutPercentage: 60,
					responsive: true,
					maintainAspectRatio: true,
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
			if (oldData.length == 0 || !this.isArrayContentSame(oldData, newData)) {
				this.$data._chart.destroy();
				//this.renderChart(this.data, this.options);
				this.renderLineChart();
			}
		},
	},
};
</script>
