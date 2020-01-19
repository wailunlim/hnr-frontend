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
    showAnswerBox: true,
    toggleUpload: false,
    loading: false,
    imageLink: undefined,
    survey: [],
    teamA: [],
    teamB: [],
    teamApointer: 0,
    teamBpointer: 0,
    pointsTeamA: 0,
    pointsTeamB: 0,
    roundInfo: {
      roundId: 0,
      control: null,
      currentPlayer: null,
      points: 0,
      streak: 0,
      steal: false
    },
    showTick: false,
    showCross: false,
    stats: false
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
    },
    setTick(state, bool) {
      state.showTick = bool;
    },
    setCross(state, bool) {
      state.showCross = bool;
    },
    setLoading(state) {
      state.loading = true;
    },
    resetLoading(state) {
      state.loading = false;
    },
    setStats(state, bool) {
      state.stats = bool;
    },
    nextPlayerA(state) {
      state.teamApointer = (state.teamApointer + 1) % state.teamA.length;
    },
    nextPlayerB(state) {
      state.teamBpointer = (state.teamBpointer + 1) % state.teamB.length;
    },
    resetPointers(state) {
      state.teamApointer = 0;
      state.teamBpointer = 0;
    },
    setAllShowTrue(state) {
      state.survey.forEach(obj => {
        obj.show = true;
      });
    },
    hideAnswerBox(state) {
      state.showAnswerBox = false;
    },
    resetAnswerBox(state) {
      state.showAnswerBox = true;
    },
    useUserFiles(state) {
      state.toggleUpload = true;
    }
  },
  actions: {
    getGameData({ commit, state }) {
      commit("setLoading");
      console.log("hi");
      const url = state.toggleUpload ? "http://localhost:3000/getinformationfirebase" : "http://localhost:3000/getinformation";
      return axios.get(url).then(res => {
        console.log(res.data);
        commit("updateSurveyResponse", res.data);
        commit("resetLoading");
        return res.data;
      });
    },
    startRound({ commit, state }) {
      const roundId = state.roundInfo.roundId;
      commit("updateImageLink", state.surveyResponse.payload[roundId].url);
      commit("updateSurvey", state.surveyResponse.payload[roundId].info);
    },
    resetRound({ commit }) {
      commit("setControl", null);
      commit("setCurrentPlayer", null);
      commit("resetRoundPoints");
      commit("resetStreak");
      commit("resetSteal");
      commit("resetPointers");
    },
    initialiseGame({ commit, dispatch }) {
      commit("updatePointsTeamA", 0);
      commit("updatePointsTeamB", 0);
      dispatch("resetRound");
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

      if (guess) {
        dispatch("flashTick");
      } else {
        dispatch("flashCross");
      }

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

      if (state.roundInfo.control === "teamA") {
        commit("nextPlayerA");
        commit("setCurrentPlayer", state.teamA[state.teamApointer]);
      } else {
        commit("nextPlayerB");
        commit("setCurrentPlayer", state.teamB[state.teamBpointer]);
      }
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
      dispatch("flashAnswers").then(() => {
        dispatch("flashStats");
        dispatch("resetRound");
        if (state.roundInfo.roundId < 9) {
          commit("incrementRoundId");
          dispatch("startRound");
        } else {
          dispatch("showStats");
        }
      });
    },
    flashTick({ commit }) {
      commit("setTick", true);
      setTimeout(() => commit("setTick", false), 1000);
    },
    flashCross({ commit }) {
      commit("setCross", true);
      setTimeout(() => commit("setCross", false), 1000);
    },
    flashStats({ commit }) {
      commit("setStats", true);
      setTimeout(() => commit("setStats", false), 7000);
    },
    showAll({ commit }) {
      commit("setAllShowTrue");
    },
    flashAnswers({ commit }) {
      commit("setAllShowTrue", true);
      commit("hideAnswerBox");
      return new Promise(resolve => {
        setTimeout(() => {
          commit("resetAnswerBox");
          resolve(true);
        }, 8000);
      });
    },
    showStats({ commit }) {
      commit("setStats", true);
    }
  },
  modules: {}
});
