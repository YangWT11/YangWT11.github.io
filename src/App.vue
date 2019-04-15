<template>
  <div id="app">
    <Guide></Guide>
    <router-view/>
  </div>
</template>
<script>
import Guide from "./components/guide/Guide.vue";
export default {
  components: {
    Guide
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
