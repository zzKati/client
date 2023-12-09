<template>
    <!-- 歌曲组件 
        传过来的数据中 track.name 歌曲名字
        track.ar[i].name 歌曲的第i个作者
        track.al.name 专辑名字
        dt 歌曲的时长  单位为秒(6为数)
     -->
    <div class="song" @dblclick="playSong">
        <p class="index">{{ index+1 }}</p>
        <p class="download">
            <img src="../assets/download-solid.svg">
        </p>
        <p class="song-title">{{ searchList.name }}</p>
        <p class="singer">{{ singer }}</p>
        <p class="album">{{ searchList.album.name }}</p>
        <p class="time">{{ time }}</p>
    </div>
</template>


<script>
import { mapMutations } from 'vuex'

export default{
    name:'SearchSong',
    props:['searchList','index'],
    computed:{
        singer(){
            let result = ''
            this.searchList.artists.forEach(author => {
                result += author.name + '/'
            })
            return result.slice(0,result.length-1)
        },
        time(){
            let second = Math.floor(this.searchList.duration / 1000)
            let minute = Math.floor(second / 60)
            second -= minute * 60
            if(second >= 10){
                return `${minute}:${second}`
            }else{
                return `${minute}:0${second}`
            }

        }
    },
    methods:{
        ...mapMutations(['updatePlayList']),
        // /song/url?id=33894312
        playSong(){
            let playlist = {
                al:{
                    picUrl:"https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg"
                },
                name:this.searchList.name,
                id:this.searchList.id,
                ar:this.searchList.artists,
                
            }
            this.updatePlayList(playlist)
        }
    },

}
</script>

<style lang="less" scoped>

    .song{
        width: 90vw;
        height: 4vh;
        line-height: 4vh;
        display: flex;
        .download img{
        width: 15px;
        height: 15px;
        opacity: .5;
    }

    .index{
        width: 3vw;
        text-align: center;
        color:rgba(200,217,232)
    }

    .download{
        width: 2vw;
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
    
    .song:hover{
        background-color: rgb(242,242,242);
    }


</style>