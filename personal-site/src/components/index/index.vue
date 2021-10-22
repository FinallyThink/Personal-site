<template>
 <div class="container">
   <header>
     <slot name="header">
       这里是头部
     </slot>
   </header>
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
@import "~@/components/public/common.less";
.container{
  
  width: @max-width;
  height: @max-height;
  header{
    width: @max-width;
    height: 5vh;
    position: relative;
    line-height: 5vh;
    top: 0;
    left: 0;
    border-bottom: 1px solid #eee;

  }
  main{
    width: @max-width;
    height: 90vh;
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