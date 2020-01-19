<template>
  <div class="mt-5 outer">
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
      return this.survey[0] && this.survey[0].show
        ? this.survey[0].name + " | " + this.survey[0].confidence
        : "?";
    },
    two() {
      return this.survey[1] && this.survey[1].show
        ? this.survey[1].name + " | " + this.survey[1].confidence
        : "?";
    },
    three() {
      return this.survey[2] && this.survey[2].show
        ? this.survey[2].name + " | " + this.survey[2].confidence
        : "?";
    },
    four() {
      return this.survey[3] && this.survey[3].show
        ? this.survey[3].name + " | " + this.survey[3].confidence
        : "?";
    },
    five() {
      return this.survey[4] && this.survey[4].show
        ? this.survey[4].name + " | " + this.survey[4].confidence
        : "?";
    },
    six() {
      return this.survey[5] && this.survey[5].show
        ? this.survey[5].name + " | " + this.survey[5].confidence
        : "?";
    },
    seven() {
      return this.survey[6] && this.survey[6].show
        ? this.survey[6].name + " | " + this.survey[6].confidence
        : "?";
    },
    eight() {
      return this.survey[7] && this.survey[7].show
        ? this.survey[7].name + " | " + this.survey[7].confidence
        : "?";
    }
  }
};
</script>

<style scoped>
.ans {
  font-size: 2em;
}

.outer {
  border: 2px solid black;
}
</style>
