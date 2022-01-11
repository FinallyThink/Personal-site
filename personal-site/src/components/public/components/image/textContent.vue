<template>
          <div class="catchphrase">
            <span class="Text">{{textHead}}<br/>{{textEnd}}</span>
            <div class="bottom"><s>Deus tu volt</s></div>
        </div>
</template>

<script>
export default {
    data(){
        return{
             textHead:"",
             textEnd:"",
        }
    },
    props:{
        textArr:{
            type:Array,
            require:true,
        }
    },
    methods:{
        textIni(){
           let length = this.textArr.length,i = 0,step = 6000;
           this.textHead = this.textArr[i].Head;
           this.textEnd  = this.textArr[i].End;
           i=1;
           setTimeout(()=>{
           setInterval(()=>{
                i %= length; 
                this.textHead = this.textArr[i].Head;
                this.textEnd  = this.textArr[i].End;
                i++;
            },step)
         },1500);
        }
    },
    mounted(){
         this.textIni();
    }
}
</script>

<style scoped lang="less">
@import "~@/components/public/style/common.less";
         .catchphrase{
             position: sticky;
             width: calc(100% - 20px);
             .container-b;
             background-color :fade(@theme-color,50%);
             height: 200px;
             padding:10px;
             top:5rem;
             display: flex;
             align-items: center;
             justify-content: center;
             border: 1px solid #AAA;
             text-align: center;
             overflow: hidden;
             span{
                 transition: all 2s;
                 transform-origin:center;
                 font-size: 1rem;
                 text-shadow: 1px 1px 1px rgb(73, 30, 70) ,-1px -1px 4rem  rgb(83, 231, 150);
                 animation: shadowColor 10s infinite,shadowTran 6s infinite; 
             }
             .bottom{
                 position: absolute;
                 width:100%;
                 font-size: 1rem;
                 background: #fff;
                 bottom: 2px;
                 text-shadow: -1px -1px 1px #333;
             }
         }

@keyframes shadowTran{
    0%{
       transform: rotate3d(0,0,0,0deg);
    }
    25%{
       transform: rotate3d(.2,1,0,90deg); 
    }
    26%{
       transform: rotate3d(-.2,1,0,90deg); 
    }
    50%{
       transform: rotate3d(0,0,0,0deg);
    }
    100%{
        transform: rotate3d(0,0,0,0deg);
    }
    
}

@keyframes shadowColor {
    0%{
       text-shadow: 1px 1px 1px rgb(156, 161, 241) ,-1px -1px 2rem rgb(182, 99, 99);
     }
    20%{
       text-shadow: 1px 1px 1px rgb(250, 241, 109) ,-1px -1px 2rem rgb(252, 59, 171); 
    }
    40%{
       text-shadow: 1px 1px 1px rgb(109, 198, 250) ,-1px -1px 2rem rgb(91, 30, 190);  
    } 
    60%{
       text-shadow: 1px 1px 1px rgba(159, 7, 230, 0.863) ,-4px -2px 2rem rgb(238, 26, 26);  
    }
    80%{
      text-shadow: 1px 1px 1px rgb(233, 175, 15) ,-4px -2px 2rem rgb(192, 225, 235);  
    }
    100%{
      text-shadow: 1px 1px 1px rgb(156, 161, 241) ,-1px -1px 2rem rgb(182, 99, 99);
    }

}

</style>