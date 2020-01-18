<template>
  <div class="container">
    <div>
      <img :src="$store.state.imageLink" />
    </div>
    <AnswerBoard :survey="survey" />
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
.survey-box {
  border: 1px solid black;
  width: 50%;
}
img {
  width: 50%;
}
</style>
