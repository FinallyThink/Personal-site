<template>
<MainBody :right='right'>
    <!-- 左侧导航 -->
    <template  #leftMenu>
        <!-- 自我介绍栏？ -->
        <SelfSaid/>

    </template>
    <!-- 主体部分 -->
    <template #main-body>
        <ToolContent />
    </template>
</MainBody>
  
</template>

<script>
import  MainBody from '../index/mainbody.vue';
import  SelfSaid from '../public/components/message/selfSaid.vue';
import  ToolContent from "./tool/toolContent.vue"

export default {
    components:{
        SelfSaid,
        MainBody,
        ToolContent
    },
    data(){
        return{
            right:false
        }
    }

}
</script>

<style scoped lang="less">
@import "~@/components/public/style/common.less";
</style>