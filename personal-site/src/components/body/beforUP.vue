<template>
<div class="ArticleList">
     <div id="upBlock" v-for="(item,i) in ArticleList" :key="i">
        <router-link :to="'/Article?name=' + item.href">
         <div class="left">
             <img :src="item.img" :title="item.name">
         </div>
         <div class="right">
             <li class="title">[{{item.name}}]</li>
             <li class="author">{{item.author}}</li>
             <li class="type">{{item.type}}</li>
             <li class="uptime">{{item.update.substr(0,10)}}</li>
             <span class="introduction">{{item.introduction}}</span>
         </div>
        </router-link>
     </div>

</div>
</template>

<script>
import  {indexRequest} from "@/api/api.js";
export default {
    data(){
        return{
            ArticleList : this.$store.state.ArticleList
     }
    },
    mounted(){
        indexRequest().then((rsp)=>{
            if(rsp.data.status !== 0){
            this.ArticleList = rsp.data;
            }else{
                console.log("请求文章列表失败",rsp.data);
            }
        })
    },
}
</script>
<style scoped lang="less">
@import "~@/components/public/style/common.less";
@media screen and(max-width:600px) {
    #upBlock{
   .left,.right{
        display: block;
        margin: 0 auto;
        width:100%
    }
    .left{
        max-width:200px;
        height: 100px;
     }
     .right{
         padding-left: 0;
     }
    }

}
@media screen and(min-width:601px) {
     #upBlock{
    .left,.right{
     display: inline-block;
     width:180px;
    }
    .right{
      width:calc(100% - 210px);
      padding-left: 30px;
    }
    .left{
     height: 180px;
    }
    }
    
}
.ArticleList{
    width:90%;
    margin: 10px auto;
    #upBlock{
        display: block;
        position: relative;
        width: 100%;
        overflow: hidden;
       transition: all .6s;
       &::before{
           content:" ";
           display: block;
           border-top: 1px solid #c0c0c0;
           border-bottom: 1px solid #c0c0c0;
           height: 1px;
           box-shadow: 0 1px 1px inset #000;
           margin: 0px auto 10px;
       }
    
       &:hover{
           .box-shadow-up;
       }
    
       .left{
            
            overflow: hidden;
            img{
                display: block;
                margin: 0 auto;
               transition: all .6s;
               width: auto;
               height: 100%;
               &:hover{
                transform: scale(1.1)
               }
            }
        }
        .right{
            display: inline-block;
            position: relative;
            vertical-align:top;
            text-shadow: 1px 1px #bbb;
            li:not(:nth-child(1)){
                display: inline-block;
                color:rgb(66, 66, 66);
                font-size: 0.6rem;
                &::before{
                    content: "\00A0|\00A0";
                    display: inline-block;
                }
            }
            span{
                overflow:hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 5;
                -webkit-box-orient: vertical;
                &::before{
                    content: "";
                    display: block;
                    height: .5rem;
                    overflow: hidden;
                }
            }
        }
    }
}
</style>