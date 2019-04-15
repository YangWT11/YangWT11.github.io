<template>
  <div class="guide-header">
    <input
      v-model="searchText"
      placeholder="search"
      class="search-input"
      v-on:focus="this.onFocus"
      v-on:blur="this.onBlur"
    >
    <img src="../../assets/img/guide/search.svg" :style="{opacity:this.isFocus?1:0}">
  </div>
</template>
<script>
export default {
  data() {
    return {
      isFocus: false
    };
  },
  computed: {
    searchText: {
      get() {
        return this.$store.state.guide.searchText;
      },
      set(value) {
        this.$store.commit("guide/setSearchText", value);
      }
    }
  },
  methods: {
    onFocus: function() {
      this.isFocus = true;
    },
    onBlur: function() {
      this.isFocus = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.guide-header {
  margin-top: 0.5rem;
  border-bottom: 0.05rem solid darkgrey;
  padding-bottom: 1rem;
  .search-input {
    background: transparent;
    border-radius: 0.4rem;
    height: 2rem;
    font-size: 1rem;
    font-family: "Avenir", "Helvetica", "Arial", "sans-serif";
    width: 70%;
    outline: none;
    padding: 0 2.5rem 0 0.5rem;
    border: white solid 0.05rem;
    color: #fff;
  }
  img {
    position: absolute;
    right: 2.1rem;
    top: 2rem;
    width: 1.2rem;
    border-left: 0.1rem solid white;
    padding-left: 0.3rem;
    cursor: pointer;
  }
}
</style>
