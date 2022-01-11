<template>
  <div id="app">
    <!-- <Article/> -->
    <Controller/>
    <Background/>
    <ToTop/>
    <!-- <MyText/> -->
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
//  import Article from './components/Article.vue'; 
 import Controller from './components/public/components/controller.vue';
 import Background from './components/public/components/image/background.vue';
 import ToTop from './components/public/components/tool/toTop.vue';
 import Footer from './components/footer/footer.vue'
// import MyText from './components/text.vue';

export default {
  name: 'App',
  components: {
      Controller,
      Background,
      ToTop,
      Footer
  },
}
</script>

<style scoped>
@import "components/public/style/init.css";

</style>
