<template>
  <dl class="s-item">
    <dt>
      <router-link to="/produDeatil"><img :src="meta.image" alt="图片" /></router-link>
      
    </dt>

    <dd>
      <div class="wrapper">
        <h3>
          <router-link to="/produDeatil">{{meta.title}}</router-link>
        </h3>
        <p>
          <el-rate v-model="fraction" disabled text-color="#ff9900"></el-rate>
          <span v-if="meta.score > 4.5">很好</span>
          <span v-else-if="meta.score > 4">好</span>
          <span v-else-if="meta.score > 3.5">不错</span>
          <span v-else-if="meta.score > 3">一般</span>
          <span v-else>很差</span>
          <span class>{{meta.score}}分</span>
          <span class="s-item-comment-total">{{meta.commentNum}}人评论</span>
        </p>
        <p>
          <span class="s-item-tab">
            <span v-for="(item, index) in meta.tab" :key="index">{{ (index > 0 ? '|' : '') + item }}</span>
          </span>
          <span class="s-item-addr">{{meta.address}}</span>

          <span>
            <a href="#">
              <i class="el-icon-location"></i>
              查看地图
            </a>
          </span>
        </p>
        <p>
          <span class="s-item-price">人均￥{{meta.avgPrice}}</span>
        </p>
        <span class="border"></span>
      </div>
      <ul class="deal-items">
        <li class="items" v-for="(item, index) in meta.dealItems.slice(0, 2)" :key="index">
          <p class="deal-title">{{item.title}}</p>
          <p>
            <span class="deal-price">￥{{item.price}}</span>
            <span class="deal-old-price">门市价￥{{item.counterPrice}}</span>
            <span class="deal-sales">已售{{item.saleNum}}</span>
          </p>
        </li>
      </ul>
    </dd>
  </dl>
</template>

<script>
export default {
  data() {
    return {
      fraction: null
    };
  },
  props: ["meta"],
  created() {
    this.fraction = parseInt(this.meta.score);
  }
};
</script>