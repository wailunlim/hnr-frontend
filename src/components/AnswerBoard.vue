<template>
  <div>
    <div class="row">
      <div class="col-6 ans">{{ one }}</div>
      <div class="col-6 ans">{{ two }}</div>
    </div>
    <div class="row">
      <div class="col-6 ans">{{ three }}</div>
      <div class="col-6 ans">{{ four }}</div>
    </div>
    <div class="row">
      <div class="col-6 ans">{{ five }}</div>
      <div class="col-6 ans">{{ six }}</div>
    </div>
    <div class="row">
      <div class="col-6 ans">{{ seven }}</div>
      <div class="col-6 ans">{{ eight }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnswerBoard.vue",
  props: ["answers"],
  computed: {
    one() {
      return this.answers[0];
    },
    two() {
      return this.answers[1];
    },
    three() {
      return this.answers[2];
    },
    four() {
      return this.answers[3];
    },
    five() {
      return this.answers[4];
    },
    six() {
      return this.answers[5];
    },
    seven() {
      return this.answers[6];
    },
    eight() {
      return this.answers[7];
    }
  }
};
</script>

<style scoped>
.ans {
  font-size: 2em;
}
</style>
