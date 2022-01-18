<template>
  <div id="subject">
  </div>
</template>

<script>
import {getArticle} from '@/api/api.js';
import MD from '@/commonJS/MarkDown.js';
export default {
  data(){
    return{
       rootDom:null
    }
  },
  methods:{
    addArticle(string){
      this.rootDom.innerHTML = string;
    },
  },
  mounted(){
    this.rootDom = document.getElementById("subject");
    
    getArticle(this.$route.query.name).then((rsp)=>{
      if(rsp.data){
         const md = new MD(rsp.data);
         this.addArticle(md.toHTML());
         this.$store.commit('subsidiarySet',md.getTitle());
      }
    })
  }
}
</script>

<style  lang="less">
@import "~@/components/public/style/common.less";
#subject{
  @subpadding:10px;
  width:calc(90% - @subpadding * 2);
  margin:@subpadding auto;
  padding: @subpadding;
  box-shadow: 2px 2px 2px #333,-2px -2px 2px #aaa ;
  border-radius: 5px;
  background: fade(@theme-color,60%);
  p{
    margin: .4rem;
  }
  code{
     @padding : .4rem;
     width:calc(100% - @padding * 2);
     padding: .4rem;
     display: block;
     box-shadow: 2px 2px 2px  #fff,-2px -2px 2px   #000 ;
     color: #fff;
     background: #333;
     border-radius: 5px;
  }
  h1:nth-child(1){
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
  }
  img{
    display: block;
    width: 80%;
    height: auto;
    margin: 0 auto;
  }
}

</style>