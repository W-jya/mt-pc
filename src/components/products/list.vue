<template>
  <div class="m-products-list">
    <ul>
      <li
        v-for="item in nav"
        :key="item.key"
        :class="{'s-nav-active': item.active}"
        @click="click(item)"
      >{{item.name}}</li>
    </ul>
    <el-row>
      <item v-for="(item, index) in productsList" :key="index" :meta="item"/>
    </el-row>
  </div>
</template>

<script>
import api from '@/api/index'
import item from './item'
export default {
  data() {
    return {
      nav: [
        {
          key: "s-default",
          name: "智能排序",
          active: true
        },
        {
          key: "s-price",
          name: "价格最低",
          active: false
        },
        {
          key: "s-score",
          name: "人气最高",
          active: false
        },
        {
          key: "s-comment",
          name: "评价最高",
          active: false
        }
      ],
      productsList:[],
      // productsList: [
      //   {
      //     image: "https://p0.meituan.net/travel/b5732559e386ce3e3432d7c7ca0bc914280065.png@220w_125h_1e_1c",
      //     title: "火鸡老店",
      //     type: "food",
      //     score: "4.1",
      //     commentNum: 0,
      //     comment: [
      //       {
      //         username: "xxxx",
      //         evalaute: "好吃"
      //       }
      //     ],
      //     tab: ["火锅", "沙河"],
      //     address: "昌平区小汤山尚信村沿温榆河畔北岸向西3.5公里",
      //     avgPrice: 64,
      //     dealItems: [
      //       {
      //         title: "火鸡宴，建议10-14人使用",
      //         price: 909,
      //         counterPrice: 1150,
      //         saleNum: 0,
      //         priceType: "元"
      //       }
      //     ]
      //   }
      // ]
    };
  },
  created () {
    api.getProductsList().then( res => {
      this.productsList = res.data.data  // 产品展示列表数据获取
    })
  },
  components:{
    item,
  },
  methods: {
    click(item) {
      this.nav.forEach(ele => {
        ele.active = false;
      });
      item.active = true;
    }
  }
};
</script>