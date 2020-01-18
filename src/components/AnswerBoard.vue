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
  props: ["survey"],
  computed: {
    one() {
      return this.survey[0];
    },
    two() {
      return this.survey[1];
    },
    three() {
      return this.survey[2];
    },
    four() {
      return this.survey[3];
    },
    five() {
      return this.survey[4];
    },
    six() {
      return this.survey[5];
    },
    seven() {
      return this.survey[6];
    },
    eight() {
      return this.survey[7];
    }
  }
};
</script>

<style scoped>
.ans {
  font-size: 2em;
}
</style>
