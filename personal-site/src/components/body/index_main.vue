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
            <FakerCMD/>
        </div>
    </div>
</div>
  
</template>

<script>
import  headPicture from "@/assets/image/molisha.jpg"; 
import  FakerCMD from "@/components/public/components/fakerCMD.vue";
export default {
    components:{
        FakerCMD,
    },
    data(){
        return{
            headPicture:headPicture,
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
            margin: 0 1rem;
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
            .selfBox{
                width:90%;
                height: 500px;
                margin: 10px 5%;
            }

     }
}

</style>