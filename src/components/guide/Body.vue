<template>
  <div>
    <Catalog
      v-for="catalog in this.list"
      :key="'guide-catalog-'+catalog.title"
      :num="catalog.num"
      :title="catalog.title"
    ></Catalog>
  </div>
</template>
<script>
import Catalog from "./Catalog.vue";
export default {
  data() {
    return {
      list: [
        { title: "JavaScript", num: 1 },
        { title: "Vue", num: 2 },
        { title: "Webpack", num: 3 },
        { title: "Github", num: 10 },
        { title: "Css", num: 99 },
        { title: "Algorithm", num: 0 }
      ]
    };
  },
  components: {
    Catalog
  }
};
</script>
<style lang="scss" scoped>
.guide-body {
  margin: 1rem;
}
</style>
