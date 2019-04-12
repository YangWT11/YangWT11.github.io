<template>
  <div class="article-title">
    <h1>{{title}}</h1>
    <Label v-for="label in labels" :key="label.name" :name="label.name" :color="label.color"></Label>
  </div>
</template>
<script>
import Label from "./Label.vue";
export default {
  props: {
    title: {
      default: "type",
      type: String
    },
    labels: {
      default: [],
      type: Array
    }
  },
  components: {
    Label
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


