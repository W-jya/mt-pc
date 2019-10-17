<template>
  <div class="m-istyle">
    <dl @mouseover="over" :class="nav.className">
      <dt>{{nav.title}}</dt>
      <dd
        v-for="(item, index) in nav.list"
        :key="index"
        :class="{active: kind == item.tab}"
        :data-type="item.tab"
      >{{item.text}}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item, index) in resultsData[kind]" :key="index">
        <el-card :body-style="{padding:'0px'}" shadow="never">
          <img :src="item.image" class="image" />
          <div class="cbody">
            <div class="title" :title="item.title">{{item.title}}</div>
            <div class="sub-title" :title="item.subTitle">{{item.subTitle}}</div>
            <div class="price-info">
              <span class="price-symbol">¥</span>
              <span class="current-price">{{item.price}}</span>
              <span class="old-price">门市价¥{{999}}</span>
              <span class="sold bottom-right-info">{{item.address}}</span>
            </div>
            <!-- <div class="price-info" v-else-if="!item.rentNum">
              <span class="price-symbol">¥</span>
              <span class="current-price">抢光了</span>
              <span class="sold bottom-right-info">{{item.address}}</span>
            </div>
            <div class="price-info" v-else>
              <span class="price-symbol">¥</span>
              <span class="current-price">{{item.price_info.avg_price}}</span>
              <span class="units">/{{item.price_info.units}}</span>
              <span class="sold bottom-right-info">{{item.address}}</span>
            </div> -->
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
import api from '@/api/index'
export default {
  data() {
    return {
      kind: "all",
      resultsData: {},
      list: [
        {
          image:
            "https://p0.meituan.net/msmerchant/c08c616aa835bc7cebdc3bd17184afef312214.jpg@368w_208h_1e_1c",
          title: "丰泽园饭店（王府井店）",
          sub_title: "2人自选套餐，提供免费WiFi",
          price_info: {
            current_price: 248,
            old_price: 362,
            avg_price: null,
            units: null
          },
          address: "王府井/东单",
          rentNum: 50
        },
        {
          image:
            "https://p0.meituan.net/merchantpic/8d40aacd77004b484151c1ee547918d287691.jpg@368w_208h_1e_1c",
          title: "天安瑞嘉烤鸭",
          sub_title: "烤鸭6人套餐，提供免费WiFi",
          price_info: {
            current_price: null,
            old_price: null,
            avg_price: 188,
            units: "人均"
          },
          address: "王府井/东单",
          rentNum: 10
        },
        {
          image:
            "https://p0.meituan.net/msmerchant/1a8aaac8cfcf76fae83c2ecd6405bd4c1457315.jpg@368w_208h_1e_1c",
          title: "北京饭店阳光咖啡厅",
          sub_title: "特价自助晚餐",
          price_info: {
            current_price: 238,
            old_price: 298,
            avg_price: null,
            units: null
          },
          address: "王府井/东单",
          rentNum: 50
        },
        {
          image:
            "https://p1.meituan.net/msmerchant/99b654036b936f1173a0ddbe9cfbc0e6115463.jpg@368w_208h_1e_1c",
          title: "大董（王府井店）",
          sub_title: "烤鸭午市双人套餐",
          price_info: {
            current_price: 499,
            old_price: 720,
            avg_price: null,
            units: null
          },
          address: "王府井/东单",
          rentNum: 50
        },
        {
          image:
            "https://p1.meituan.net/msmerchant/fe8cf51c205643c1f884444f71cb259b431178.png@368w_208h_1e_1c",
          title: "313羊庄·铁锅烀羊肉（王府井店）",
          sub_title: "铁锅烀羊肉•四人餐",
          price_info: {
            current_price: 672,
            old_price: 791,
            avg_price: null,
            units: null
          },
          address: "王府井/东单",
          rentNum: 50
        },
        {
          image:
            "https://p1.meituan.net/poi/697cf6a6e1785559a7bb31d0bf03c649110592.jpg@368w_208h_1e_1c",
          title: "北京饭店诺金东33餐厅",
          sub_title: "东33中式四道美食套餐1份",
          price_info: {
            current_price: null,
            old_price: null,
            avg_price: null,
            units: null
          },
          address: "王府井/东单",
          rentNum: null
        }
      ]
    };
  },
  props: ["nav"],
  created () {
    api.getResultProducts().then( res => {   // 获取分类数据
      this.resultsData = res.data.data;
    }) 
  },
  methods: {
    over(e) {
      const dom = e.target;
      const tagName = dom.tagName.toLowerCase();
      if (tagName != "dd") {
        // 判断事件源
        return false;
      }
      this.kind = e.target.dataset.type; 
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>