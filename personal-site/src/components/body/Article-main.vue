<template>
<MainBody>
    <!-- 左侧导航 -->
    <template  #leftMenu>
        <!-- 自我介绍栏？ -->
        <SelfSaid/>
    </template>
    <template #main-body>
      <Subject/>
    </template>
</MainBody>
</template>

<script>
import  SelfSaid from '../public/components/message/selfSaid.vue'
import  MainBody from '../index/mainbody.vue';
import  Subject  from './subject.vue';

export default{
    components:{
       MainBody,
       SelfSaid,
       Subject
    },
    data(){
        return{

        }
    },  

}

</script>

<style scoped lang="less">
@import "~@/components/public/style/common.less";

</style>