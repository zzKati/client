<template>
    <!-- 歌曲的容器 -->
    <div class="music-list">
        <div class="title">
            <p class="download">
                操作
            </p>
            <p class="song-title">歌曲</p>
            <p class="singer">歌手</p>
            <p class="album">专辑</p>
            <p class="time">时间</p>
        </div>
        <div v-for="(t,index) in tracks" :key="t.id" class="songs">
            <Song :track="t" :index="index"></Song>
        </div>
    </div>

</template>


<script>
import Song from './Song.vue'
export default{
    name:'MusicList',
    components:{Song},
    props:['tracks']
}

</script>

<style lang='less' scoped>
    .title{
        width: 90vw;
        height: 4vh;
        line-height: 4vh;
        display: flex;

    .download img{
        width: 15px;
        height: 15px;
    }

    .download{
        width: 2vw;
        margin-left: 3vw;
    }

    .song-title{
        width: 35vw;
    }

    .singer{
        width: 20vw;
    }

    .album{
        width: 20vw;
    }
        
    }
    .music-list{
        margin-top: 1vh;
    }

    .songs:nth-child(2n){
        background-color: rgb(250,250,250);
    }
</style>