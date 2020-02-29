<template>
  <div class="random-name">
    <h3 style="font-size:20px;margin:10px 20px 10px;">
      你想玩哪一款游戏呢?快来测试吧
    </h3>
    <div style="font-size:40px;margin:10px 20px 10px;">{{ name }}</div>
    <button @click="handleClick" style="margin:10px 20px 10px;">点击</button>
  </div>
</template>

<script>
export default {
  name: "randomName",
  data() {
    return {
      gameName: [
        "穿越火线",
        "地下城与勇士",
        "英雄联盟",
        "梦三国",
        "QQ飞车",
        "QQ三国",
        "魔兽争霸",
        "植物大战僵尸",
        "极盗飞车",
        "大冒险",
        "魂斗罗",
        "球球大作战",
        "炉石传说",
        "坦克世界",
        "逆战",
        "问道",
        "绝地求生",
        "我的世界",
        "怪物猎人",
        "DOTA"
      ],
      flag: null,
      interVal: null,
      name: "请点击下方按钮进行测试",
      n: 0
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.gameName.sort(() => {
        return Math.random() - 0.5;
      });
      setInterval(this.animation, 100);
    },
    handleClick() {
      this.flag = !this.flag;
    },
    animation() {
      if (!this.flag) {
        return;
      }
      this.name = this.gameName[this.n];
      this.n++;
      if (this.n > this.gameName.length - 1) {
        this.n = 0;
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
