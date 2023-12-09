<template>
  <div>
    <!-- 顶部信息框 -->
    <Top></Top>

    <!-- 中间的主要信息栏 -->
    <Mid></Mid>

    <!-- 底部的播放栏 -->
    <MusicFooter></MusicFooter>

  </div>
</template>

<script>  
import Top from './components/Top.vue'
import Mid from './page/Mid.vue'
import MusicFooter from './components/MusicFooter.vue'
export default {
  name: 'App',
  components:{Top,Mid,MusicFooter},
}
</script>

<style>

</style>
