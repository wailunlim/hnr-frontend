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
      control: null,
      currentPlayer: null,
      points: 0,
      streak: 0,
      steal: false
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
      state.roundInfo.points += points;
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
    },
    resetTeamAPlayers(state) {
      state.teamA = [];
    },
    resetTeamBPlayers(state) {
      state.teamB = [];
    },
    displayAnswer(state, index) {
      const roundId = state.roundInfo.roundId;
      state.surveyResponse.payload[roundId].info[index].show = true;
    },
    reverseControl(state) {
      if (state.roundInfo.control === "teamA") {
        state.roundInfo.control = "teamB";
      } else {
        state.roundInfo.control = "teamA";
      }
      // opportunity to steal
      if (state.roundInfo.streak > 0) state.roundInfo.steal = true;
    },
    increaseStreak(state) {
      state.roundInfo.streak += 1;
    },
    resetStreak(state) {
      state.roundInfo.streak = 0;
    },
    resetSteal(state) {
      state.roundInfo.steal = false;
    }
  },
  actions: {
    getGameData({ commit }) {
      return axios.get("http://localhost:3000/getinformation").then(res => {
        console.log(res.data);
        commit("updateSurveyResponse", res.data);
        return res.data;
      });
    },
    startRound({ commit, state }) {
      const roundId = state.roundInfo.roundId;
      commit("updateImageLink", state.surveyResponse.payload[roundId].url);
      commit("updateSurvey", state.surveyResponse.payload[roundId].info);
    },
    resetRound({ commit }) {
      commit("resetRoundId");
      commit("setControl", null);
      commit("setCurrentPlayer", null);
      commit("resetRoundPoints");
      commit("resetStreak");
      commit("resetSteal");
    },
    initialiseGame({ commit, dispatch }) {
      commit("updatePointsTeamA", 0);
      commit("updatePointsTeamB", 0);
      dispatch("resetRound");
      dispatch("startRound");
      commit("resetTeamAPlayers");
      commit("resetTeamBPlayers");
    },
    check({ commit, state, dispatch }, answer) {
      const roundId = state.roundInfo.roundId;
      let guess = false;
      state.surveyResponse.payload[roundId].info.forEach((obj, index) => {
        if (obj.name === answer && !obj.show) {
          guess = true;
          commit("displayAnswer", index);
          commit("addToRoundPoints", obj.confidence);
          commit("increaseStreak");
        }
      });

      // the team gets 3 in a row, or steals from a team successfully
      if (state.roundInfo.streak === 3 || (guess && state.roundInfo.steal)) {
        dispatch("endRound");
      }

      if (state.roundInfo.steal && !guess) {
        commit("reverseControl");
        dispatch("endRound");
        return;
      }

      // the person didn't guess right
      if (!guess) commit("reverseControl");
    },
    endRound({ commit, state, dispatch }) {
      const winningTeam = state.roundInfo.control;
      const roundPoints = state.roundInfo.points;
      if (winningTeam === "teamA") {
        commit("updatePointsTeamA", state.pointsTeamA + roundPoints);
      } else {
        commit("updatePointsTeamB", state.pointsTeamB + roundPoints);
      }

      // proceed to next round.
      dispatch("resetRound");
      commit("incrementRoundId");
      dispatch("startRound");
    }
  },
  modules: {}
});
