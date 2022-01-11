<template>
<div id="toTop" class="hidden" v-on:click = beClick>
    UP
</div>
  
</template>

<script>
 import {IfscrollStop,ToScrollTop} from '@/commonJS/domFun.js'
export default {
    mounted(){ 
         window.addEventListener("scroll",
                IfscrollStop(()=>{
                    if(document.documentElement.scrollTop > 300){
                        document.querySelector("#toTop").className = "show";
                    }else{
                        document.querySelector("#toTop").className = "hidden";
                    }
            })
         ,false);
    },
    methods :{
        beClick(){
            ToScrollTop({aim:0});
            },
    }

}
</script>

<style lang="less">
@import "~@/components/public/style/common.less";
#toTop{
    cursor:pointer;
    position: fixed;
    width:40px;
    height: 40px;
    background: @theme-color;
    bottom: 10vh;
    right: 5vw;
    z-index: 999;
    transition: all 0.5s;
    line-height: 40px;
    border-radius:20px;
    text-align: center;
    box-shadow: @box-shadow;
}



</style>