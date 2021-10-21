<template>
  <Index>
   <template #header>
        <Header/>
   </template>
  </Index>
</template>

<script>
import Header from './header/header.vue';
import Index from './index/index.vue';
export default {
 components: {
    Index,
    Header
  }
}
</script>

<style>

</style>