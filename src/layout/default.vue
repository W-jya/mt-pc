<template>
  <div class="layout-default">
    <el-container>
      <el-header height="">
        <my-header />
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>

      <el-footer height="">
        <my-footer/>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import MyHeader from '@/components/header/index.vue';  // 头部组件
import MyFooter from '@/components/footer/index.vue';  // 尾部组件
export default {
  components: {
    MyHeader,
    MyFooter,
  }
};
</script>

<style lang="scss">
  @import '@/assets/css/public/layout.scss';
</style>