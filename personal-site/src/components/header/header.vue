<template>

<header :class="inTop">
    <div class="menu">
   <a  @click="changePage(i)" v-for="(item, i ) in menu" :key="i" :ref=item.href> <li :class="{selected:item.selected}" >{{item.name}}</li></a>
    <div id="writeSlide"></div>
    </div>
    <div class="option">
    <li @click="loginUp">登录</li>
    <li id="friends">友链</li>
    <div id="friend-list">
        <a v-for="(item,i) in friends" :key="i" :ref=item.href>{{item.name}}</a>
    </div>
    </div>
</header>
</template>

<script>
export default {
    data(){
        return {
            menu:this.$state.menu,
            inTop:"inTop",
            friends:this.$state.friends 
        }
    },
     mounted () {
        window.addEventListener('scroll', this.scrollTop);     
    },
    methods:{
        scrollTop(){
           
           let distance = document.documentElement.scrollTop;
           if(distance < 60){
               this.inTop = "inTop"
           }else{
               this.inTop  = "";
           }
          document.querySelector("header").style.top = distance + 'px';
        },
        changePage(key){
            console.log(key)
        },
        loginUp(){
            alert("当前IP禁止登录")
        }
    }
}
</script>

<style scoped lang="less">
@import "~@/components/public/style/common.less";
.inTop{
    background:transparent;
    border: none;
}
// 滑块滑动特效 
.forDo(@index,@position) when(@index<@len){
              a:nth-child(@{index}):hover~#writeSlide{
                  @{position}: calc(@left-distance + (@index - 1) * 65px);
           }
           .forDo(@index + 1,left);
          }

header{  
    background:@header-color;
    position: absolute;
    min-width: @min-width;
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    border-bottom: 1px solid #eee;
    z-index: 9999;
    transition: background 2s;
    display: flex;
    justify-content: space-between;
    .menu{
         @len : 6;
         @right:left;
          margin-left: @left-distance;
         #writeSlide{
             width: 65px;
             height: 100%;
             position: absolute;
             background:#333;
             top:0;
             left: @left-distance;
             z-index: 9978;
             border-bottom: 2px orange solid;
             transition: all .3s;
         }
     
         .forDo(0,left);
    }
    .option{
        margin-right: @left-distance;
        li{
            cursor: pointer;
            &:hover{
            border:none;
        }}
    }

    li{
        z-index: 9979;
      position: relative;
      width: 65px;
      color: @font-color_f;
      display: inline-block;
      user-select: none;
      text-align: center;
      text-shadow:@text-shadow;
       &.selected{
       border-bottom: 2px orange solid;
      }
      &:hover{
     
            text-shadow:5px 5px 4px #444;
        
      }
      }
      #friends:hover~#friend-list{
          visibility: visible;
      }

      #friend-list{
          visibility:hidden;
          &:hover{
              visibility: visible;
          }
          display: flex;
          flex-direction: column;
          .container-b;
    
          a{
              width: 100%;
              text-align: center;
              color: black;
              text-shadow: none;
              &:hover{
                        box-shadow: -2px -2px 1px @gray;
                        background: fadein(@header-color,10%);
              }
          }
      }
} 

</style>