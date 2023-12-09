<template>
    <!-- 左侧导航栏 -->
    <div class="nav-wrapper">
        <ul class="nav">
            <a href=""><li class="nav-inner active">发现音乐</li></a>
            <a href=""><li class="nav-inner">播客</li></a>
            <a href=""><li class="nav-inner">直播</li></a>
        </ul>
    </div>

</template>
  
<script>
  export default {
    name: 'Nav',
    data(){
        return{

        }
    }
    
  }
</script>
  
<style scoped>
    .nav-wrapper{
        width: 10.42vw;
        height:85vh;
        background-color: #fff;
        border: 1px solid rgb(224,224,224);
        border-left: none;
    }

    .nav-inner{
        height: 2.78vh;
        line-height: 2.78vh;
        font-size: 16px;
        padding-left: 20px;
        margin-bottom: 3px;
        border-radius: 4px;
    }

    .nav-inner:hover{
        background-color: rgb(246,246,247);
    }

    .active{
        background-color:rgb(246,246,247);
        font-size: 18px;
        font-weight: 900;
    }

    .nav{
        margin-top: 10px;
        margin-left: 20px;
    }
</style>
  