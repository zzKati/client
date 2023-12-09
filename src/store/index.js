
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const actions = {

}
const mutations = {
    updatePlayList(state,value){
        const newSong = {
            al:value.al,
            ar:value.ar,
            name:value.name,
            id:value.id,
            dt:value.dt
        }
        if(state.playlist[state.playindex].id !== newSong.id){
            state.playlist.push(newSong)
            state.playindex++
        }
    },
    nextOrPrev(state,value){
        if(value === 1 && state.playindex > 0){
            state.playindex--
        }else if(value === 2 && state.playlist[state.playindex+1]){
            state.playindex++
        }
    }
}
const state = {
    playlist:[{
        al:{
            id:6451,
            name:"What's Going On…?",
            pic:109951167435823730,
            picUrl: "http://p1.music.126.net/jzNxBp5DCER2_aKGsXeRww==/109951167435823724.jpg",
            pic_str: "109951167435823724"
        },
        ar:[
            {   id: 6457,
                name: "张国荣"
            },
            {   id:1234,
                name:"陈奕迅"
            }
        ],
        name:'富士山下',
        id:306967,
        dt:230000
    },],
    playindex:0
}
const getters = {}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})