<template>
<div class="content">
    <div class="menu">
   <a  v-for="(item, i ) in menu" :key="i" :ref=item.href> <li :class="{selected:item.selected}" >{{item.name}}</li></a>
    </div>
    <div class="option">
    <li>登录</li>
    <li>友链</li>
    </div>
</div>
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
            abc : "123",
        }
    }

}
</script>

<style scoped lang="less">
@import "~@/components/public/common.less";
.content{
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