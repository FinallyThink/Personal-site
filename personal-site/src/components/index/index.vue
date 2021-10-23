<template>
 <div class="container">
     <Background/>
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
import Background from "../public/components/image/background.vue"
export default {
 components: {
      Background
  }
}
</script>

<style scoped lang="less">
@import "~@/components/public/style/common.less";
.container{
  width: @max-width;
  height: @max-height;
  main{
    width: @max-width;
  
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