<template>
  <div class="game">
    <div>
      <GameScreen v-if="$store.state.loading === false"/>
      <LoadingScreen v-else/>
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
    PointSystem,
    LoadingScreen
  }
};
</script>

