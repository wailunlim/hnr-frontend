<template>
  <div class="game">
    <img src="../assets/cross-icon.png" class="info" v-if="showCross" />
    <img src="../assets/tick.png" class="info" v-if="showTick" />
    <div>
      <GameScreen />
    </div>
  </div>
</template>

<script>
import GameScreen from "../components/GameScreen.vue";

export default {
  components: {
    GameScreen
  },
  computed: {
    showCross() {
      return this.$store.state.showCross;
    },
    showTick() {
      return this.$store.state.showTick;
    }
  }
};
</script>

<style scoped>
.info {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
}
</style>
