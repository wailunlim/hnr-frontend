<template>
  <div class="game">
    <img src="../assets/cross-icon.png" class="info" v-if="showCross" />
    <img src="../assets/tick.png" class="info" v-if="showTick" />
    <div>
      <GameScreen v-if="$store.state.loading === false" />
      <LoadingScreen v-else />
    </div>
    <SelectTeam />
    <PointSystem />
  </div>
</template>

<script>
import GameScreen from "../components/GameScreen.vue";
import SelectTeam from "../components/SelectTeam.vue";
import PointSystem from "../components/PointSystem.vue";
import LoadingScreen from "../components/LoadingScreen.vue";

export default {
  components: {
    GameScreen,
    SelectTeam,
    PointSystem
  },
  computed: {
    showCross() {
      return this.$store.state.showCross;
    },
    showTick() {
      return this.$store.state.showTick;
    },
    PointSystem,
    LoadingScreen
  }
};
</script>

<<<<<<< HEAD
<style scoped>
.info {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
}
</style>
======= >>>>>>> 2293581927d0d947c5331bed58616e9d12f4a119
