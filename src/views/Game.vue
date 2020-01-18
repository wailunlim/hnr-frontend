<template>
  <div class="game">
    <div>
      <GameScreen />
    </div>
    <SelectTeam />
  </div>
</template>

<script>
import GameScreen from "../components/GameScreen.vue";
import SelectTeam from "../components/SelectTeam.vue";

export default {
  components: {
    GameScreen,
    SelectTeam
  }
};
</script>
