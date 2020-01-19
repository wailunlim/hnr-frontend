<template>
  <div class="game">
    <div>
      <GameScreen />
    </div>
    <SelectTeam />
    <!-- <PointSystem /> -->
  </div>
</template>

<script>
import GameScreen from "../components/GameScreen.vue";
import SelectTeam from "../components/SelectTeam.vue";
// import PointSystem from "../components/PointSystem.vue";

export default {
  components: {
    GameScreen,
    SelectTeam
    //  PointSystem
  }
};
</script>
