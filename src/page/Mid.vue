<template>
  <!-- 中间内容区
        其中 Nav 为左侧导航栏
        Context 为右侧内容区
        ItemMusic 为歌单区
   -->
  <div class="mid-wrapper">
    <Nav></Nav>
    <router-view :key="key"></router-view>
  </div>
</template>
  
<script>
import Nav from './Nav.vue'
import Context from './Context.vue'
export default {
  name: 'Mid',
  components: { Nav, Context },
  computed:{
    key(){
      return this.$route.name !== undefined
        ? this.$route.name + new Date()
        : this.$route + new Date();
    }
  }
}
</script>
  
<style scoped>
.mid-wrapper {
  display: flex;
}
</style>
  