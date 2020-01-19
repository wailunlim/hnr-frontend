<template>
  <div id="pointSystem">
    <reactive-bar-chart :chart-data="chartData" :width="300" :height="150" />
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
      chartData: {},
      responsive: false
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
  created() {
    setInterval(this.generateData, 2000);
  }
};
</script>

<style scoped></style>
