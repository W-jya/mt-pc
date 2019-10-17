<template>
  <div class="m-life">
    <!-- 头部导航 -->
    <el-row>
      <ul class="nav">
        <li>
          <router-link to="/s" class="takeout">美团外卖</router-link>
        </li>
        <li>
          <router-link to="/s">猫眼电影</router-link>
        </li>
        <li>
          <router-link to="/s">美团酒店</router-link>
        </li>
        <li>
          <router-link to="/s" class="apartment">民宿/公寓</router-link>
        </li>
        <li>
          <router-link to="/s" class="business">商家入驻</router-link>
        </li>
        <li>
          <router-link to="/s" class="business">美团公益</router-link>
        </li>
      </ul>
    </el-row>
    <!-- 轮播图 + 右侧-->
    <el-row>
      <el-col :span="14">
        <slider />
      </el-col>

      <el-col :span="4">
        <div class="m-life-pic"></div>
      </el-col>

      <el-col :span="6">
        <div class="m-life-login" v-if="!$store.state.userName">
          <h4>
            <img src="//s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" alt />
          </h4>
          <p class="m-life-login-name">Hi! 你好</p>
          <p>
            <router-link to="/blank/register">
              <el-button round>注册</el-button>
            </router-link>
          </p>
          <p>
            <router-link to="/blank/login">
              <el-button round>立即登陆</el-button>
            </router-link>
          </p>
        </div>
        <div class="m-life-login" v-else>
          <h4>
            <img src="//s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" alt />
          </h4>
          <p class="m-life-login-name">Hi! {{$store.state.userName}}</p>
          <p>
            <router-link to="/">
              <el-button round>个人中心</el-button>
            </router-link>
          </p>
          <p>
            <router-link to="/">
              <el-button round>切换账号</el-button>
            </router-link>
          </p>
        </div>
      </el-col>
    </el-row>
   <!-- 轮播图下面的图 -->
    <el-row>
      <el-col :span="7">
        <div class="m-life-hotel"></div>
      </el-col>
      <el-col :span="7">
        <div class="m-life-music"></div>
      </el-col>
      <el-col :span="4">
        <div class="m-life-coop"></div>
      </el-col>
      <el-col :span="6">
        <div class="m-life-downapp">
          <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="下载APP">
          <p>美团APP手机版</p>
          <p class="last-p">
            <span>
              1元起
            </span>
            吃喝玩乐
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Slider from "./slider"; // 轮播图模块
export default {
  components: {
    Slider
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index/life.scss";
</style>