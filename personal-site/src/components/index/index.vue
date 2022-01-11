<template>
 <div class="container">
     <slot name="header">

     </slot>

   <main>
    <slot name="main">

    </slot>
  </main>
 </div>
</template>

<script>

export default {

}
</script>

<style scoped lang="less">
@import "~@/components/public/style/common.less";

.container{
  main{
    min-height: calc(70vh - 3rem);
    max-width: 1920px;
    width:calc(100% - @left-distance * 2 );
    margin:0 auto;
    padding: 15vh 0;
    position: relative;
  }

}

</style>