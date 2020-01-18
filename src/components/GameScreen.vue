<template>
  <div class="container">
    <p>{{ survey }}</p>
    <div>
      <img src="../assets/logo.png" />
    </div>
    <AnswerBoard :survey="survey" />
    <Buzzer />
    <Answer />
    <Wait />
  </div>
</template>

<script>
import AnswerBoard from "./AnswerBoard.vue";
import Buzzer from "./Buzzer.vue";
import Answer from "./Answer.vue";
import Wait from "./Wait.vue";

export default {
  name: "GameScreen",
  components: {
    Wait,
    AnswerBoard,
    Buzzer,
    Answer
  },
  computed: {
    survey() {
      return this.$store.state.survey;
    }
  }
};
</script>

<style scoped>
.survey-box {
  border: 1px solid black;
  width: 50%;
}
</style>
