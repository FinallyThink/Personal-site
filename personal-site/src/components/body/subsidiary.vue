<template>
<div id = "subside">
    <div class="OnRead"></div>
      <li id="titles" 
      :style="{
          textIndent:ele.leve+'rem',
      }"
      v-for="(ele,i) in this.list" :key="i" v-on:click="ToTitle(i)" >{{ele.title}}</li>
</div>

</template>

<script>
import {getEletoTop,ToScrollTop} from '@/commonJS/domFun.js';


export default {
    data(){
        return {
            readList:[],
            scrollLock: false
        }
    },
    computed:{
        list(){
        this.listChanged();
        this.$store.state.subsidiary.forEach((ele,i) => {
           this.readList.push(getEletoTop(document.querySelector("#ToTitle"+i)) - 50);
        });
        //在数据变化的时候从新加载组件兵渲染
        window.addEventListener('scroll',this.ReadChange)
        return  this.$store.state.subsidiary;
        }
    },
    methods:{
        ToTitle(aim){
            this.scrollLock = true;
            let aimId = "#ToTitle"+aim;
            let ele =  document.querySelector(aimId);
            let aimPosition = getEletoTop(ele);
            ToScrollTop({aim:aimPosition - 50});
            this.readLightTo(aim,()=>{
                 this.scrollLock = false;
            });

        },
        ReadChange(){
            if(this.scrollLock) return;
            this.scrollLock = true;
            let scrollY = document.documentElement.scrollTop;
            for(let i = 0 ;i<this.readList.length; i++){
                if(scrollY  > this.readList[i] && scrollY <this.readList[i + 1]){
                    this.readLightTo(i,()=>{
                    this.scrollLock = false;
                  });
                    return;
                }
            }
            this.scrollLock = false;
        },
        //数据刷新，清空数据
        listChanged(){
            this.readList.length = 0;
            ToScrollTop(0,()=>{
                this.readLightTo(0);
            }); 
        },
        //移动阅读光标到某个位置
        readLightTo(aim,callback){
             const rightLight =  document.querySelector(".OnRead")
             rightLight.style.top = aim*2 + "rem";
 
             setTimeout(()=>{
                if(callback)callback();
                 this.correct(rightLight);
             },300)
             
        },
        correct(ele){
            const eleP = ele.offsetParent;
            var obj;
            if(ele.offsetTop < eleP.clientHeight/2 ){
               obj = {
                    aimEle:eleP,
                    aim:0
                }
            }else if(ele.offsetTop > eleP.scrollHeight - eleP.clientHeight/2){
                    obj = {
                    aimEle:eleP,
                    aim:eleP.scrollHeight - eleP.clientHeight/2
                }

            }else{
                    obj = {
                    aimEle:eleP,
                    aim:ele.offsetTop - eleP.clientHeight/2
                }
            }
            ToScrollTop(obj);

        }
    },

}
</script>

<style lang ="less" scoped>
@import "~@/components/public/style/common.less";
#subside{
    position: relative;
    overflow-y:auto;
    max-height: 60vh;
    .scroll-style;
    

    #titles{
        width: 100%;
        overflow: hidden;
        height: 2rem;
        line-height: 2rem;
        cursor: pointer;
        user-select: none;
    }
    .OnRead{
        background:  @theme-color;
        position:absolute;
        width: 100%;
        height: 2rem;
        z-index: -1;
        transition: all 0.2s;
    }



}


</style>