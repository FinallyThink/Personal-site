<template>
    <div id="main">
     <div id="navigation">
     <a v-for="(item,i)  in menu" :key="i">
       <li @click="beClick(i)">
         <img  :src="item.selected?header_svg_pink:header_svg" alt="">
         {{item.name}}
       </li>
      </a>
     </div>
    <div id="principal">
     <Subject/>
    </div>
     <div id="subsidiary">
       <Subsidiary/>
      </div>
    </div>
</template>

<script>
  import axios from "@/api/index.js";
  import Subject from './subject.vue';
  import Subsidiary from './subsidiary.vue';

export default {
  components: { 
  Subject,
  Subsidiary },

data(){
  return {
    menu:[],
    header_svg :this.$state.header_svg.default,
    header_svg_pink:this.$state.header_svg.pink,
  }
},
async created(){
  const rq = new axios(this.$state.api);
  const result = await rq.post({});
  if(result.status === 0){
      console.log(result);
      return;
  }
  this.menu = result.data.map(function(ele , i){
    ele.selected = i === 0 ? true : false;
    return ele;
  })
},
methods:{
  beClick(key){
      this.menu.forEach((ele , i )=> {
       
        ele.selected = false;
        if(i === key){
          let price = {Reading:ele.href}
          this.$store.commit('ApiChange',price);
          ele.selected = true;        
        }      
    });
  }
},
mounted(){

  let containers =[" #navigation","#subsidiary"];
  window.addEventListener('scroll',()=>{
    let distance = document.documentElement.scrollTop;
      containers.forEach(element => {
      document.querySelector(element).style.top = distance +"px";     
   });
  },
  false);
}

}
</script>

<style scoped lang="less">
@import "~@/components/public/style/common.less";

#main{
  z-index: 888;
  position: relative;
  top : 15vh;
  width: @max-width * 0.9;
  min-height: 80vh;
  margin: 0 auto;
  #navigation{
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
    top : 0;
    width:15%;
    max-height: 60vh;
    position: absolute;
    .container-b;
  }
  #principal{
    width: 60%;
    min-height: 100%;
    position: absolute;
    left:20%;
    .container-b;
  }
  #subsidiary{
    right: 0;
  }
  
}


</style>