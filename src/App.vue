<template>
  <v-app>
    <difference-two-dates />
  </v-app>
</template>

<script>
import DifferenceTwoDates from "./components/DifferenceTwoDates.vue";

export default {
  name: "App",
  components: {
    DifferenceTwoDates
  }
};
</script>