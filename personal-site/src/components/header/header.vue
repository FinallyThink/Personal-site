<template>

<header>
    <div :class="inTop">
   <a  v-for="(item, i ) in menu" :key="i" :ref=item.href> <li :class="{selected:item.selected}" >{{item.name}}</li></a>
    </div>
    <div class="option">
    <li>登录</li>
    <li>友链</li>
    </div>
</header>
</template>

<script>
export default {
    data(){
        return {
            menu:[
                 {
                    id: 1,
                    name : "主站",
                    href : "#",
                    selected: true
                },
                {
                    id: 2,
                    name : "文章",
                    href : "#",
                    selected: false
                },
                {
                    id: 3,
                    name : "收藏",
                     href : "#",
                    selected: false
                },
                {
                    id: 4,
                    name : "工具",
                    href : "#",
                    selected: false
                },
                {
                    id: 5,
                    name : "简历",
                    href : "#",
                    selected: false
                },
            ],
            inTop:"inTop"
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
        }
    }
}
</script>

<style scoped lang="less">
@import "~@/components/public/style/common.less";
.inTop{
    background:transparent;
}

header{  
    background:@header-color;
    position: fixed;
    width: @max-width;
    height: 5vh;
    line-height: 5vh;
    top: 0;
    left: 0;
    border-bottom: 1px solid #eee;
    z-index: 9999;
    transition: all 2s;
  
.menu{
    padding-left:@left-distance;
    display: inline-block;
}

.option{
    display: inline-block;
    position: absolute;
    right: @left-distance;
}
    li{
      position: relative;
      width: 65px;
      color: @font-color_f;
      display: inline-block;
      user-select: none;
      text-align: center;
      text-shadow:4px 4px 2px #999;
       &.selected{
       border-bottom: 2px orange solid;
      }
      &:hover{
          border-bottom: 2px orange solid;
            text-shadow:5px 5px 4px #444;
        
      }
      }
} 

</style>