<template>
  <div class="Loading" v-if="isLoading">
    <h2>Please wait while we prepare your images ... </h2>
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
  height: 60%;
  width: 60%;
}

h2 {
  font-size: 25pt;
}
</style>
