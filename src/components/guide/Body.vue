<template>
  <div>
    <Catalog
      v-for="(catalog) in this.list"
      :key="'guide-catalog-'+catalog.name"
      :num="catalog.articles.length"
      :name="catalog.name"
      :actived="catalog.actived"
    ></Catalog>
  </div>
</template>
<script>
import Catalog from "./Catalog.vue";
export default {
  props: {
    title: String
  },
  computed: {
    list() {
      return this.$store.getters["guide/getSecondCatalogs"];
    }
  },
  components: {
    Catalog
  }
};
</script>
<style lang="scss" scoped>
.guide-body {
  margin: 1rem 0;
}
</style>
