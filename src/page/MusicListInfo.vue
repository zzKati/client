<template>
    <!-- 歌单顶部的用户信息栏 -->
    <div class="wrapper" v-if="playlist?.creator">
        <div class="img-wra">
            <img :src="playlist.coverImgUrl">
        </div>
        <div class="user-info">
            <span class="btn">歌单</span>
            <span class="name">{{ playlist.name }}</span>
            <div class="user-img">
                <a href="">
                    <img :src="playlist.creator.avatarUrl"> 
                     {{ playlist.creator.nickname }}
                </a>
                <span id="time">{{ createTime }} 创建</span>
                <div>
                    <span>
                        收藏数:&nbsp;{{ subscribedCount }} 
                    </span>
                    <span>
                        分享数: &nbsp;{{ shareCount }}
                    </span>
                </div>
                <div>
                    标签:&nbsp;{{ tags }}
                </div>
                <div>
                    <span>
                        歌曲:&nbsp;{{ playlist.trackCount }}
                    </span>
                    <span>
                        播放:&nbsp;{{ playCount}}
                    </span>
                </div>
                <div>
                    简介:&nbsp;{{ description }}
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import dayjs from 'dayjs'
export default{
    // 歌单上方的用户信息
    name:'MusicListInfo',
    props:['playlist'],
    computed:{
        createTime(){
            return dayjs(this.playlist.createTime).format('YYYY--MM--DD')
        },
        subscribedCount(){
            if(this.playlist.subscribedCount >= 100000){
                return Math.floor(this.playlist.subscribedCount/10000).toString() + '万'
            }else{
                return this.playlist.subscribedCount
            }
        },
        shareCount(){
            if(this.playlist.shareCount >= 100000){
                return Math.floor(this.playlist.shareCount/10000).toString() + '万'
            }else{
                return this.playlist.shareCount
            }
        },
        tags(){
            let tag = ''
            this.playlist.tags.forEach(element => {
                tag += element + '/'
            })
            tag = tag.slice(0,tag.length-1)
            return tag
        },
        playCount(){
            if(this.playlist.playCount >= 100000){
                return Math.floor(this.playlist.playCount/10000).toString() + '万'
            }else{
                return this.playlist.playCount
            }
        },
        description(){
           if( this.playlist.description.length >= 100){
                return this.playlist.description.slice(0,100) + '...'
           }else{
                return this.playlist.description
           }
        }
    },


}
</script>

<style scoped>
    .img-wra img{
        width: 10.42vw;
        height: 18.52vh;
        border-radius: 8px;
    }

    .wrapper{
        display: flex;
        margin-left: 1vw;
        margin-top:1vw;
    }

    .user-info{
        margin-top: .5vh;
        margin-left: 1vw;
    }
    .btn{
        background-color: #FFF;
        color:rgb(237,65,65);
        border: 1px solid rgb(237,65,65);
        padding: .2vw;
        font-size: 1rem;
    }

    .name{
        font-size: 1.5rem;
        font-weight: 900;
        padding-left: .4vw;
    }

    .user-img{
        margin-top: 1vh;
    }
    .user-info img{
        width: 25px;
        height: 25px;
        border-radius: 50%;
        margin-right: .3vw;
    }

    #time{
        color: #8f8f8f;
        font-size: 1rem;
    }

    #member-count{
        margin-top: 2vh;
    }

    .user-img div{
        margin-top:.5vh;
    }
</style>