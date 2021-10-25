<template>
    <div id="main">
     <div id="navigation">

     <a v-for="(item,i)  in menu" :key="i">
       <li>
         <img  :src="item.selected?header_svg_pink:header_svg" alt="">
         {{item.name}}
       </li>
      </a>
     </div>
    <div id="principal">

    </div>
     <div id="subsidiary">

      </div>
    </div>
</template>

<script>
export default {
data(){
  return {
    menu:this.$state.details[0].content,
    header_svg :this.$state.header_svg.default,
    header_svg_pink:this.$state.header_svg.pink
  }
}
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
  #navigation{
    li{
      img{
        height: 50%;
        width: auto;
      }
      &:hover{
        box-shadow: -2px -2px 1px @gray;
        background: fadein(@header-color,10%);

      }
      position: relative;
      display: flex;
      height: 5vh;
      text-align: center;
      align-items: center;
      padding: 3%;
      border-bottom: 1px solid @gray;
    }
  }
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