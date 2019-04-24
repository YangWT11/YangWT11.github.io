<template>
  <div class="article">
    <Header :title="this.title" :tags="this.tags"></Header>
    <Body :name="this.name"></Body>
  </div>
</template>
<script>
import Header from "../components/article/Header.vue";
import Body from "../components/article/Body.vue";
export default {
  data() {
    return {
      title: null,
      tags: [],
      name: null
    };
  },
  async beforeMount() {
    let file = this.$store.getters["guide/getArticleInfo"](
      this.$route.params.theme,
      this.$route.params.file
    );
    if (file) {
      this.name = file.fileName;
      this.title = file.title;
      this.tags = file.tags;
    } else {
      console.log("找不到文件");
    }
  },
  components: {
    Header,
    Body
  }
};
</script>
<style lang="scss" scoped>
.article {
  max-width: 60rem;
  margin: auto;
}
</style>
