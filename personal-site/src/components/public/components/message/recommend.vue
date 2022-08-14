/** 推荐阅读的组件 */
<template>
  <div id="recommend">
      <h4>{{title}}</h4>
      <li v-for="(item,i) in list" :key="i"><a :href="item.href">{{item.name}}</a></li>
  </div>
</template>

<script>
export default {
  data(){
    return{
       list:[]
    }
  },
  props:{
    title:{
      type:String,
      require:true
    },
  },
  methods:{
    setmessage(arr){
      //name and href
      this.list = arr;
    }
  }

}
</script>

<style scoped lang="less">
@import "~@/components/public/style/common.less";
.margin{
  padding: .4rem;
  padding-bottom: 0;
}
#recommend{
    position: sticky;
    position: -webkit-sticky;
    top:5rem;
    font-size: 1rem;
    width:100%;
    height: 200px;
    margin-top:20px;
    .container-b;
    counter-reset: listHead 0;
    h4{
      text-shadow: 2px 2px 2px #bbb,2px 2px 2px #900;
      font-size:1.2rem;
      .margin;
    }
    li{

      display: flex;
      overflow: hidden;
      .margin;
      text-shadow:1px 1px  #bbb,1px 1px  #333 ;
      &:hover{
        background:  fade(@theme-color,80%);;
      }
      ::before{
        content: counter(listHead);
        counter-increment: listHead;
        display: inline-block;
        width: 1rem;
        height: 1rem;
        background: #333;
        color: #eee;
        font-weight: 200;
        font-size: .8rem;
        text-align: center;
        margin-right: .4rem;
      }

      a{
        display: inline-block;
        width: 100%;
        height: 1.2rem;
        font-size: .9rem;
        vertical-align: middle;
        ;
      }
    }
}

</style>