<template>
    <!-- 推荐歌单列表 -->
    <div class="song-list">
        <a href=""><h2>推荐歌单</h2></a>
        <ul class="song-wrapper">
            <li v-for="(m,index) in musicList" :key="index" class="song">
                <router-link :to="{
                    path:'/itemMusic',
                    query:{
                        id:m.id,
                    }
                }">
                    <img :src="m.picUrl">
                    <p>{{ m.name }}</p>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
export default{
    name:'SongList',
    data(){
        return{
            musicList:[]
        }
    },
    mounted(){
        axios.get('http://localhost:3000/personalized?limit=10').then(
        res=>{
            this.musicList = res.data.result
            // res.data.result.name
            // name:标题
            // picUrl 图片链接
            // trackCount:歌曲总数
            // playCount:播放总数
            // trackNumberUpdateTime:创建时间

        },err=>{
            console.log(err.message)
        })
    }
}
</script>

<style scoped>
    .song-list{
        margin-top: 10px;
    }

    .song-wrapper{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 10px;
    }

    .song img{
        width: 11vw;
        height: 19.56vh;
        border-radius: 8px;
    }

    .song{
        width: 11vw;
    }

    h2{
        font-weight: 900;
    }

    p{
        font-size: 18px;
    }
</style>