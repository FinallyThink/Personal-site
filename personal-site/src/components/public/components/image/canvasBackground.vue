<template>
  <div id ="background">
      <canvas id="bCanvas" width="500" height="500"></canvas>
  </div>
</template>

<script>
import effect from './canvas/background.js';
export default {
  mounted(){
    const dom = document.querySelector("canvas");
    const eff = new effect(dom);
    eff.main();
  }
}
</script>

<style scoped lang="less">
#background{
    z-index: 0;
    width:100vw;
    height: 100vh;
    background: #000;
    position:fixed;
    top:0;
    display: block;
  
}


</style>