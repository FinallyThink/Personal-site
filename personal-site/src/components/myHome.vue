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
import Main from './body/main-body.vue';
export default {
 components: {
    Index,
    Header,
    Main
  }
}
</script>

<style>

</style>