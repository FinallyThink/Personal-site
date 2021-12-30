<template>
 <div class="container">
     <slot name="header">

     </slot>

   <main>
    <slot name="main">

    </slot>
  </main>
  <footer>
    <slot name="footer">

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
  main{
    width:100%;
    min-width: @max-width;
  
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