<template>
  <div id="subject" >
    {{this.Loading}}
  </div>
</template>

<script>
 import axios from "@/api/index.js";

export default {

    data(){
        return {
          showMessage:[],
        }
    },
    computed:{
      Loading(){
        this.foo();
        return "Be Contine";
      }
    },
    methods:{
     async foo(){
         const rq = new axios(this.$state.api_article + this.$store.state.api.Reading);
         const result = await rq.post({});
         //匹配所有标题项
         const rule = /(<h\d?>)[^<h\d?>]*(<\/h\d?>)/g;
         const leveRule = /(?<=<h)\d?(?=>[^<h\d?>]*<\/h\d?>)/g;
         let titleArr = [];
         let leveArr = [];
    
         if(result.status === 1){
           //将md文件数据应用刀页面上         
           titleArr = result.data.match(rule);
           leveArr = result.data.match(leveRule);
           titleArr = titleArr.map((ele,i) => {
             let beReplace = ele.slice(0,3) + " id=\"ToTitle"+ i +"\"" +ele.slice(3);
             result.data =  result.data.replace(ele,beReplace);
             //去除h标签
             return ele.replace(/[<h\d?>|</h\d?>]/g,"")
           });
            document.querySelector('#subject').innerHTML = result.data;
           let subsidiary = titleArr.map((ele,i)=>{
                      return {leve:leveArr[i],title:ele};
            })
           this.$store.commit("subsidiarySet",subsidiary);
         }else{
           console.log(result.status);
         }
         return;
          }
        }

}
</script>
<style lang="less">
@import "~@/components/public/style/common.less";
#subject{
  padding: 0 3rem; 
  overflow: auto;
  word-break:break-all;

  code{
    padding: 0.5rem;
    display: block;
    background: @c333;
    color:@font-color_f;
    box-shadow: -2px -2px 3px inset #fff
  }
}

</style>