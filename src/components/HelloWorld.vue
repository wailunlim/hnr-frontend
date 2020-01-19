<template>
  <div class="hello">
    <img src="../assets/samuraiLogo.png" />
    <div>
      <router-link to="/game">Play</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  mounted() {
    this.$store.dispatch("initialiseGame");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

img {
  height: 30%;
  width: 30%;
}
</style>
