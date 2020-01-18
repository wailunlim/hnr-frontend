<template>
  <div>
    <h2 class="mt-3">{{ timeRemaining }}</h2>
    <p>{{ answer }}</p>
    <input v-model="answer" />
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
  watch: {
    timeRemaining(timeLeft) {
      console.log("watching");
      if (timeLeft < 0) {
        this.timeRemaining = 5;
        this.$store.dispatch("check", this.answer);
        this.answer = "";
      }
    }
  }
};
</script>

<style scoped>
input {
  width: 50%;
  font-size: 2.5em;
  font-weight: bold;
  border: 1px solid red;
}

h2 {
  font-size: 4em;
  color: red;
}
</style>
