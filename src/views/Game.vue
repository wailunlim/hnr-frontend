<template>
  <div class="game">
    <h1>Game below</h1>
    <div>
      <b-button>Button</b-button>
      <b-button variant="danger">Button</b-button>
      <b-button variant="success">Button</b-button>
      <b-button variant="outline-primary">Button</b-button>
    </div>
    <SelectTeam />
  </div>
</template>

<script>
// @ is an alias to /src
import SelectTeam from "@/components/SelectTeam.vue";

export default {
  name: "selectTeam",
  components: {
    SelectTeam
  }
};
</script>
