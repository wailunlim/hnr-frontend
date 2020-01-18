import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    imageLink: undefined,
    survey: [],
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
  mutations: {
    updateSurvey(state, payload) {
      state.survey = payload;
    },
    updatePointsTeamA(state, points) {
      state.pointsTeamA = points;
    },
    updatePointsTeamB(state, points) {
      state.pointsTeamB = points;
    },
    addMemberTeamA(state, player) {
      state.teamA.append(player);
    },
    addMemberTeamB(state, player) {
      state.teamB.append(player);
    },
    addToRoundPoints(state, points) {
      state.points += points;
    }
  },
  actions: {},
  modules: {}
});
