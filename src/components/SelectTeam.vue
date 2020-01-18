<template>
  <div class="container d-flex justify-content-around background">
      <div>
          <b-container class="containerTeamA">
              <h1>Team A</h1>
              <h2 class="team" v-for="member in TeamA" :key="member">{{ member }}</h2>
              <div class="plusicon">
                   <p class="h5 mb-2"> <b-icon-plus class="btn-secondary"></b-icon-plus> </p>
              </div>
          </b-container>
      </div>
      <div>
        <b-container class="containerTeamB">
              <h1>Team B</h1>
              <h2 v-for="member in TeamB" :key="member">{{ member }}</h2>
              <div class="plusicon">
                  <p class="h5 mb-2"> <b-icon-plus class="btn-secondary"></b-icon-plus> </p>
              </div>
        </b-container>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      TeamA: ["Alice", "Bobby"],
      TeamB: ["Charlie", "Delta"]
    };
  }
};
</script>

<style scoped>
.containerTeamA {
}

.containerTeamB {
}

.team{
    text-align: center;
}

.background{
    background-color:lightgoldenrodyellow;
    margin-top: 5%;
    padding: 2%;
}

h1{
    font-size: 20pt;
    font-weight: bold;
    text-decoration: underline;

}

h2{
    font-size: 15pt;
}

</style>
