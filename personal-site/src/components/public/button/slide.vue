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
  float:(open?'left':'right')}"
  >{{open?'on':'off'}}</div>
  </div>
</template>

<script>
export default {
data(){
    return{
        size: this.seting.size,
        unit:this.seting.unit,
        open:this.isOpen
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
    }
},
}
</script>

<style scoped lang="less">
@import "~@/components/public/style/common.less";
#slide-button{
    background: @gray;
    transition: all ,1.5s;
    .box-shadow-down;
    .slide{
        background: orange;
        .box-shadow-up;
        text-align: center;
        user-select: none;

    }
}

</style>