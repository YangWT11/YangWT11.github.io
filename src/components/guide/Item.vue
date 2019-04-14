<template>
  <div class="guide-article">
    <span>{{this.title}}</span>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    labels: Array
  }
};
</script>
<style lang="scss" scoped>
.guide-article {
  color: #fff;
  padding-left: 3rem;
  span {
    font-size: 0.9rem;
  }
}
</style>
