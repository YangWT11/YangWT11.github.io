<template>
  <div class="guide">
    <Header></Header>
    <Body></Body>
  </div>
</template>
<script>
import Header from "./Header.vue";
import Body from "./Body.vue";
export default {
  components: {
    Header,
    Body
  }
};
</script>
<style lang="scss" scoped>
.guide {
  width: 15rem;
  height: 20rem;
  position: fixed;
  left: 0;
  top: 0;
  background: linear-gradient(92deg,#f35626,#feab3a);
  animation: hue 60s infinite linear;
}
@keyframes hue {
    from{
        filter: hue-rotate(0deg)
    }
    to{
        filter: hue-rotate(360deg)
    }
}
</style>
