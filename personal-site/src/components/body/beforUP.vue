<template>
  <div id="upBlock">
      <div class="left">
      <img :src="data.showPicture" :title="data.title">
      <li class="title">{{data.title}}</li>
      </div>
      <div class="right">
      <li class="list">{{data.type}}</li>
      <li class="uptime">{{data.uptime}}</li>
      <li class="introduction">{{data.introduction}}</li>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
     }
    },
    props:{
        data:{
          type:Object,
          require:true
        }
    }
}
</script>
<style scoped lang="less">
@import "~@/components/public/style/common.less";
#upBlock{
    display: inline-block;
    position: relative;
    width: 48%;
    min-width: 200px;
    height: 100px;
    overflow: hidden;
   // border: 1px solid #333;
   cursor: pointer;
   transition: all .6s;

   &:hover{
       .box-shadow-up;
   }

   .left{
        display: inline-block;
        width: 90px;
        height: 100%;
        margin-left:10px;

        img{
           transition: all .6s;
           width: 100%;
           height: 100%;
           &:hover{
               z-index: 9999;
               top:0;
               width:auto;
               height: 100%;
               .box-shadow-up;
           }
        }
        .title{
            width: 100%;
            text-align: center;
        }
    }
    .right{
        display: inline-block;
        position: absolute;
        top:0;
        margin-left: 10px;

    }
}


</style>