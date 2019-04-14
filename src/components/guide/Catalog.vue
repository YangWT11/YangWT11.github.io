<template>
  <div>
    <div class="guide-catalog">
      <div class="guide-icon">
        <span>{{this.num}}</span>
      </div>
      <span>{{this.title}}</span>
      <img
        class="guide-arrow"
        :class="{'expand':this.isExpand}"
        src="../../assets/guide/arrow.svg"
        v-on:click="expand()"
      >
    </div>
    <Item :hidden="!isExpand" v-for="item in this.articles" :key="'article'+item" :title="item"></Item>
  </div>
</template>
<script>
import Item from "./Item.vue";
export default {
  async beforeMount() {
    let a = await import("../../mds/config.json");
    this.articles = a.default[this.title];
  },
  props: {
    title: String
  },
  data() {
    return {
      isExpand: true,
      articles: []
    };
  },
  computed: {
    num: function() {
      return this.articles.length;
    }
  },
  methods: {
    expand: function() {
      this.isExpand = !this.isExpand;
    }
  },
  components: {
    Item
  }
};
</script>
<style lang="scss" scoped>
.guide-catalog {
  margin: 1rem 0;
  text-align: left;
  align-items: center;
  color: #fff;
  display: flex;
  cursor: pointer;
  .guide-icon {
    border-radius: 1rem;
    display: flex;
    width: 1.2rem;
    height: 1.2rem;
    margin-right: 1rem;
    align-items: center;
    border: white solid 0.1rem;
    span {
      margin: auto;
      font-size: 70%;
    }
  }
  .guide-arrow {
    position: absolute;
    right: 1.8rem;
    width: 1.8rem;
  }
  .expand {
    transform: rotateZ(-90deg);
  }
}
.guide-article {
}
</style>
