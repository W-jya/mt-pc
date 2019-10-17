<template>
  <div class="m-geo" ref="box">
    <div class="position">
      <i class="el-icon-location" />
      {{$store.state.position}}
      <router-link to="/changeCity" class="change-city">切换城市</router-link>
      <span class="city">
        [
        <a href="#" v-for="item in nearCity" :key="item.id">{{item.name}}</a>
        ]
      </span>

      <div class="m-user" v-if="!$store.state.userName">
        <router-link :to="{name:'login'}" class="login">立即登陆</router-link>
        <router-link :to="{name: 'register'}" class="register">注册</router-link>
      </div>
       <div class="m-user" v-else>
        <router-link :to="{name:'login'}" class="login">
          <i class="el-icon-user-solid"></i>
          个人中心
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api/index'
export default {
  data () {
    return {
      nearCity:[]
    }
  },
  created () {
    api.getCurPosition().then( res => {
      this.$store.dispatch('setPosition', res.data.data.name)
      this.nearCity = res.data.data.nearCity
    })
    setTimeout( () => {
       console.log(this.$store.state.userName)
    },1000)
  }
};
</script>