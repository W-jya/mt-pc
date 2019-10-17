<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
        <!-- logo -->
      <el-col :span="3" class="left">
        <router-link to="/index"><img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团" /></router-link>
      </el-col>

      <el-col :span="15" class="center">
        <!-- 搜索模块 -->
        <div class="wrapper">
          <el-input v-model="searchWord" placeholder="请输入内容" @focus="focus" @blur="blur" @input="input"></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>

            <!-- 热门搜索 搜索框聚焦触发 -->
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item, index) in hotPlace" :key="index">
              <router-link :to="{name:'goodlist', params: {name: item}}" >{{item}}</router-link>
            </dd>
          </dl>

           <!-- 搜索下拉列表  搜索框聚焦并输入文字时触发 -->
          <dl class="searchList" v-if="isSearchList">
            <dd v-for="(item, index) in searchList" :key="index">
              <router-link to="/ss">{{item}}</router-link>
            </dd>
          </dl>
        </div>

        <!-- 搜索框下面的搜索推荐  -->
        <p class="suggest">
          <a href="#" v-for="(item, index) in suggestList" :key="index">{{item}}</a>
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import api from '@/api/index'
export default {
  data() {
    return {
      searchWord: '',
      isfocus: false,
      hotPlace:[],  // 热门搜索
      searchList: [],  // 搜索词联想
      suggestList:[],   // 搜索框下推荐
    };
  },
  computed: {
    isHotPlace() {
      return this.isfocus && !this.searchWord;  // 判断热门搜索是否显示
    },
    isSearchList() {
      return this.isfocus && this.searchWord;  // 判断搜索下拉列表是否显示
    }
  },
  methods: {
    // 搜索框聚焦事件
    focus() {
      this.isfocus = true;
    },
    // 搜索框失焦事件
    blur() {
      setTimeout(() => {
        this.isfocus = false;
      }, 200);
    },

    // 请求搜索联想词
    input () {
      const searchWord = this.searchWord;                     
      api.getSearchList().then( res => { 
        this.searchList = res.data.data.list.filter( item => {   //对获取到的数据进行过滤
          return item.indexOf(searchWord) > -1;
        })
    })
    }
  },
  // 请求热搜推荐
  created () {
    api.getSearchHotWord().then( res => {
      this.hotPlace = this.suggestList = res.data.data
    })
  }
};
</script>

<style lang="scss">
@import "@/assets/css/public/header/index.scss";
@import "@/assets/css/public/header/search.scss";
</style>