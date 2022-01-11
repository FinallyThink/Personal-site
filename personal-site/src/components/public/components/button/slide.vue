<template>
  <div id="slide-button" 
  :style="{width:(Width),
  height:(Height),
  borderRadius:(Height)}"
  @click="$emit('beClick',!open,(res)=>{
      open = res
  })"
  >
  <div class="slide"
  :style="{width:(halfWidth),
  height:(Height),
  borderRadius:(Height),
  lineHeight:(Height),
  left:(open?'0px':slideOffset)}"
  >{{open?on_off.on:on_off.off}}</div>
  </div>
</template>

<script>
export default {
data(){
    return{
        size: this.seting.size,
        unit:this.seting.unit,
        open:this.isOpen,
        on_off: this.seting.on_off?this.seting.on_off:{on:"on",off:"off"}
    }
},
props:{
    seting:{
        tyep:Object,
        required:true},
    isOpen:{
        type:Boolean,
        required:true
    }    
},
computed:{
    Width(){
        return this.size * 2.5 + this.unit;
    },
    Height(){
        return  this.size +  this.unit;
        
    },
    halfWidth(){
       return this.size * 1.5 + this.unit;
    },
    slideOffset(){
         return this.size  + this.unit;
    }
},
}
</script>

<style scoped lang="less">
@import "~@/components/public/style/common.less";
#slide-button{
    display: inline-block;
    background: @gray;
    .box-shadow-down;
    .slide{
        display: block;
        position: relative;
        background: orange;
        .box-shadow-up;
        text-align: center;
        user-select: none;
        transition: all ,.5s;
    }
}

</style>