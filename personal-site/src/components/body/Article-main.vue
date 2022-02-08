<template>
<MainBody>
    <!-- 左侧导航 -->
    <template  #leftMenu>
        <!-- 自我介绍栏？ -->
        <SelfSaid/>
        <!-- 推荐栏 -->
        <Recommend :title="recTitle"/>
    </template>
    <template #main-body>
      <Subject/>
    </template>
    <template #rightContent>
        <Subsidiary/>
    </template>
</MainBody>
</template>

<script>
import  SelfSaid from '../public/components/message/selfSaid.vue'
import  MainBody from '../index/mainbody.vue';
import  Recommend from '../public/components/message/recommend.vue';
import  Subject  from './subList/subject.vue';
import  Subsidiary from './subList/subsidiary.vue';
import  {getArticleRecommend} from '@/api/api.js';

export default{
    components:{
       MainBody,
       SelfSaid,
       Subject,
       Recommend,
        Subsidiary,
    },
    data(){
        return{
            recTitle:"文章推荐"
        }
    },
    mounted(){
        getArticleRecommend().then((res)=>{
            if(res.status === 200){
             this.$children[0].$children[1].setmessage(res.data);
            }
           
        })       
    }  

}

</script>

<style scoped lang="less">
@import "~@/components/public/style/common.less";

</style>