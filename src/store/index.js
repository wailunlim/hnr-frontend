import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    surveyResponse: {
      payload: null,
      length: 0
    },
    imageLink: undefined,
    survey: [],
    teamA: ["Alice", "Bobby"],
    teamB: ["Charlie", "Delta"],
    pointsTeamA: 0,
    pointsTeamB: 0,
    roundInfo: {
      roundId: 0,
      isFirstTurn: true, // perhaps getter, check if roundId === 0
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
    },
    updateSurveyResponse(state, payload) {
      state.surveyResponse.payload = payload;
      state.surveyResponse.length = payload.length;
    },
    incrementRoundId(state) {
      // be careful not to increment above the length of the game
      state.roundInfo.roundId += 1;
    },
    resetRoundId(state) {
      state.roundInfo.roundId = 0;
    },
    setControl(state, team) {
      state.roundInfo.control = team;
    },
    setCurrentPlayer(state, player) {
      state.roundInfo.currentPlayer = player;
    },
    resetRoundPoints(state) {
      state.roundInfo.points = 0;
    }
  },
  actions: {
    async getGameData({ commit }) {
      const data = await axios
        .get("http://192.168.1.94:3000/getinformation")
        .then(res => res.data);
      commit("updateSurveyResponse", data);
    },
    startRound({ commit, state }) {
      const roundId = state.roundInfo.roundId;
      commit("updateImageLink", state.surveyResponse.payload[roundId].url);
      commit("incrementRoundId");
    },
    resetRound({ commit }) {
      commit("resetRoundId");
      commit("setControl", null);
      commit("setCurrentPlayer", null);
      commit("resetRoundPoints");
    },
    initialiseGame({ commit, dispatch }) {
      commit("updatePointsTeamA", 0);
      commit("updatePointsTeamB", 0);
      dispatch("resetRound");
    }
  },
  modules: {}
});
