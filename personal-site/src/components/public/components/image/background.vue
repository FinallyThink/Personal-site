<template>
<div class="background">
  <video :src="image" autoplay="autoplay" loop="loop" muted="muted"></video>
</div>
</template>

<script>
import image from "@/assets/image/1.mp4";
export default {
data(){
  return{  
      image: image
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
    z-index: 0;
}
video{
width: 100%;height: 100%;object-fit: cover;position: absolute;top: 0;left: 0;
}
</style>