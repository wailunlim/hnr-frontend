<template>
  <div class="container">
    <div class="row d-flex justify-content-center">
      <div class="col-4">
        <img :src="$store.state.imageLink" />
      </div>
    </div>
    <AnswerBoard :survey="survey" />
    <h2>{{ $store.state.roundInfo.control }}</h2>
    <Buzzer v-if="toBuzz" />
    <Answer v-if="toAnswer" />
  </div>
</template>

<script>
import AnswerBoard from "./AnswerBoard.vue";
import Buzzer from "./Buzzer.vue";
import Answer from "./Answer.vue";

export default {
  name: "GameScreen",
  components: {
    AnswerBoard,
    Buzzer,
    Answer
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
