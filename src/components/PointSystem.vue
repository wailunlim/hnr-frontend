<template>
  <div id="pointSystem">
    <reactive-bar-chart :chart-data="chartData"></reactive-bar-chart>
  </div>
</template>

<script>
import ReactiveBarChart from "@/ReactiveBarChart.js";
export default {
  name: "App",
  components: {
    ReactiveBarChart
  },
  data() {
    return {
      chartData: null,
      myStyles: {
        height: '300px',
        width: '100%',
        position: 'relative',
      },
      responsive: true,
      maintainAspectRatio: true,
      height: 300,
    };
  },
  methods: {
    generateData() {
      let newArray = [];
      newArray.push(this.$store.state.pointsTeamA);
      newArray.push(this.$store.state.pointsTeamB);

      this.chartData = {
        labels: ["Team A", "Team B"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: newArray
          }
        ]
      };
    }
  },
  mounted() {
    setInterval(this.generateData, 20);
  }
};
</script>

<style scoped>

</style>
