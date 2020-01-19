<template>
  <div class="d-flex justify-content-around mt-5">
    <button
      type="button"
      @click="first ? false : updateControl('teamA')"
      class="btn btn-danger btn-lg col-4"
    >
      Buzz!
    </button>
    <button
      type="button"
      @click="first ? false : updateControl('teamB')"
      class="btn btn-primary btn-lg col-4"
    >
      Buzz!
    </button>
  </div>
</template>

<script>
export default {
  name: "Buzzer",
  computed: {
    first() {
      return this.$store.state.roundInfo.control;
    }
  },
  mounted() {
    window.addEventListener("keypress", e => {
      const pressed = String.fromCharCode(e.keyCode);
      if (pressed === "q" && !this.first) {
        this.updateControl("teamA");
      }
      if (pressed === "p" && !this.first) {
        this.updateControl("teamB");
      }
    });
  },
  methods: {
    updateControl(team) {
      this.$store.commit("setControl", team);
    }
  }
};
</script>

<style scoped>
.btn {
  padding: 7.5% 0;
}
</style>
