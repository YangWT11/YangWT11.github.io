<template>
  <div class="article-title">
    <h1>{{title}}</h1>
    <Tag v-for="tag in tags" :key="tag.name" :name="tag.name" :color="tag.color"></Tag>
  </div>
</template>
<script>
import Tag from "./Tag.vue";
export default {
  props: {
    title: {
      default: "type",
      type: String
    },
    tags: {
      default: [],
      type: Array
    }
  },
  components: {
    Tag
  }
};
</script>
<style lang="scss" scoped>
.article-title {
  h2 {
    margin-bottom: 0.5rem;
  }
  margin-bottom: "1rem";
  border-bottom: "1px solid";
}
</style>


