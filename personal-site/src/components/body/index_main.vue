<template>
<div id="main">
    <div id="leftMenu">
        <div id="head">
            <img :src="headPicture" alt="" title="?">
        </div>
        <div id="selfExplain">
            <li>勒思师</li>
            <li>年龄:24</li>
            <li>若兮福所依<br/>福兮祸所至</li>
        </div>
    </div>
    <div id="main-body">
        <div class="selfBox">
            <h2>自我介绍</h2>
            <FakerCMD/>
        </div>
        <div class="beforUP">
            <h2>最近更新</h2>
            <UpList :data="data"/>
            <UpList :data="data"/>
            <UpList :data="data"/>
            <UpList :data="data"/>
        </div>
        <div class="recommend">
            <h2>好玩推荐</h2>

        </div>
    </div>
</div>
  
</template>

<script>
import  headPicture from "@/assets/image/molisha.jpg"; 
import  FakerCMD from "@/components/public/components/fakerCMD.vue";
import  UpList from "./beforUP.vue";

export default {
    components:{
        FakerCMD,
        UpList
    },
    data(){
        return{
            headPicture:headPicture,
            data:{
                showPicture:"./img/xiao.jpg",
                title:"标题",
                type:"类型",
                uptime:"更新时间",
                introduction:"这里写的是姐姐的撒发达发达是开发了的撒发射点飞机喀什大幅答复的沙发上范德萨发生的"
            }
        }
    }
}
</script>

<style scoped lang="less">
@import "~@/components/public/style/common.less";
#main{
    z-index: 10;
    position: relative;
    top:15vh;
    margin: 0 @left-distance;
    font-size:0;
    user-select: none;
    #leftMenu{
        display: inline-block;
        left:0;
        width: 150px;
        height: 200px;
        margin: 0;
        .container-b;
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
     #main-body{
            position: absolute;
            top:0;
            width: calc(100% - 150px - 2vw);
            left: calc(150px + 2vw);
            .container-b;
            font-size: 1rem;
            h2{

                margin-bottom: 2px;
            }
            .recommend,.beforUP,.selfBox{
                width:90%;
                margin: 10px 5%;
 
            }
     }
}

</style>