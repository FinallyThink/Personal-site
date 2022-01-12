<template>
  <div id="subject">
    文章主体
  </div>
</template>

<script>
import {getArticle} from '@/api/api.js';
import MD from '@/commonJS/MarkDown.js';
export default {
  data(){
    return{
       rootDom:{}
    }
  },
  methods:{
    addArticle(string){
      this.rootDom.innerText = string;
    },
  },
  mounted(){
    this.rootDom = document.getElementById("subject");
    
    getArticle(this.$route.query.name).then((rsp)=>{
      if(rsp.data){
         const md = new MD(rsp.data);
         this.addArticle(md.toHTML());

      }
    })
  }
}
</script>

<style scoped lang="less">

#subject{
  @subpadding:10px;
  width:calc(100% - @subpadding * 2);
  padding: @subpadding;
}

</style>