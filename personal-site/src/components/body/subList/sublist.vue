<template>
    <div class="rest">
      <div v-for="(ele,i) in list" 
      :key="i" ><a
      @click="beClick(ele.href)" 
      :class="[ele.class,'cont']">
         {{ele.title}}</a>
       <Sublist v-if="ele.children" :list="ele.children"/>
      </div>
    </div>
</template>

<script>
import {ToScrollTop,getEletoTop} from '@/commonJS/domFun.js';
export default {
    name:'Sublist',
    props:{
        list:{
            type:Array,
            require:false
        }
    },
    methods:{
        beClick(to){
            const dom = document.querySelector(to) ;
            const position = getEletoTop(dom) - 60;
            ToScrollTop({
                aim :position
            },()=>{
                console.log(">?")
            })
        }
    }
}
</script>

<style scoped lang="less">
@import "~@/components/public/style/common.less";
    div{
        font-size: 1rem;
        overflow: hidden;
        user-select: none;
        cursor:pointer;

    }
    .rest{
        padding-left: 1.2rem;
        counter-reset: titleHead 0;
    }
    &:nth-child(1) .rest{
        padding-left: 0;
    }
    .cont{
        display: block;
        width: 100%;
            &:hover{
               background-color: fade(@theme-color,100%);
               color: #222;
            }
        &::before{
            content: counters(titleHead,'-')'.';
            font-size: 1rem;
            counter-increment: titleHead;
        }
    }

</style>