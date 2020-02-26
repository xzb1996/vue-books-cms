<template>
  <div class="home">
    <div class="swiper-container" ref="swiperContainer">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in banner" :key="index">
          <img :src="item" />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.css";
export default {
  name: "home",
  data() {
    return {
      banner: [],
      mySwiper:null
    };
  },
  created() {
    setTimeout(() => {
      let arr = [
        "https://game.gtimg.cn/images/daojushop/zb/ad/202002/20200212085956_835688.jpg",
        "https://game.gtimg.cn/images/daojushop/zb/ad/202002/20200225101729_101978.jpg",
        "https://game.gtimg.cn/images/daojushop/zb/ad/202001/20200117165754_663493.jpg"
      ];
      this.banner = arr;
    }, 1000);
  },
  watch: {
    banner() {
      this.$nextTick(() => {
        this.mySwiper = new Swiper(".swiper-container", {
          loop: true, // 循环模式选项
          autoplay: {
            disableOnInteraction: false
          },
          // 如果需要分页器
          pagination: {
            el: ".swiper-pagination"
          }
        });
      });
    }
  },
  mounted() {}
};
</script>

<style scoped lang="scss"></style>
