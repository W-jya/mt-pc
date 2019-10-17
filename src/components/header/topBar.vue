<template>
  <el-row class="m-header m-header-topbar">
    <!-- 左侧 ‘城市 登陆 注册区域’ -->
    <el-col :span="10">
      <geo />
    </el-col>
    <!-- 右侧 导航区域 -->
    <el-col :span="14">
      <m-nav />
    </el-col>
  </el-row>
</template>

<script>
import geo from './geo';
import MNav from './nav';
export default {
  components: {
    geo,
    MNav,
  }
}
</script>

<style lang="scss">
  @import '@/assets/css/public/header/topbar.scss'
</style>