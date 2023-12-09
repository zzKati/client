<template>
  <div class="context">
    <!-- 顶部路由 -->
    <ul class="nav-wrapper">
      <li v-for="(t,index) in topNav" :key="index">
        <a href="">{{ t }}</a>
      </li>
    </ul>
    <div class="top-nav"></div>
    <!-- 轮播图 -->
    <Banner></Banner>

    <!-- 推荐歌单  -->
    <SongList></SongList>
  </div>
</template>
  
<script>
import Banner from './Banner.vue'
import SongList from './SongList.vue'
  export default {
    name: 'Context',
    components:{Banner,SongList},
    data(){
      return{
        topNav:['个性推荐','专属订制','歌单','排行榜','歌手','最新音乐']

      }
    }
  }
</script>
  
<style scoped>
  .context{
    width: 78vw;
    height: 85vh;
    margin-left: 13vw;
    padding-right: 15vw;
    overflow: auto;
  }

  .nav-wrapper{
    display: flex;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .nav-wrapper li{
    font-size: 18px;
    padding: 10px;
    margin-right: 5px;
    
  }

  .active{
    border-bottom: 2px rgb(236,65,65) solid;
  }

</style>
  