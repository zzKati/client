<template>
    <!-- 歌单详细信息 -->
    <div id="wrapper">
        <!-- 歌单顶部用户信息 -->
        <MusicListInfo :playlist="playlist"></MusicListInfo>
        <!-- 歌单详细歌曲 -->
        <MusicList :tracks="playlist.tracks" v-if="playlist?.creator"></MusicList>
    </div>
</template>

<script>
    import axios from 'axios'
    import MusicListInfo from './MusicListInfo.vue'
    import MusicList from './MusicList.vue'
    export default{
        name:'ItemMusic',
        components:{MusicListInfo,MusicList},
        props:['id'],
        data(){
            return {
                playlist:{}
            }
        },
        mounted(){
            axios.get(`http://localhost:3000/playlist/detail?id=${this.id}`).then(
                res=>{
                    this.playlist = res.data.playlist
                    /**
                     * playlist:{
                     *  tags[] 歌单标签
                     *  name 歌单名称
                     * }
                     */
                    console.log(res.data)
                },err=>{
                    console.log(err.message)
                })
        }
    }
</script>

<style scoped>
    #wrapper{
        height:85vh;
        overflow-x: hidden;
        overflow-y: auto;
    }
</style>