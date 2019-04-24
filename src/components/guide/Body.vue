<template>
  <div>
    <Theme
      v-for="(theme) in this.list"
      :key="'guide-theme-'+theme.name"
      :num="theme.articles.length"
      :name="theme.name"
      :actived="theme.actived"
    ></Theme>
  </div>
</template>
<script>
import Theme from "./Theme.vue";
export default {
  props: {
    title: String
  },
  computed: {
    list() {
      return this.$store.getters["guide/getArticles"];
    }
  },
  components: {
    Theme
  }
};
</script>
<style lang="scss" scoped>
.guide-body {
  margin: 1rem 0;
}
</style>
