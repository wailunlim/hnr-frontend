<template>
  <div class="game">
    <img src="../assets/cross-icon.png" class="info" v-if="showCross" />
    <img src="../assets/tick.png" class="info" v-if="showTick" />
    <div>
      <GameScreen />
    </div>
    <SelectTeam />
    <PointSystem />
  </div>
</template>

<script>
import GameScreen from "../components/GameScreen.vue";
import SelectTeam from "../components/SelectTeam.vue";
import PointSystem from "../components/PointSystem.vue";

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
