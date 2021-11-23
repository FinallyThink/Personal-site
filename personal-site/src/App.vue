<template>
  <div id="app">
    <Home>

    </Home>
    <!-- <message :message="message"/> -->
  </div>
</template>

<script>
import Home from './components/myHome.vue'; 
// import message from './components/public/components/message/showMessage.vue'

export default {
  name: 'App',
  components: {
    Home
  },
}
</script>

<style>
@import "components/public/style/init.css";

</style>
