<template>
  <div id="ab">ACS
    <button v-on:click="beClick">确定</button>
  </div>
</template>

<script>
 import BMessage from "../public/components/message/showMessage.vue"
export default {
    data(){
        return {
        }
    },
    methods:{
      beClick:function(){
       const h = this.$createElement(BMessage,{
         props:{
           message:"XXXXXXXXX"
         }
       });
       
      }
    }
}
</script>
<style>

</style>