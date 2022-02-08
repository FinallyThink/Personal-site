<template>
  <div id="toolContent">
      <h4><img :src="titleSvg">站长工具</h4>
  </div>
</template>

<script>
import titleImg from '@/assets/image/header-life_pink.svg';
export default {
    data(){
        return {
            titleSvg :titleImg,
        }
    }
}
</script>

<style scoped lang="less">
#toolContent{
    padding: 1rem 1.5rem;
    width: 100%;
    height: 100px;
    h4{
        font-size: 1.4rem;
        img{
            width:1.4rem;
            height: 1.4rem;
            line-height: 1.4rem;
            vertical-align: middle;
        }
    }
}

</style>