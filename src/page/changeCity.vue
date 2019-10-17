<template>
  <div class="page-changeCity">
    <el-row>
      <province />
    </el-row>

    <el-row>
      <city-list title="热门城市:" :cityList="hotList" />
    </el-row>

    <el-row>
      <city-list title="最近访问:" :cityList="rencentList" />
    </el-row>

    <el-row>
      <category />
    </el-row>
  </div>
</template>

<script>
import api from "@/api/index";
import Province from "@/components/changeCity/province"; // 切换城市页面省份 城市 搜索 组件
import CityList from "@/components/changecity/hotCity"; // 热门城市 最近访问组件
import Category from "@/components/changecity/category"; // 热门城市 最近访问组件

export default {
  data() {
    return {
      hotList: [], //热门城市
      rencentList: []  //最近访问
    };
  },
  components: {
    Province,
    CityList,
    Category
  },
  created() {
    api.getHotCity().then(res => {
      this.hotList = res.data.data;  //请求热门城市数据
    });

    api.getrencentList().then(res => {
      this.rencentList = res.data.data;  //请求最近访问城市数据
    });
  }
};
</script>

<style lang="scss">
</style>