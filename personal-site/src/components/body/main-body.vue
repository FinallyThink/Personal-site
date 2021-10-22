<template>
   <div class="background">
     <HeaderImg/>
   </div>
</template>

<script>
import HeaderImg from "../public/components/image/headerImg.vue"
export default {
 components: {
      HeaderImg
  }
}
</script>

<style scoped lang="less">
@import "~@/components/public/style/common.less";
.background{
    width: @max-width;
    height: @max-height;
    overflow: hidden;
    position: fixed;
    z-index: 0;
}

</style>