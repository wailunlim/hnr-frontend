<template>
  <div class="container">
    <div>
      <img src="../assets/logo.png" />
    </div>
    <AnswerBoard :answers="answers" />
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
  data() {
    return {
      answers: [1, 2, 3, 4, 5, 6, 7, 8]
    };
  }
};
</script>

<style scoped>
.survey-box {
  border: 1px solid black;
  width: 50%;
}
</style>
