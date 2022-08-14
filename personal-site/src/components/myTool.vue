<template>
  <Index>
   <template #header>
        <Header/>
   </template>
   <template #main>
       <Main/>
   </template>
  </Index>
</template>

<script>
import Header from './header/header.vue';
import Index from './index/index.vue';
import Main from '../components/body/myTool-main.vue';

export default {
 components: {
    Index,
    Header,
    Main,
  }
}
</script>

<style>

</style>