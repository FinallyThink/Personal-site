<template>
  <div id="auther">
      <div class="show-path">令<br>灵</div> 
      <div class="hidden-path">
        
          <li>背景特效<br><SlideButton 
          :seting='buttonSet' 
          :isOpen="$store.state.BGEffect" 
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
  }
},
methods:{
buttonClick:function(data,callback){
   data?this.$store.commit('BGEffectON') :this.$store.commit('BGEffectOff');
   callback(data);
}

}

}
</script>

<style scoped lang="less">
@import "~@/components/public/style/common.less";
@media screen and(max-width:700px){
    #auther{
        display: none;
    }    
}
#auther{
    width:@auther-size;
    height: @auther-size;
    font-size:1.6rem;
    user-select: none;
    font-weight: 800;
    font-family:"楷体";
    transition: all .75s;
    z-index: 999;
    position: fixed;
    top: calc(50% - @auther-size / 2);
    left:  -@auther-size / 2;
    transform-origin: center;
    transform: rotate(0turn);
    z-index: 999;
     &:hover{
       transform: rotate(0.5turn);
       z-index: 1099;
     }
    .hidden-path, .show-path{
         position: absolute;
         width:50%;
         box-shadow: @box-shadow;
    }
    .show-path{
        left: 50%;
        width:25%;
        height: 50%;

        .right-semicircle;
        background: fade(@theme-color,80%);
        line-height: 200%;
        .box-center-y;
    }
     .hidden-path{
      height: 100%;
      font-size:1rem;
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