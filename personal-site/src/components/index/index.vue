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
@media screen and(max-width:700px) {
  main{
      width:100%;
  }
}
@media screen and(min-width:700px) {
  main{
      width:calc(100% - @left-distance * 2 );
  }
}


.container{
  main{
    min-height: calc(70vh - 3rem);
    max-width: 1920px;
  
    margin:0 auto;
    padding: 15vh 0;
    position: relative;
  }

}

</style>