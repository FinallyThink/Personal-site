<template>
  <div id="subject">
    文章主体
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">

#subject{
  @subpadding:10px;
  width:calc(100% - @subpadding * 2);
  padding: @subpadding;
}

</style>