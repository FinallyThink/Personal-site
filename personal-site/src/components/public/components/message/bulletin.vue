
<template>
<!-- 公告栏 -->
  <div id="buletin">
    <div class="Whiteboard">
        <h4>公告:</h4>
        <p>本站尚处于公开测试阶段,以后会持续更新DA⭐ZE</p>
        <li>2022/01/01</li>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
<style lang="less" scoped>
@import "~@/components/public/style/common.less";
#buletin{
     @padding:20px;
    .container-b;
    margin-bottom: 20px;
    position: sticky;
    width: calc(100% - @padding * 2);
    height: calc(200px - @padding * 2);
    padding: @padding;
    .Whiteboard{
      font-size: 1rem;
      width: 100%;
      height: 100%;
      background: fade(#fff,20%);
      h4{
        width: 3rem;
        color: orange;
            background-image: linear-gradient(135deg,red,blue);
            background-clip:text;
            -webkit-background-clip:text;
            color: transparent;
      }
      p{
        font-size:.9rem;
        text-indent: 1rem;
        text-shadow: 1px 1px 1px #eee;
      }

      li{
          position: absolute;
          bottom: 1rem;
          padding: 1rem;
          color:rgb(66, 66, 66);
          font-size:.5rem;
          right: 1rem;
      }
    }
}

</style>