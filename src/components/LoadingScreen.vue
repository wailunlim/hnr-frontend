<template>
  <div class="Loading" v-if="isLoading">
    <h2>Game Loading</h2>
    <img src="../assets/loading.gif" />
  </div>
</template>

<script>
export default {
  computed: {
    isLoading() {
      return this.$store.state.loading;
    }
  }
};
</script>

<style scoped>
img {
  height: 30%;
  width: 30%;
}

h2 {
  font-size: 25pt;
}
</style>
