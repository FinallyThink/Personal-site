<template>
<div id="main">
    <div  id="leftMenu">
       <slot name="leftMenu"></slot>
    </div>
    <div id="main-body">
       <slot name="main-body"></slot>
    </div>
    <div id="rightContent">
       <slot name="rightContent"></slot>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
@import "~@/components/public/style/common.less";
@block-distance :30px;

@media screen and(max-width:700px) {
    #leftMenu,#rightContent{
        display: none;
    }
    #main-body{
        position: relative;
        margin: 0 auto;
        width: 100%;
    }

}
@media screen and(min-width: 700px)and(max-width:1300px){
    #main{
            max-width:  1210px;
    }

    #rightContent{
        display: none;
    }
    #leftMenu{
        display: block;
    }
    #main-body{
        position: relative;
        left: calc(150px + @block-distance);
        width: calc(100% - 150px - @block-distance);
        max-width: 900px;
    }
}
@media screen and(min-width:1300px){
    #leftMenu, #rightContent{
     display: block;
}    

    #main-body{
        left: calc(150px + @block-distance);
        width: calc(100% - 350px - @block-distance * 2);
        position: relative;
        top:0;
    }

}

#main{
    z-index: 1000;
    position: relative;
    margin: 0 auto;
    font-size:0;

    #leftMenu{
        position: absolute;
        left:0;
        width: 150px;
        height: 100%;
        margin: 0;
    }
    #main-body{
        transition: all .6s;
       .container-b;
       font-size: 1rem;
        &::after{
          content: " ";
          display: block;
          height: 20px;
        }
    }
    #rightContent{
        position: absolute;
        right: 0;
        width: 200px;
        height: 100%;
        margin: 0;
        top:0;

     }
}


</style>