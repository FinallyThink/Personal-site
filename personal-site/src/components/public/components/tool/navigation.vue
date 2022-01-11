<template>
   <div id="navigation">
     <a v-for="(item,i)  in menu" :key="i">
       <li @click="beClick(i)">
         <img  :src="item.selected?header_svg_pink:header_svg" alt="">
         {{item.name}}
       </li>
      </a>
     </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  props:{
    menu:{
      
    }
  }
}
</script>

<style lang="less" scoped>
#navigation{
    .container-b;
    li{
      img{
        height: 1.4rem;
        width: auto;
      }
      &:hover{
        box-shadow: -2px -2px 1px @gray;
        background: fadein(@header-color,10%);
      }
      display: flex;
      height: 5vh;
      text-align: center;
      align-items: center;
      padding: 3%;
      border-bottom: 1px solid @gray;
      user-select: none;
    }
  }
  #navigation ,#subsidiary{
    top : 15vh;
    width:150px;
    max-height: 60vh;
    position:fixed;

  }
</style>