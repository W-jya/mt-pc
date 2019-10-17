<template>
  <div class="page-login">
    <div class="login-header">
      <router-link to="/index" class="logo"></router-link>
    </div>
    <div class="login-panel">

      <div class="banner">
        <img src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" width="480" height="370" alt="美团网">
      </div>

      <div class="form">
        <h4 v-if="error" class="tips">
          <i></i>
          <em> {{error}} </em>
         
        </h4>
        <p>
          <span>账号登陆</span>
        </p>
        <el-input v-model="userName" placeholder="手机名/用户名/邮箱" prefix-icon="el-icon-user" :class="{error:error && !userName}"></el-input>
        <el-input v-model="password"  type="password" placeholder="密码" prefix-icon="el-icon-lock" :class="{error: error && !password}"></el-input>
        <p class="foot">
          <a href="#">忘记密码</a>
        </p>
        <el-button class="btn-login" @click="submit">登陆</el-button>
        <p class="reg">
          <span>还没有账号？</span>
          <router-link :to="{name:'register'}">免费注册</router-link>
        </p>

        <div class="oauth-wrapper">
            <h3 class="title-wrapper"><span class="title">用合作网站账号登录</span></h3>
            <div class="oauth">
                <span class="oauth__link"></span>
                <span class="oauth__link oauth__link--weibo"></span>
            </div>
        </div>
      </div>

    </div>
    <footer>
      <ul>
        <li><a href="#">关于美团</a></li>
        <li><a href="#">加入我们</a></li>
        <li><a href="#">商家入驻</a></li>
        <li><a href="#">帮助中心</a></li>
        <li><a href="#">美团手机版</a></li>
      </ul>
      <p>©2019 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号</p>
    </footer>
  </div>
</template>

<script>
import api from '@/api/index'
export default {
  data () {
    return{
      userName: '',
      password: '',
      error:'',
    }
  },
  methods: {
    submit () {
      if(!this.userName && !this.password){
        this.error = '请输入账号密码';
        return false
      }else if(!this.password){
         this.error = '请输入密码';
         return false
      }else if(!this.userName){
         this.error = '请输入账号';
         return false
      }else{
        this.error = '';
        api.login({
          userName: this.userName,
          password: this.password,
        }).then( res => {
          if(res.data.status == 'success'){
            this.$store.dispatch('setuserName',this.userName)
            this.$router.push('/index');
          }else{
            this.error = res.data.msg
          }
        })
      }
       
    }
  }
}
</script>

<style lang="scss">
  @import '@/assets/css/login/index.scss';
</style>