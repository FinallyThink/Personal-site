<template>

<header :class="inTop">
    <div class="menu">
    <a  @click="clickMenu(i)" v-for="(item, i ) in menu" :key="i" href="javascript:"><router-link :to="item.href"> <li :class="{selected:item.selected}" >{{item.name}}</li></router-link></a>
    <div id="writeSlide"></div>
    </div>
    <div class="option">
    <li @click="loginUp">登录</li>
    <li id="friends">友链</li>
    <div id="friend-list">
        <a v-for="(item,i) in friends" :key="i" :ref=item.href>{{item.name}}</a>
    </div>
    </div>
    <div class="mediaSelfName">
            <img :src="headImg" alt="">
            <span>勒思师</span>
    </div>
    <div class="mediaMenu">
        <li>菜单</li>
        <div id="menuList">
        <a  @click="clickMenu(i)" v-for="(item, i ) in menu" :key="i"> <router-link :to="item.href"> <li :class="{selected:item.selected}" >{{item.name}}</li></router-link></a>
        </div>
    </div>
</header>
</template>

<script>
import  headPicture from "@/assets/image/molisha.jpg";
export default {
    data(){
        return {
            menu:this.$store.state.headMenu,
            inTop:"inTop",
            friends:this.$state.friends,
            headImg: headPicture

        }
    },
     mounted () {
        window.addEventListener('scroll', this.scrollTop);     
    },
    methods:{
        scrollTop(){
           let distance = document.documentElement.scrollTop;
           if(distance < 60 ){
               this.inTop = "inTop";

           }else{
               this.inTop  = "";

           }
           return;
        },
        clickMenu(key){
            this.$store.commit('menuSelectedChange',key);
            document.getElementById("writeSlide").className = "Slide" + ++key;
        },
        loginUp(){
            alert("当前IP禁止登录")
        },
    }
}
</script>

<style scoped lang="less">
@import "~@/components/public/style/common.less";

@media screen and(max-width:700px) {
      .option,.menu{
         display: none;
        }
     .inTop,header{  
      background-color :fade(@theme-color,50%);
      }               
      .mediaSelfName{
          margin-left: @left-distance;
          display: flex;
          align-items: center;
          img{
              height: 2.5rem;
              border-radius: 1.25rem;
          }
          span{
            font-family:"楷体";
            font-weight: 500;
            font-size: 1.5rem;
            &::before{
                display: inline-block;
                content: " ";
                width: 10px;
            }
          }
          .selected{
              color: orange;
              border:none
          }
      }
     .mediaMenu{
             margin-right: @left-distance;
             >li{
                 margin-top:.5rem;
                 background: fade(@theme-color,70%);
                 height: 2rem;
                 display: flex;
                 align-items: center;
                 justify-content: center;
                 border-radius: .5rem;
                 box-shadow: .3rem .3rem 0 #999;
                 &:hover~#menuList{
                     transform: rotate3d(1, 0, 0, 0deg);
                 }
             }
             #menuList{
                transition: all .6s;
                transform-origin:top;
                box-shadow: @box-shadow;
                transform: rotate3d(1, 0.2, 0, 90deg);
                margin-top: 10px;
                background: fade(@theme-color,70%);
                border-radius: 7px;
                &:hover{
                  transform: rotate3d(1, 0, 0, 0deg);

                }
             }
            #menuList a li{
                 display: block;
            }
            #menuList a li.selected{
                border:none;
                color:  yellow;
                cursor:auto;
                pointer-events: none;
            }
      }
          
      

}

.inTop{
    border: none;
}
// 滑块滑动特效 
.forDo(@index,@position) when(@index<@len){
            a:nth-child(@{index}):hover~#writeSlide{
                  @{position}: calc(@left-distance + (@index - 1) * 65px) !important;
           }
           .Slide@{index}{
                @{position}: calc(@left-distance + (@index - 1) * 65px) !important;
           }
           .forDo(@index + 1,left);
          }

header{  
    background-color :fade(@theme-color,50%);
    position:fixed;
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    border-bottom: 1px solid #eee;
    z-index: 9999;
    transition: background 2s;
    display: flex;
    justify-content: space-between;
    border-radius: 0 0 0.7rem 0.7rem;
    top:0;
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
          border-radius:unset;
    
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
@media screen and (min-width:700px){
    .mediaSelfName,.mediaMenu{
        display: none;
    }

} 


</style>