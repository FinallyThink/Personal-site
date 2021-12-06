<template>
  <div id="subject">
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
    methods:{
    },
    async mounted(){
       const rq = new axios("http://localhost:8080/api/article/1");
       const result = await rq.post({});
       if(result.status === 1){
         document.querySelector('#subject').innerHTML = result.data;
       }else{
         console.log(result.status);
       }
       return;
    }

}
</script>
<style lang="less">
@import "~@/components/public/style/common.less";
#subject{
  padding: 0 3rem;
  code{
    padding: 1rem;
    display: block;
    background: @c333;
    color:@font-color_f;
    box-shadow: -2px -2px 10px inset #999
  }
}

</style>