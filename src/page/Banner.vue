<template>
    <el-carousel :interval="4000" type="card" height="220px" trigger="click">
      <el-carousel-item v-if="image" v-for="(item,index) in image" :key="index" >
        <img :src="item.imageUrl">
      </el-carousel-item>
    </el-carousel>
  </template>

  <style>
  img{
    width: 600px;
    height: 220px;
  }
  </style>

<script>
import axios from 'axios'
  export default{
    name:'Banner',
    data(){
      return {
        image:[]
      }
    },
    mounted(){
      axios.get('http://localhost:3000/banner?type=0').then(
        res=>{
          res.data.banners.forEach(element => {
            this.image.unshift({
              imageUrl:element.imageUrl,
              encodeId:element.encodeId
            })
          })
      },err=>{
          console.log(err.message)
      })
    }
  }
</script>