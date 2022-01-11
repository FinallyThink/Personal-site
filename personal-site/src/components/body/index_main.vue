<template>
<MainBody>
    <!-- 左侧导航 -->
    <template  #leftMenu>
        <!-- 自我介绍栏？ -->
        <SelfSaid/>
        <!-- 导航栏 -->
        <div id="navigation">
               <h4>入站推荐</h4><br/>
               <li>推荐个毛 啊自己看</li>
        </div>
    </template>
    <!-- 主体部分 -->
    <template #main-body>
        <div class="selfBox">
            <!-- 虚假的CMD -->
            <FakerCMD/>
        </div>
        <!-- 文章列表 -->
         <UpList/>
    </template>
    <!-- 右侧容器 -->
    <template #rightContent>
        <!-- 公告栏 -->
        <Bulletin/>
        <!-- 标语栏 -->
        <CatachPrase :textArr="textArr"/>
    </template>
</MainBody>
  
</template>

<script>
import  FakerCMD from "@/components/public/components/fakerCMD.vue";
import  UpList from "./beforUP.vue";
import  CatachPrase from "../public/components/image/textContent.vue";
import  Bulletin from '../public/components/message/bulletin.vue';
import  MainBody from '../index/mainbody.vue';
import  SelfSaid from '../public/components/message/selfSaid.vue'

export default {
    components:{
        FakerCMD,
        UpList,
        CatachPrase,
        Bulletin,
        MainBody,
        SelfSaid
    },
    data(){
        return{
            textArr:[
                {Head:"你必须非常努力",End:"才能显的毫不费力"},
                {Head:"大学者,非谓有大楼之谓也,",End:"有大师之谓也"},
                {Head:"志当存高远",End:""},
                {Head:"天行健",End:"君子以自强不息"}
                ]
        }
    },
}
</script>

<style scoped lang="less">
@import "~@/components/public/style/common.less";
.selfSaid{
    .container-b;
    height: 200px;
    width:100%;
   #head{                      
       top:0;
       width:100%;
       height: 80px;
       display: flex;
       justify-content: center;
       align-items: center;
       overflow: hidden;
       img{
           width:60px;
           height: 60px;
           border-radius: 60px;
           .box-shadow-down;
       }
   }
   #selfExplain{
       font-size: 1rem;
       margin: 0 auto;
       li{
           width:100%;
           height: 2rem;
           text-align: center;
       }
   }
}
#navigation{
    position: sticky;
    position: -webkit-sticky;
    top:5rem;
    font-size: 1rem;
    width: 130px;
    height: 200px;
    margin-top:20px;
    padding:10px;
    .container-b;
}

.recommend,.selfBox{
    width:90%;
    margin: 10px auto;
}
.selfBox{
  margin: 0px auto;
  &::before{
      content: " ";
      display: block;
      height: 10px;
  }
}




</style>