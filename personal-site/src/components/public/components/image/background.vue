<template>
<div class="background">
  <video v-show="$store.state.BGEffect" :src="image" autoplay="autoplay" loop="loop" muted="muted"></video>
</div>
</template>

<script>
export default {
data(){

  return{  
      image: this.$state.background,
}}
}
</script>

<style scoped lang="less">
@import "~@/components/public/style/common.less";
.background{
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: fixed;
    background-color: @background-color;
    z-index: 0;
}
video{
width: 100%;height: 100%;object-fit: cover;position: absolute;top: 0;left: 0;
}
</style>