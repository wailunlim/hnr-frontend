<template>
  <div>
    <h2 class="my-5">Give your answer in: {{ timeRemaining }}</h2>
    <p>{{ answer }}</p>
    <input v-model="answer" />
    <div>
      <b-button variant="success" @click="compareAnswer">Submit</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Answer",
  data() {
    return {
      answer: "",
      timeRemaining: 5
    };
  },
  mounted() {
    setInterval(() => {
      this.timeRemaining -= 1;
    }, 1000);
  },
  methods: {
    compareAnswer() {
      this.$store.dispatch("allocatePoint", this.answer);
    }
  }
};
</script>

<style scoped>
input {
  width: 50%;
  font-size: 4em;
  font-weight: bold;
  border: 1px solid red;
}

h2 {
  font-size: 4em;
}
</style>
