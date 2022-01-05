<template>
<div class="background">
  <img v-show="$store.state.BGEffect" :src="image"/>
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
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: fixed;
    background-color: @background-color;
    z-index: 0;
    top: 0;
}
img{
width: 100%;height: 100%;object-fit: cover;position: absolute;top: 0;left: 0;
}
</style>