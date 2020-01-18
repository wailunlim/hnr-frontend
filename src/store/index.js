import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    teamA: [],
    teamB: [],
    pointsTeamA: 0,
    pointsTeamB: 0,
    roundInfo: {
      isFirstTurn: true,
      control: "A",
      currentPlayer: null,
      points: 0
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
