<template>
  <div class="menu1">
    <audio class="audio" ref="audio" controls="controls" preload="auto">
      <source src="@/assets/song.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
    <button @click="clickHandle">点击播放</button>
  </div>
</template>

<script>
export default {
  name: "menu1",
  data() {
    return {};
  },
  methods: {
    clickHandle() {
      this.$refs.audio.play();
    },
  },
};
</script>
<style scoped lang="scss">
.audio {
  display: none;
}
</style>
