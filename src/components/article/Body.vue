<template>
  <div v-html="this.article" class="article-body"></div>
</template>
<script>
export default {
  props: {
    name: String
  },
  async beforeMount() {
    let a = await import("../../mds/GithubPagesWithVue/article.md");
    this.article = a.default;
  },
  data() {
    return {
      article: null
    };
  },
  watch: {
    name: (newVal, oldVal) => {
      if (newVal !== oldVal) {
        console.log(import("../../mds/GithubPagesWithVue/article.md"));
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.article-body {
  text-align: left;
  /deep/ blockquote {
    padding: 0 1.5rem;
    color: #4e4e4e;
    font-size: 1rem;
    border-left: 0.4rem solid #ddd;
    line-height: 1.5;
    font-family: "Inter", "-apple-system,BlinkMacSystemFont", "Segoe UI",
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
  }
  /deep/ p {
    line-height: 1.7;
    margin: 1rem 0;
  }
  /deep/ li {
    line-height: 1.7;
  }
  /deep/ code {
    color: #476582;
    padding: 0.25rem 0.5rem;
    margin: 0;
    font-size: 0.85em;
    background-color: rgba(27, 31, 35, 0.05);
    border-radius: 3px;
    font-family: "source-code-pro", "Menlo", "Monaco", "Consolas", "Courier New",
      "monospace";
  }
  /deep/ h1,
  /deep/ h2,
  /deep/ h3,
  /deep/ h4,
  /deep/ h5,
  /deep/ h6 {
    border-bottom: 0.1rem solid #eee;
    padding-bottom: 0.5rem;
  }
  /deep/ .warn {
    border-color: #e4e400;
  }
  /deep/ .tip {
    border-color: green;
  }
}
</style>

