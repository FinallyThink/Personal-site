<template>
  <div id="auther">
      <div class="show">令<br>灵</div> 
      <div class="hidden">
          <li><SlideButton 
          :seting='buttonSet' 
          :isOpen="BackgroundSpecial" 
          v-on:beClick = "buttonClick" /></li>
          <li>码龄：2</li> 
      </div>
  </div>
</template>

<script>
import SlideButton from "./button/slide.vue";
export default {
components:{
 SlideButton
},
data(){
  return{
      buttonSet:{
          size:15,
          unit:"px",
          on_off:{
             on:"开",
             off:"关"
          }
      },
      BackgroundSpecial:false,
  }
},
methods:{
buttonClick:function(data,callback){
   this.BackgroundSpecial = data;
   callback(data);
}

}

}
</script>

<style scoped lang="less">
@import "~@/components/public/style/common.less";

#auther{

    font-size:21px;
    font-weight: 800;
    width:@auther-size;
    height: @auther-size;
    font-family:"楷体";
    transition: all 1.5s;
    z-index: 999;
    position: fixed;
    top: calc(50% - @auther-size / 2);
    left:  -@auther-size / 2;
    transform-origin: center;
     transform: rotate(0.5turn);
    // &:hover{
      
    // }
    .hidden, .show{
         position: absolute;
         display: inline-block;
         width:50%;
             box-shadow: @box-shadow;
    }
    .show{
        left: 50%;
        width:25%;
        height: 50%;

        .right-semicircle;
        background: fade(@theme-color,80%);
        line-height: 200%;
        .box-center-y;
    }
     .hidden{
      height: 100%;
      font-size:14px;
      background: yellow;
      .right-semicircle;
      text-align: center;
      li:nth-child(1){
          position: relative;
          top: 30%;
      }
      li:nth-child(2){
          position: relative;
          top: 50%;
      }
       transform:  rotate(0.5turn);
    }
}


</style>