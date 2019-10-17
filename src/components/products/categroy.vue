<template>
  <div class="m-product-categroy">
    <dl class="classic">
      <dt>分类</dt>
      <dt>全部</dt>
      <dd v-for="(item, index)  in classicList" :key="index">
        <m-select :name="item.title" :list="item.subList" />
      </dd>
    </dl>
    <dl class="classic">
      <dt>区域</dt>
      <dt>全部</dt>
      <dd v-for="(item, index)  in areaList" :key="index">
        <m-select :name="item.title" :list="item.subList" />
      </dd>
    </dl>
  </div>
</template>

<script>
import api from '@/api/index'
import MSelect from "./select";
export default {
  data() {
    return {
      classicList: [],
      areaList: [
        {
          title: "推荐商圈",
          subList: [
            {
              name: "望京",
              id: 120000
            },
            {
              name: "昌平",
              id: 12222
            }
          ]
        },
        {
          title: "朝阳区",
          subList: [
            {
              name: "望京",
              id: 120000
            },
            {
              name: "昌平",
              id: 12222
            }
          ]
        },
        {
          title: "海淀区",
          subList: [
            {
              name: "望京",
              id: 120000
            },
            {
              name: "昌平",
              id: 12222
            }
          ]
        }
      ],
    };
  },
  components: {
    MSelect
  },
  created () {
    // 获取分类列表
    api.getclassicList().then( res => {
      // console.log(res.data)
      this.classicList = res.data.data
    })

    // 获取区域列表  返回的数据有问题 改用写死的数据
    api.getareaList().then( res => {
      // const data = res.data.replace(/\s*/g,"")
      // console.log(data)
      // console.log(data.parseJSON())
    })
  }
};
</script>