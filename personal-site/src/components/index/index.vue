<template>
 <div class="container">

     <slot name="header">
       这里是头部
     </slot>

   <main>
    <slot name="main">
      这里是主体
    </slot>
  </main>
  <footer>
    <slot name="footer">
      这里是尾部
    </slot>
  </footer>
 </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
@import "~@/components/public/style/common.less";
.container{
  width: @max-width;
  height: @max-height;
  main{
    width: @max-width;
    height: 900vh;
    position: relative;
  }
  footer{
    width: @max-width;
    height: 5vh;
    position: relative;
    line-height: 5vh;

  }
}

</style>