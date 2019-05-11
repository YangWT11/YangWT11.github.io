<template>
  <div class="love">{{text[index]}}</div>
</template>
<script>
export default {
  data() {
    return {
      text: [
        "亲爱的媛媛",
        "韬韬不知道为啥媛媛不开森",
        "韬韬也不知道怎么哄媛媛",
        "不能和你一起面对",
        "我的心比你还难受多十八层地狱",
        "不知道如何让你开心起来",
        "我只能大声的告诉你",
        "我爱你",
        "无论发生什么",
        "你都要知道",
        "我陪在你身边共同进退",
        "希望我的爱",
        "能让媛媛心情好一点",
        "如果是因为下午我的言语让你不开森",
        "那我先给媛媛一个亲亲",
        "然后你得告诉韬韬",
        "韬韬以后就不会说啦",
        "希望我的媛儿赶快好起来！",
        "你的朴宝剑和杨文韬还等着你去追！"
      ],
      index: 0,
      count: 0
    };
  },
  mounted() {
    let func = () => {
      if (this.index < this.text.length - 1) {
        if (this.count == 180) {
          this.count = 0;
          this.index++;
        } else {
          this.count++;
        }
        requestAnimationFrame(func);
      }
    };
    func();
  }
};
</script>
<style lang="scss" scoped>
.love {
  position: fixed;
  padding: 1rem;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: linear-gradient(92deg, #f35626, #feab3a);
  animation: hue 60s infinite linear;
  filter: hue-rotate(225deg);
  font-size: 50px;
  color:white;
}
@keyframes hue {
  from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(360deg);
  }
}
</style>

