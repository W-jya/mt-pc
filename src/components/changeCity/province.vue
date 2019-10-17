<template>
  <div>
    <span class="name">按省份选择</span>
    <m-select
      :list="provinceList"
      title="省份"
      :value="province"
      :showList="provinceActive"
      @change_active="showProvince"
      @change="changeProvince"
    />

    <m-select
      :list="cityList"
      title="城市"
      :value="city"
      :showList="cityActive"
      @change_active="showCity"
      @change="changeCity"
    />

    <span>直接搜索:</span>
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入城市名"
      :remote-method="remoteMethod"
      :loading="loading"
      @focus="hide"
    >
      <el-option v-for="item in searchList" :key="item" :label="item" :value="item"></el-option>
    </el-select>
  </div>
</template>

<script>
import MSelect from "./select";
import api from '@/api/index';
// import {mapState} from 'vuex';
export default {
  data() {
    return {
      province: "省份",
      city: "城市",
      loading: false,
      provinceList: [],
      getData:{},
      cityList: ['请先选择省份'],
      provinceActive: false,
      cityActive: false,
      searchList: [
        "山东",
        "甘肃",
        "江苏",
        "北京",
        "云南",
        "海南",
        "浙江",
        "上海"
      ],
      searchWord: ""
    };
  },
  components: {
    MSelect
  },
  created () {
    // 请求 省 城市 的数据
    api.getProvince().then( res => {
      this.getData = res.data.data;
      this.provinceList = res.data.data.map( item => {
        return item.provinceName
      })
      this.$store.dispatch('setcityList', this.getData)
    });
  },
  methods: {
    // 控制省份下拉列表的显示和隐藏
    showProvince(flag) {
      this.provinceActive = flag;
      if (flag) {
        this.cityActive = !flag;
      }
    },
    // 控制城市下拉列表的显示和隐藏
    showCity(flag) {
      this.cityActive = flag;
      if (flag) {
        this.provinceActive = !flag;
      }
    },
    hide () {
      this.provinceActive = false;
      this.cityActive = false;
    },

    // 用户操作选中的省份/城市
    changeProvince (val) {
      this.province = val;
      this.city="城市";
      this.getData.forEach( item => {
        if(item.provinceName == val){
          this.cityList = item.cityInfoList
        }
      });
    },

    changeCity (val) {
      this.city = val.name;
      this.$store.dispatch('setPosition', val.name)
      this.$router.push('/index')
    },
    remoteMethod () {
      // 请求后端接口
    },
  }
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/iselect.scss";
</style>