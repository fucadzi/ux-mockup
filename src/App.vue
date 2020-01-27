<template>
  <v-app>
    <v-content>
      <style-elements/>
      <!-- <ui-elements/> -->
    </v-content>
  </v-app>
</template>

<script>
// import UiElements from "./components/UiElements";
import StyleElements from "./components/StyleElements";

export default {
  name: "App",

  components: {
    // UiElements,
    StyleElements
  },

  data: () => ({
    //
  })
};
</script>
