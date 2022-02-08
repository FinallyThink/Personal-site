<template>
  <div  id="subsidiary">
      <h1>目录</h1>
      <SubList :list="list"/>
  </div>
</template>

<script>
import  SubList from "./sublist.vue";

export default {
    components:{
        SubList
    },
    computed:{
        list(){
            let arr = this.$store.state.subsidiary;
            return arr;
        }
    },
}
</script>

<style scoped lang="less">
@import "~@/components/public/style/common.less";
#subsidiary{
    width: 100%;
    min-height: 100px;
    padding:10px;
    box-sizing: border-box;
    position: sticky;
    top:5rem;
    .container-b;
    background-color: fade(@theme-color,80%);
    h1{
        font-size: 1.5rem;
    }
}

</style>