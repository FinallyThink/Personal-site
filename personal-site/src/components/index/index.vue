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

.container{
  width: 100vw;
  height: 100vh;
  header{
    width:100vw;
    height: 5vh;
    position: relative;
    line-height: 5vh;
    top: 0;
    left: 0;
    background: #7eb3e9;
  }
  main{
    width:100vw;
    height: 90vh;
    position: relative;
  }
  footer{
    width:100vw;
    height: 5vh;
    position: relative;
    line-height: 5vh;
    background: #7eb3e9;
  }
}

</style>