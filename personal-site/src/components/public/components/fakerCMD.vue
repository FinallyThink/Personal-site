<template>
 <div id="fakerCMD">
     <div class="cursor"></div>
 </div>
</template>

<script>
import {selfIntroductionApi} from '@/api/api.js';
var stop = false;


export default {
    data(){
        return{
            specialS: ["。","."],
            htmlText:"",
            specialStr:"",
            cursor:"<div class=\"cursor\"></div>",
            step : 0,
        }
    },
    methods:{
        //添加text文本
        addText(string){
            var symbolAdd = this.symbolAdd();
            string.forEach((ele)=>{
                   symbolAdd(ele);
            });
        },
        addhtml(symbol){
            if(this.specialStr){
                this.specialStr += symbol
            }else{
                 this.step += 200;
                 this.htmlText += symbol;
                 let str = this.htmlText;
                setTimeout(()=>{
                    if(document.querySelector("#fakerCMD")){                                    
                     document.querySelector("#fakerCMD").innerHTML = str + this.cursor;
                    }
                },this.step);
            if(this.specialS.some((ele)=>{
                return symbol === ele;
            })){
               this.step +=1000;
            }
            }
        } ,
       //对特殊字符进行停顿处理
       special(ele){
           let symbol = "";
           if(ele.IsStr === 1){
               this.specialStr += ele.head;
               return;
           }
           if(ele.IsStr === 2){
               symbol += this.specialStr + ele.end;
               this.specialStr = "";
           }
           if(ele.IsStr === 3){
               this.specialStr += ele.symbol;
               return;
           }
           if(ele.IsStr === 4){
               let arr =  this.specialStr.split("");
               let length = arr.length - 1;
               this.specialStr = "";
               for(let i = 1 ;i <= length*2;i++){
                   if(i <= length){
                       this.addhtml(arr[i]);
                   }else{
                       this.htmlText = this.htmlText.substring(0,this.htmlText.split("").length -1);
                       this.addhtml("")
                   }
               }
               return;
           }
           this.addhtml(ele.head+symbol+ele.end);
       },
       //字符处理函数
       symbolAdd(){
           //字符栈
           var _this = this,
               specialSymbol = [
               {symbol:" ",head:"&nbsp",end:"",IsStr:0}
              ,{symbol:"X",head:"<div class=\"hide\">",end:"</div>",IsStr:0}
              ,{symbol:"&",head:"<br/>",end:"",IsStr:0}
              ,{symbol:"{",head:"<div class=\"hideText\">",end:"",IsStr:1}
              ,{symbol:"}",head:"",end:"</div>",IsStr:2}
              ,{symbol:"[",head:"",end:"",IsStr:3}
              ,{symbol:"]",head:"",end:"",IsStr:4}]
           return function(symbol){
               if(!specialSymbol.some((ele)=>{
                   if(ele.symbol === symbol ){
                       _this.special(ele)
                   }
                   return ele.symbol === symbol
               })){
                   _this.addhtml(symbol);
               }
           }
       },
    },
    mounted(){
        if(stop) return;
         stop = true;
        selfIntroductionApi().then((res)=>{
           if(res.status === 200 &&  res.data.status === 1){
               this.addText( res.data.data.split(""));
           }else{
               console.log("加载selfIntroduction失败");
           }
      });
    }
}
</script>

<style  lang="less">
  #fakerCMD{
      box-sizing: border-box;
      width:calc(100% - 10px);
      min-height: 200px;
      background: black;
      color: #AAA;
      padding: 10px;
      margin: 0 auto;
      letter-spacing: 2px;
      
  }
 .hideText,.hide,.cursor{
      display: inline-block;
      background: #AAA;

  }
  .cursor{
     width: .6rem;
     height: 0.2rem;
     animation:  ficker 1s infinite
  }
  .hide{
    width: 1rem;
    height: 1rem;
    border-left:1px solid black;
  }
  .hideText{
    height: 1.2rem;
    &:hover{
        background: black;
    }
  }
  @keyframes ficker{
      0%{opacity: 1;}
      49%{opacity: 1;}
      50%{opacity: 0;}
      100%{opacity:0;}
  }
</style>