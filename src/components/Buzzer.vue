<template>
  <div class="d-flex justify-content-around mt-5">
    <button
      type="button"
      @click="first ? false : (first = 'teamA')"
      class="btn btn-danger btn-lg col-4"
    >
      Buzz!
    </button>
    <button
      type="button"
      @click="first ? false : (first = 'teamB')"
      class="btn btn-primary btn-lg col-4"
    >
      Buzz!
    </button>
    <p>{{ first }}</p>
  </div>
</template>

<script>
export default {
  name: "Buzzer",
  data() {
    return {
      first: null
    };
  },
  mounted() {
    window.addEventListener("keypress", e => {
      const pressed = String.fromCharCode(e.keyCode);
      if (pressed === "q" && !this.first) {
        this.first = "teamA";
      }
      if (pressed === "p" && !this.first) {
        this.first = "teamB";
      }
    });
  }
};
</script>

<style scoped>
.btn {
  padding: 7.5% 0;
}
</style>
