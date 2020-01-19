<template>
  <div class="home">
    <HelloWorld msg="Welcome to SamurAI" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>

<style scoped>
img {
  width: 50px;
  height: 50px;
}
</style>
