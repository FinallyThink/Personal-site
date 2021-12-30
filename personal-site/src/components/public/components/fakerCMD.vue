<template>
 <div id="fakerCMD"> 
 </div>
</template>

<script>
import Axios from '@/api/index.js';

export default {
    data(){
        return{
            specialS: ["。","."],
            htmlText:"",
            specialStr:"",
            cursor:"<div class=\"cursor\"></div>"
        }
    },
    methods:{
        //添加text文本
        addText(string,startStep){
            let step = startStep?startStep:0;
            var symbolAdd = this.symbolAdd();
            string.forEach((ele)=>{
                step += 200;
                setTimeout(()=>{
                   symbolAdd(ele);
                },step);
                if(this.specialS.some((symbol)=>{
                    return symbol === ele;
                })){
                    step +=1000;
                }
            });
        },
        addhtml(symbol){
            if(this.specialStr){
                this.specialStr += symbol
            }else{
            this.htmlText += symbol;
            document.querySelector("#fakerCMD").innerHTML = this.htmlText + this.cursor;}
        } ,
       //对特殊字符进行停顿处理
       special(ele){
           if(ele.IsStr === 1){
               this.specialStr += ele.head;
               return;
           }
           if(ele.IsStr === 2){
               this.htmlText += this.specialStr + ele.end;
               this.specialStr = "";
           }
           this.addhtml(ele.head + ele.end);
       },
       //字符处理函数
       symbolAdd(){
           //字符栈
           var _this = this;
           var specialSymbol = [
               {symbol:" ",head:"&nbsp",end:"",IsStr:0}
              ,{symbol:"X",head:"<div class=\"hide\">",end:"</div>",IsStr:0}
              ,{symbol:"&",head:"<br/>",end:"",IsStr:0}
              ,{symbol:"{",head:"<div class=\"hideText\">",end:"",IsStr:1}
              ,{symbol:"}",head:"",end:"</div>",IsStr:2}]
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
       async getText(callback){
            const href = './post/selfIntroduction';
            const req = new Axios(href);
            const data = await req.post({});
            if(data.status === 1){
                console.log(data.data.split("")[0]);
                callback(data.data.split(""));
            }else{
                console.warn("faild :",href);
            }
        }
    },
    mounted(){
        this.getText((data)=>{
            this.addText(data);
        });
    },
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