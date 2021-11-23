<template>

<header :class="inTop">
    <div class="menu">
   <a  v-for="(item, i ) in menu" :key="i" :ref=item.href> <li :class="{selected:item.selected}" >{{item.name}}</li></a>
    </div>
    <div class="option">
    <li v-for="(item,i) in option" :key="i">{{item.name}}</li>
    </div>
</header>
</template>

<script>
export default {
    data(){
        return {
            menu:this.$state.menu,
            inTop:"inTop",
            option:this.$state.headerOption 
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
    border: none;
}

header{  
    background:@header-color;
    position: relative;
    min-width: @min-width;
    height: 5vh;
    line-height: 5vh;
    border-bottom: 1px solid #eee;
    z-index: 9999;
    transition: all 2s;
    display: flex;
    justify-content: space-between;
    .menu{
         margin-left: @left-distance;
    }
    .option{
        margin-right: @left-distance;
    }

    li{
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
          border-bottom: 2px orange solid;
            text-shadow:5px 5px 4px #444;
        
      }
      }
} 

</style>