<template>
  <div class="article">
    <Header
      title="起步！用GitHub pages & Vue搭建自己的博客"
      :labels="[{'name':'git','color':'#00b306'},{'name':'vue','color':'red'}]"
    ></Header>
    <Body :name="this.name"></Body>
  </div>
</template>
<script>
import Header from "./Header.vue";
import Body from "./Body.vue";
export default {
  components: {
    Header,
    Body
  },
  data() {
    return {
      name: "GithubPagesWithVue"
    };
  }
};
</script>
<style lang="scss" scoped>
.article {
  max-width: 60rem;
  margin: auto;
}
</style>
