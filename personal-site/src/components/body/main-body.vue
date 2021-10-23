<template>
    <div id="main">
     <div id="navigation">

     </div>
    <div id="principal"></div>
     <div id="subsidiary">

      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
@import "~@/components/public/style/common.less";

#main{
  position: relative;
  top : 15vh;
  width: @max-width * 0.9;
  min-height: 80vh;
  margin: 0 auto;

  #navigation ,#subsidiary{

    width:15%;
    min-height: 30vh;
    position: absolute;
    .container-b;
  }
  #principal{
    width: 60%;
    min-height: 100%;
    position: absolute;
    left:20%;
    .container-b;
  }
  #subsidiary{
    right: 0;
  }
  
}


</style>