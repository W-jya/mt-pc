<template>
  <div class="page-product">
    <el-row class="m-crumbs">
      <crumbs/>
    </el-row>
    <el-row>
      <el-col :span="19">
        <el-row>
          <categroy/>
        </el-row>
        <el-row>
          <list/>
        </el-row>
      </el-col>

      <el-col :span="5">
        map + 
      </el-col>
    </el-row>
  </div>
</template>

<script>
import crumbs from '@/components/products/crumbs'       // 面包屑组件
import categroy from '@/components/products/categroy'   // 分类 区域组件
import list from '@/components/products/list'           // 列表组件
export default {
  components: {
    crumbs,
    categroy,
    list,
  }
}
</script>

<style lang="scss">
    @import "@/assets/css/products/index.scss";
</style>