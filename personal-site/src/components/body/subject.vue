<template>
  <div id="ab">ACS
    <button v-on:click="beClick">确定</button>
    <div v-for="(item,i) in this.showMessage" :key="i">
        <Message  :message="item.message"/>
    </div>
    
  </div>
</template>

<script>
export default {

    data(){
        return {
          showMessage:[]
        }
    },
    methods:{
      beClick:function(){
        const item = {message:"123qz"};
        this.showMessage.push(item);
      }
    }
}
</script>
<style>

</style>