<template>
  <div class="article-label" :style="{backgroundColor:this.color}">
    <span>{{this.name}}</span>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      default: "label",
      type: String
    },
    color: {
      default: "red",
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.article-label {
  margin-right: 1rem;
  display: inline-block;
  padding: 0.1rem 0.5rem;
  color: #fff;
  span {
  }
}
</style>
