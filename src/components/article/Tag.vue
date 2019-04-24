<template>
  <div class="article-tag" :style="{backgroundColor:this.color}">
    <span>{{this.name}}</span>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      default: "tag",
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
.article-tag {
  margin-right: 1rem;
  display: inline-block;
  padding: 0.1rem 0.5rem;
  color: #fff;
  span {
  }
}
</style>
