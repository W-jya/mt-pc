<template>
  <div class="m-header">
    <!-- 顶部导航 -->
    <el-row>
      <top-bar /> 
    </el-row>
 <!-- 搜索区域 -->
    <el-row>
      <search-bar />
    </el-row>
  </div>
</template>

<script>
import topBar from './topBar';
import searchBar from './searchBar';
export default {
  components: {
    topBar,
    searchBar,
  }
}
</script>