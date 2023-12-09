<template>
    <div>
        <a href="">
            <img :src=baseSrc>
            <span>{{ load }}</span>
        </a>
    </div>
</template>

<script>
export default{
    name:'User',
    data(){
        return{
            baseSrc:require('@/assets/user.png'),
            isLoad:false
        }

    },
    computed:{
        load(){
            return "未登录"
        }
    }
}
</script>

<style scoped>
    img{
        width: 1.5625vw;
        height: 2.78vh;
        border: .5px solid rgba(0,0,0,.5);
        border-radius: 50%;
        background-color: #FFF;
    }

    div{
        height: 2.78vh;
        line-height: 2.78vh;
    }

</style>