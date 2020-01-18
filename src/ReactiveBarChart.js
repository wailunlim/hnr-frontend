import { Bar, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;
export default {
  extends: Bar,
  mixins: [reactiveProp],
  //props: ["options"],
  data () {
    return {
      //Chart.js options that control the appearance of the chart
      options: {
        scales: {
          yAxes: [{
            ticks: {
              stepSize: 5,
              beginAtZero: true
          },
          gridlines: true
        }]
      }
    }
  }
},
  mounted() {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartData, this.options);
  }
};
