<template>
  <div class="background">
    <div class="container d-flex justify-content-around">
      <div>
        <b-container class="containerTeamA">
          <h1>Team A</h1>
          <h2 class="team" v-for="member in teamA" :key="member">
            {{ member }}
          </h2>
          <b-row>
            <b-col class="col-10">
              <b-form-input
                v-model="teamAPlayer" v-if="$store.state.teamA.length < 5"
                placeholder="Enter player's name"
              ></b-form-input>
            </b-col>
            <p class="h5 mb-2">
              <b-icon-plus  v-if="$store.state.teamA.length < 5"
                class="btn-secondary"
                @click="addToTeamA"
              ></b-icon-plus>
            </p>
          </b-row>
        </b-container>
      </div>
      <div>
        <b-container class="containerTeamB">
          <h1>Team B</h1>
          <h2 v-for="member in teamB" :key="member">{{ member }}</h2>
          <b-row>
            <b-col class="col-10">
              <b-form-input
                v-model="teamBPlayer" v-if="$store.state.teamB.length < 5"
                placeholder="Enter player's name" 
              ></b-form-input>
            </b-col>
            <p class="h5 mb-2">
              <b-icon-plus v-if="$store.state.teamB.length < 5"
                class="btn-secondary"
                @click="addToTeamB"
              ></b-icon-plus>
            </p>
          </b-row>
        </b-container>
      </div>
    </div>
    <b-button variant="info" @click="startGame">Start Game</b-button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      teamAPlayer: "",
      teamBPlayer: ""
    };
  },
  methods: {
    addToTeamA() {
      this.$store.commit("addMemberTeamA", this.teamAPlayer);
      this.teamAPlayer = "";
    },
    addToTeamB() {
      this.$store.commit("addMemberTeamB", this.teamBPlayer);
      this.teamBPlayer = "";
    },
    startGame() {
      this.$store.dispatch("getGameData");
    }
  },
  computed: {
    teamA() {
      return this.$store.state.teamA;
    },
    teamB() {
      return this.$store.state.teamB;
    }
  }
};
</script>

<style scoped>
.containerTeamA {
}

.containerTeamB {
}

.team {
  text-align: center;
}

.background {
  background-color: lightgoldenrodyellow;
  margin-top: 5%;
  padding: 2%;
}

h1 {
  font-size: 20pt;
  font-weight: bold;
  text-decoration: underline;
}

h2 {
  font-size: 15pt;
}

h5 mb-2 {
  align-content: center;
}
</style>
