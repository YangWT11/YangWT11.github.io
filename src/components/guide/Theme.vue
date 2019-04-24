<template>
  <div class="guide-theme" :class="{active:this.actived}" v-on:click="select()">
    <div class="guide-icon">
      <span>{{this.num}}</span>
    </div>
    <span>{{this.name}}</span>
    <img class="guide-arrow" src="../../assets/img/guide/arrow.svg">
  </div>
</template>
<script>
export default {
  props: {
    name: String,
    num: Number,
    actived: Boolean
  },
  methods: {
    select: function() {
      this.$store.commit("guide/changeSelectedTheme", this.name);
    }
  }
};
</script>
<style lang="scss" scoped>
.guide-theme {
  padding: 0.5rem 1rem;
  text-align: left;
  align-items: center;
  color: #fff;
  display: flex;
  opacity: 0.6;
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
    transform: rotateZ(-90deg);
  }
}
.guide-arrow :hover {
  opacity: 1;
}
.active {
  opacity: 1;
}
</style>
