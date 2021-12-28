<template>
  <div id="app">
    <Article/>
    <Controller/>
    <Background/>
    <ToTop/>

  </div>
</template>

<script>
 import Article from './components/Article.vue'; 
 import Controller from './components/public/components/controller.vue';
 import Background from './components/public/components/image/background.vue';
 import ToTop from './components/public/components/tool/toTop.vue';

export default {
  name: 'App',
  components: {
      Article,
      Controller,
      Background,
      ToTop
  },
}
</script>

<style>
@import "components/public/style/init.css";

</style>
