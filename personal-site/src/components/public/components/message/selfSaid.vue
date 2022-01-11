<template>
  <div class="selfSaid">
     <div id="head">
         <img :src="headPicture" alt="" title="?">
     </div>
     <div id="selfExplain">
         <li>勒思师</li>
         <li>码龄:2</li>
         <li>若兮福所依<br/>福兮祸所至</li>
     </div>
 </div> 
</template>

<script>
import  headPicture from "@/assets/image/molisha.jpg"; 
export default {
    data(){
        return{
            headPicture:headPicture,
        }
    }

}
</script>

<style scopde lang="less">
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
</style>