<template>
    <div class="search-list">
        <SearchSong v-for="s,index in SearchList" :searchList="s" :index="index" :key="s.id"></SearchSong>
    </div>

</template>

<script>
import axios from 'axios';
import SearchSong from './SearchSong.vue'
export default{
    name:'searchList',
    props:['keywords'],
    components:{SearchSong}, 
    data() {
        return {
            SearchList:{},
            key:''
        }
    }, 
    mounted() {
        axios.get(`http://localhost:3000/search?keywords=${this.keywords}`).then(
            res=>{
                this.SearchList = res.data.result.songs
                // console.log(this.SearchList)
            },
            err=>{
                console.log(err.message)
            }   
        )
    },
    watch:{
        $route(){
            this.key = this.$route.query.keywords
        }
    }
}


</script>

<style>
.search-list{
        height:85vh;
        overflow-x: hidden;
        overflow-y: auto;
}
</style>