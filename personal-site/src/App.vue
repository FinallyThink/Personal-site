<template>
  <div id="app">
    <Home/>
    <Controller/>
    <Background/>
    <ToTop/>

  </div>
</template>

<script>
 import Home from './components/myHome.vue'; 
 import Controller from './components/public/components/controller.vue';
 import Background from './components/public/components/image/background.vue';
 import ToTop from './components/public/components/tool/toTop.vue';

export default {
  name: 'App',
  components: {
      Home,
      Controller,
      Background,
      ToTop
  },
}
</script>

<style>
@import "components/public/style/init.css";

</style>
