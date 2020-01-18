import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gameData: null,
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
      state.teamA.push(player);
    },
    addMemberTeamB(state, player) {
      state.teamB.push(player);
    },
    addToRoundPoints(state, points) {
      state.points += points;
    },
    updateImageLink(state, link) {
      state.imageLink = link;
    }
  },
  actions: {
    async getGameData({ commit }) {
      const data = await axios.get("http://172.17.201.53:3000/getinformation");
      console.log(data.data[8]);
      commit("updateImageLink", data.data[8].url);
    }
  },
  modules: {}
});
