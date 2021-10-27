<template>
  <div v-if="show" class="message"
  :style="styleObject">
     {{showMessage}}
  </div>
</template>

<script>
export default {
    data(){
        return{
            showMessage:this.message,
            show:true,
            styleObject : {
                width:this.width,
                height:this.height,
                animationDuration:this.duration +"ms" 

            }
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
            default:1500
        }
    },
    computed:{
        width(){
            return this.size * 4 +this.unit
        },
        height(){
            return this.size + this.unit
        },
    },
    mounted:function(){
        setTimeout(()=>{
            this.show = true
        },this.duration+1000)
    }

}
</script>

<style scoped lang="less">

.message{
    position: absolute;
    display: flex;
    top:50%;
    left: 50%;

    transform: translate(-50%,-50%);
    justify-content:center;
    align-items: center;
    border-radius: 5%;
    animation-name: vanish;
    animation-timing-function:ease ;
    animation-delay: 1s; 
}
@keyframes vanish{
   from{opacity: 1;
       top:50%}
    to{
       opacity: 0;
       top:40%;
    }
}
</style>