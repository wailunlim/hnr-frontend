<template>
  <div class="container my-5">
    <LoadingScreen v-if="$store.state.loading" />
    <PointSystem v-else-if="$store.state.stats" />
    <div v-else>
      <div class="row d-flex justify-content-center">
        <div class="col-6">
          <img :src="$store.state.imageLink" />
        </div>
      </div>
    </div>
    <AnswerBoard :survey="survey" />
    <h2 v-if="$store.state.roundInfo.control !== null">
      {{ $store.state.roundInfo.control }}:{{
        $store.state.roundInfo.currentPlayer
      }}
    </h2>
    <Buzzer v-if="toBuzz" />
    <Answer v-if="toAnswer" />
  </div>
</template>

<script>
import AnswerBoard from "./AnswerBoard.vue";
import Buzzer from "./Buzzer.vue";
import Answer from "./Answer.vue";
import LoadingScreen from "./LoadingScreen.vue";
import PointSystem from "./PointSystem.vue";

export default {
  name: "GameScreen",
  components: {
    AnswerBoard,
    Buzzer,
    Answer,
    LoadingScreen,
    PointSystem
  },
  computed: {
    survey() {
      return this.$store.state.survey;
    },
    toBuzz() {
      // if no one has control, it's buzz time
      return !this.$store.state.roundInfo.control;
    },
    toAnswer() {
      // if a team has control, they would answer
      return this.$store.state.roundInfo.control;
    }
  },
  mounted() {
    console.log("mounted");
    this.$store.dispatch("getGameData").then(() => {
      this.$store.dispatch("startRound");
    });
  }
};
</script>

<style scoped>
img {
  width: 100%;
}
</style>
