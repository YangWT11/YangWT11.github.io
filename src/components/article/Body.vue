<template>
  <div v-html="this.article" class="article-body"></div>
</template>
<script>
import articleMd from "../../mds/0/article.md";
export default {
  data() {
    return {
      article: articleMd
    };
  }
};
</script>
<style lang="scss" scoped>
.article-body {
  text-align: left;
  .blockquote {
    padding: 0 1.5rem;
    color: #777;
    border-left: 0.4rem solid #ddd;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #555;
  }
}
</style>

