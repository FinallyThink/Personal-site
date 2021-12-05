<template>
  <div v-if="show" class="message"
  :style="{
      background:this.bColor,
      animationDuration:this.animationDuration,
      width:this.width,
      height:this.height,
      borderRadius:this.size/2 + this.unit
      }">
     {{showMessage}}
  </div>
</template>

<script>


export default {
    data(){
        return{
            showMessage:this.message,
            show:true,
            animationDuration:this.duration +"ms", 

        }
    },
    props:{
        size:{
            type:Number,
            default:50
        },
        message:{
            type:String,
            required:true
        },
        unit:{
            type:String,
            default:"px"
        },
        duration:{
            type:Number,
            default:2500
        },
        mType:{
            type:String,
            default:"message"
        }
    },
    computed:{
        width(){
            return this.size * 4 +this.unit
        },
        height(){
            return this.size + this.unit
        },
        bColor(){
            switch(this.mType){
                case "message":
                    return "#6bc56b";
                case "wram":
                    return "red";
                case "alert":
                    return "yellow";
                default:
                    return "#6bc56b";    
            }
        }
    },
    //自动销毁
    mounted:function(){
        setTimeout(()=>{
            this.show = false
        },this.duration - 100)
    }

}
</script>

<style scoped lang="less">
@import "~@/components/public/style/common.less";

.message{
    position: fixed;
    display: flex;
    left: 50%;
    font-size: 1.2rem;
    box-shadow:@box-shadow ;
    text-shadow: @text-shadow;

    transform: translate(-50%,-50%);
    justify-content:center;
    align-items: center;
    animation-name: vanish;
    animation-timing-function:ease ;

    z-index: 9999;
}
@keyframes vanish{
   0%{opacity: 1;
       top:0%}
   30%{
       opacity: 1;
       top:30%;
    }
    70%{
       opacity: 1;
       top:30%;
    }
    100%{
      opacity: 0;
       top:-10%
    }
}
</style>