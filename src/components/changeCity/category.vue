<template>
  <div>
    <dl class="m-categroy">
      <dt>按拼音首字母选择</dt>
      <dd v-for="(item,index) in letter" :key="index">
        <a :href="'#city-'+item">{{item}}</a>
      </dd>
    </dl>
    <dl v-for="(item, index) in cityGroup" :key="index" class="m-categroy-section">
      <dt :id="'city-'+ index">{{index}}</dt>
      <dd>
        <span v-for="city in item" :key="city.id" @click="changeCity(city.name)">{{city.name}}</span>
      </dd>
    </dl>
  </div>
</template>

<script>
//import {mapState} from 'vuex'

export default {
  data() {
    return {
      letter: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      cityGroup: {},
      rederCityList: []
    };
  },
  computed: {
    //...mapState(["cityList"])  // 从vuex获取数据
  },
  created() {
    this.getCityList ()
    // setTimeout(() => {
      // this.$store.state.cityList.forEach(item => {
      //   this.rederCityList.push(...item.cityInfoList);
      // });
      // var obj = {};
      // this.rederCityList.sort((a, b) => (a.firstChar < b.firstChar ? -1 : 1)); // 数据排序
      // this.rederCityList.forEach((item, index) => {
      //   if (!obj[item.firstChar]) {
      //     obj[item.firstChar] = [];  //数据分类
      //   }
      //   obj[item.firstChar].push(item);
      // });
      // this.cityGroup = obj;
    // }, 1000);
  },
  methods: {
    getCityList () {
     let timer = setInterval(() => {
        if(this.$store.state.cityList.length != 0) {
          clearInterval(timer)
          this.$store.state.cityList.forEach(item => {
          this.rederCityList.push(...item.cityInfoList);
        });
        var obj = {};
        this.rederCityList.sort((a, b) => (a.firstChar < b.firstChar ? -1 : 1)); // 数据排序
        this.rederCityList.forEach((item, index) => {
          if (!obj[item.firstChar]) {
            obj[item.firstChar] = [];  //数据分类
          }
          obj[item.firstChar].push(item);
        });
        this.cityGroup = obj;
        }
      }, 100);
    },
    changeCity (city) {
      this.$store.dispatch('setPosition', city)
      this.$router.push('/index')
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/categroy.scss";
</style>