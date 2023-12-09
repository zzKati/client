<template>
    <!-- 底部音乐信息栏 -->
    <div class="footer-wrapper">
        <div class="music-info">
            <div class="img-wrapper">
                <img :src="playlist[playindex].al.picUrl">
            </div>
            <div class="song-singer">
                <div class="song">
                    {{ playlist[playindex].name }}
                </div>
                <div class="singer">
                    {{ singer }}
                </div>
            </div>
        </div>
        <!-- 音乐播放功能 -->
        <div class="music-play">
            <div class="now-time">
                {{ now }}
            </div>
            <div class="control-wrapper">
                <div class="control">
                    <div class="prev" @click="changeSongs(1)">
                        <img src="../assets/prev.svg">
                    </div>
                    <div class="play-pause" @click="changeStatus">
                        <img src="../assets/pause-solid.svg" v-if="isPlay">
                        <img src="../assets/play-solid.svg" v-if="!isPlay">
                    </div>
                    <div class="next" @click="changeSongs(2)">
                        <img src="../assets//next.svg">
                    </div>
                </div>
                <audio :src="`https://music.163.com/song/media/outer/url?id=${playlist[playindex].id}.mp3`" controls
                    ref="music" id="music" @timeupdate="updateProgress"></audio>
                <div class="progressbar" @click="seek($event)" ref="progressbar">
                    <div class="progress" ref="progress">
                        <div class="progressball"></div>
                    </div>
                </div>
            </div>
            <div class="duration-time">
                {{ duration }}
            </div>

        </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
    name: 'MusicFooter',
    computed: {
        ...mapState(['playlist', 'playindex']),
        singer() {
            let singer = ''
            this.$store.state.playlist[this.$store.state.playindex].ar.forEach(element => {
                singer += element.name + '/'
            })
            return singer.slice(0, singer.length - 1)
        },
        duration() {
            let allTime = Math.floor(this.$store.state.playlist[this.$store.state.playindex].dt / 1000)
            let min = Math.floor(allTime / 60)
            let seconod = allTime % 60
            if (allTime < 600) {
                if (seconod < 10) {
                    return `0${min}:0${seconod}`
                }
                return `0${min}:${seconod}`
            }
            if (seconod < 10) {
                return `${min}:0${seconod}`
            }
            return `${min}:${seconod}`
        }
    },
    data() {
        return {
            now: '00:00',
            isPlay: false
        }
    },
    watch: {
        'playlist': {
            deep: true,
            handler() {
                this.$refs.music.autoplay = true
                this.$refs.progress.style.width = '0%',
                this.isPlay = true
            }
        }
    },
    methods: {
        ...mapMutations(['nextOrPrev']),
        updateProgress() {
            let percent = (this.$refs.music.currentTime / this.$refs.music.duration) * 100
            this.$refs.progress.style.width = percent + '%'
            let nowtime = Math.floor(this.$refs.music.currentTime)
            if (nowtime < 10) {
                this.now = `00:0${nowtime}`
            }
            else if (nowtime < 60) {
                this.now = `00:${nowtime}`
            } else if (nowtime < 600) {
                let min = Math.floor(nowtime / 60)
                let seconod = nowtime % 60
                if (seconod < 10) {
                    this.now = `0${min}:0${seconod}`
                } else {
                    this.now = `0${min}:${seconod}`
                }
            } else {
                let min = Math.floor(nowtime / 60)
                let seconod = nowtime % 60

                if (seconod < 10) {
                    this.now = `${min}:0${seconod}`
                } else {
                    this.now = `${min}:${seconod}`
                }
            }
            // console.log( this.$refs.progress.style.width)
        },
        seek(event) {
            let barWidth = this.$refs.progressbar.offsetWidth
            let clickPosition = event.offsetX
            let percent = clickPosition / barWidth
            let seekTime = percent * this.$refs.music.duration
            this.$refs.music.currentTime = seekTime
            // console.log(`${barWidth}   ${clickPosition}  ${percent}  ${seekTime}`)
        },
        changeStatus(){
            if(this.isPlay === false){
                this.$refs.music.play()
                this.isPlay = !this.isPlay
            }else{
                this.$refs.music.pause()
                this.isPlay = !this.isPlay
            }
        },
        changeSongs(value){
            this.nextOrPrev(value)
        }

    }

}
</script>

<style lang="less" scoped>
.footer-wrapper {
    height: 9.46vh;
    width: 100%;
    overflow: hidden;
    border-top: 1px solid rgb(224, 224, 224);
    padding: 1.23vh;
    display: flex;

    .img-wrapper {
        margin-right: 1.23vh;

        img {
            width: 7vh;
            height: 7vh;
        }
    }

    .music-info {
        display: flex;

        .song-singer {
            position: relative;
            width: 30vw;
        }

        .song {
            font-size: 1.25rem;
            font-weight: 900;
        }

        .singer {
            position: absolute;
            bottom: 0;
            font-size: 1.25rem;
        }
    }

    .music-play {
        margin: 0.3vh;
        display: flex;

        .now-time {
            margin-right: 20px;
            padding-top: 3.5vh;
        }

        .duration-time {
            margin-left: 20px;
            padding-top: 3.5vh;
        }

        .control {
            display: flex;
            // align-items: center;
            justify-content: center;
            position: relative;

            
            .prev,
            .next {
                border-radius: 50%;
                // background-color: rgb(245,245,245);
                padding: .5rem;
            }

            img {
                width: 1.5rem;
                height: 1.5rem;
            }
        }
    }
}


.play-pause {
    display: flex;
    align-items: center;
    text-align: center;
    padding: 10px;
    background-color: rgb(245, 245, 245);
    border-radius: 50%;
    margin-bottom: 10px;
    cursor: pointer;
}


audio {
    display: none;
}

.progressbar {
    width: 40vw;
    height: 8px;
    background-color: rgb(229, 229, 229);
    border-radius: 10px;
    transition: all .3s;
    // overflow: hidden;
    cursor: pointer;
}

.progress {
    width: 0%;
    height: 100%;
    background-color: rgb(255, 52, 52);
    position: relative;
    overflow: hidden;
    border-radius: 10px;
}

.progressball {
    width: 18px;
    height: 12px;
    background-color: rgb(255, 52, 52);
    border-radius: 50%;
    position: absolute;
    right: -12px;
    top: -3px;
}

.progressbar:hover {
    transform: scaleY(1.5);

    .progress {
        overflow: visible;
    }
}
</style>