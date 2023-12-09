<template>
  <div class="wrapper">
    <!-- 左上角logo -->
    <div class="logo">
      <a href="">
        <img src="../assets/logo.png" id="logo">
        <span id="cloud">音乐</span>
      </a>
    </div>

    <!-- 前进和后退的按钮 -->
    <div class="button">
      <el-button type="danger" icon="el-icon-arrow-left" circle size="mini" @click="back"></el-button>
      <el-button type="danger" icon="el-icon-arrow-right" circle size="mini" @click="forward"></el-button>
    </div>

    <!-- 搜索框 -->
    <div class="search">
      <el-input v-model="search" placeholder="搜索歌曲" class="input" size="medium" @keyup.enter.native="sendSearch"
        @focus="isSearch = true" @blur="change">
        <i slot="prefix" class="el-input__icon el-icon-search" @click="sendSearch"></i>
      </el-input>
      <div class="history">
        <Transition name="el-fade-in-linear">
          <div v-if="isSearch" class="history-inner">
            <h3>历史记录</h3>
            <img src="../assets/trash-solid.svg" id="delete" @click="deleteHistory">
            <ul>
              <li v-for="h in historySearch" :key="h.id" class="historyList" >
                <span class="history-list" @click.prevent="sendHistorySearch(h.value)"><a href="">{{ h.value }}</a></span>
              </li>
            </ul>
          </div>
        </Transition>
      </div>
    </div>
    <!-- 用户登录部分 -->
    <div class="users">
      <User></User>
    </div>
  </div>
</template>
  
<script>
import { nanoid } from 'nanoid'
import User from './User.vue';
export default {
  name: 'Top',
  components: { User },
  data() {
    return {
      isSearch: false,//判断输入框是否正在搜索
      search: '',// 输入框的值
      historySearch: JSON.parse(localStorage.getItem('history')) || [],//历史记录的获取 如果本地有的话就去本地的 没有就是空数组
    }
  },
  methods: {
    back() {
      this.$router.back()
    },
    forward() {
      this.$router.forward()
    },
    sendSearch() {
      // 发送请求 存放历史记录
      if (this.search !== '') {
        // 存放历史记录
        this.historySearch.unshift(
          {
            id: nanoid(),
            value: this.search
          })
        this.$router.push({
          name: 'SearchList',
          query: {
            keyWords: this.search
          }
        })
        localStorage.setItem('history', JSON.stringify(this.historySearch))
        // 最后 清空输入框的值
        this.search = ''
      }
    },
    deleteHistory() {
      // 删除所有历史记录
      localStorage.clear('history')
      this.historySearch = []
    },
    change() {
      // 将isSearch 延时设置为false 使历史记录小时
      setTimeout(() => {
        this.isSearch = false
      }, 100);
    },
    sendHistorySearch(value) {
      this.$router.push({
        name: 'SearchList',
        query: {
          keyWords: value
        }
      })
    }
  },

}
</script>
  
<style scoped>
.wrapper {
  width: 100%;
  height: 5.56vh;
  background-color: rgb(236, 65, 65);
  /* overflow: hidden; */
  display: flex;
  position: relative;
}

.logo {
  margin-left: 20px;
  margin-top: 5px;
  width: 9.375vw;
  height: 4.63vh;
  line-height: 4.63vh;
  padding-left: 15px;
  border-radius: 5px;
}

.logo:hover {
  background-color: rgb(213, 49, 49);
}

#logo {
  width: 2.08vw;
  height: 3.7vh;
}

#cloud {
  color: #fff;
  font-size: 20px;
}

.button {
  margin-left: 30px;
  margin-top: 1.39vh;
  height: 2.78vh;
  line-height: 2.78vh;
}

.search {
  margin-top: 1vh;
  margin-left: 20px;
}

.input {
  background-color: rgba(0, 0, 0, .3);
  width: 10.42vw;
}

.history {
  width: 15.625vw;
  position: relative;
  right: 2.61vw;
  background-color: #fff;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, .5);
  border-radius: 8px;
  overflow: hidden;
  z-index: 2;
}

.history-inner {
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
}

h3 {
  font-size: 20px;
  font-weight: 900;
}

#delete {
  width: 15px;
  height: 15px;
  opacity: .4;
}

#delete:hover {
  opacity: 1;
}

.users {
  position: absolute;
  top: 1.39vh;
  right: 20px;
}

.history-list {
  font-size: 15px;
  padding: 4px 8px;
  background-color: rgb(230, 230, 230);
  border-radius: 8px;
}

.historyList {
  margin-top: 0.93vh;
}
</style>
  