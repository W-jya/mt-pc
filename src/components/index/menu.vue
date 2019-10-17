<template>
  <div class="m-menu">
    <!-- 左侧导航列表模块 -->
    <dl class="nav" @mouseleave="menuLeave">
      <dt>全部分类</dt>
      <dd v-for="(item, index) in menuList" :key="index" @mouseenter="menuEnter(item)">
        <i :class="item.icon"></i>
        {{item.title}}
        <span class="arrow"></span>
      </dd>
    </dl>
    <!-- 右侧显示菜单模块 -->
    <div class="detail" v-if="curDetail" @mouseenter="detailEnter" @mouseleave="detaiLeave">
      <template v-for="(item, index) in curDetail.children">
        <h4 :key="index">{{item.title}}</h4>
        <span v-for="(v, i) in item.children" :key="v + '_' + i">{{v}}</span>
      </template>
    </div>
  </div>
</template>

<script>
import api from '@/api/index'
export default {
  data() {
    return {
      curDetail: null, //控制菜单是否显示
      menuList: [
        {
          title: "美食",
          icon: "food",
          children: [
            {
              title: "美食",
              children: [
                "代金券",
                "甜点饮品",
                "火锅自助餐",
                "小吃快餐",
                "日韩料理",
                "西餐",
                "聚餐宴请",
                "烧烤烤肉"
              ]
            }
          ]
        },
        {
          title: "外卖",
          icon: "takeout",
          children: [
            {
              title: "外卖",
              children: ["美团外卖"]
            }
          ]
        },
        {
          title: "酒店",
          icon: "hotel",
          children: [
            {
              title: "酒店星级",
              children: ["经典型", "舒适/三星", "高档/四星", "豪华/五星"]
            }
          ]
        },
        {
          title: "榛果民宿",
          icon: "homestay",
          children: [
            {
              title: "热门城市",
              children: ["上海", "成都", "北京", "重庆","南京", "杭州", "广州", "西安"]
            },
            {
              title: "热门房源",
              children: ["复式Loft" , "别墅"]
            }
          ]
        },
        {
          title: "猫眼电影",
          icon: "movie",
          children: [
            {
              title: "热映电影",
              children: ["罗小黑战记", "小小的愿望", "诛仙Ⅰ", "速度与激情：特别行动", "名侦探柯南：绀青之拳", "哪吒之魔童降世" , "巨鳄风暴", "攀登者", "徒手攀岩", "中国机长"]
            },
            {
              title: "热门影院",
              children: ["万达影城", "耀莱成龙国际影城", "大地影院", "保利国际影城", "博纳国际影城", "CGV影城" , "橙天嘉禾影城", "金逸影城", "中影国际影城", "新华国际影城"]
            }
          ]
        },
        {
          title: "机票 / 火车票",
          icon: "airport",
          children: [
            {
              title: "机票",
              children: ["国内机票", "国际/港澳台机票"]
            },
            {
              title: "火车票",
              children: ["火车票"]
            }
          ]
        },
        {
          title: "休闲娱乐 / KTV",
          icon: "ktv",
          children: [
            {
              title: "休闲娱乐",
              children: ["足疗按摩", "洗浴/汗蒸", "酒吧", "密室逃脱", "轰趴馆", "茶馆" , "私人影院", "DIY手工坊", "采摘/农家乐", "网吧网咖"]
            },
            {
              title: "KTV",
              children: ["KTV"]
            }
          ]
        },
        {
          title: "生活服务",
          icon: "life",
          children: [
            {
              title: "生活服务",
              children: ["衣物/皮具洗护", "家政", "搬家运输", "送水", "充值缴费", "服饰/鞋包养护" , "开锁换锁", "居家维修", "管道疏通", "家电维修清洗", "电脑维修", "手机维修"]
            },
          ]
        },
        {
          title: "丽人 / 美发 / 医学美容",
          icon: "hair",
          children: [
            {
              title: "丽人",
              children: ["美发", "美甲美睫", "美容美体", "医学美容", "瑜伽舞蹈", "瘦身纤体" , "韩式定妆", "祛痘", "纹身", "化妆品", "养发"]
            },
          ]
        },
        {
          title: "结婚 / 婚纱摄影 / 婚宴",
          icon: "marry",
          children: [
            {
              title: "结婚",
              children: ["婚纱摄影", "旅拍", "个性写真", "婚宴", "婚庆公司", "婚纱礼服" , "西服定制", "婚戒首饰", "婚车租赁", "司仪主持", "彩妆造型", "婚礼跟拍", "婚礼小礼品"]
            },
          ]
        },
        {
          title: "亲子 / 儿童乐园 / 幼教",
          icon: "offspring",
          children: [
            {
              title: "儿童乐园",
              children: ["婴儿游泳", "其它亲子游乐"]
            },
            {
              title: "幼儿教育",
              children: ["早教中心", "少儿英语", "智力开发", "幼儿教育"]
            },
            {
              title: "亲子摄影",
              children: ["儿童摄影", "孕妇写真", "上门拍", "其他亲子摄影"]
            },
            {
              title: "孕产护理",
              children: ["月子会所", "产后恢复", "妇幼医院", "孕产用品", "开奶催乳", "月嫂", "亲子购物", "宝宝派对"]
            },
          ]
        },
        {
          title: "运动健身 / 健身中心",
          icon: "sport",
          children: [
            {
              title: "运动健身",
              children: ["健身中心", "武术场馆", "游泳馆", "羽毛球馆", "溜冰场", "射箭馆", "篮球场", "网球馆", "台球馆", "乒乓球", "足球场"]
            },
          ]
        },
        {
          title: "家装 / 建材 / 家居",
          icon: "furniture",
          children: [
            {
              title: "装修设计",
              children: ["半包装修", "全包装修", "清包装修"]
            },
            {
              title: "装修建材",
              children: ["地板", "瓷砖石材", "厨卫洁具"]
            },
            {
              title: "家具家居",
              children: ["家具", "床上用品/家纺", "家居饰品", "厨具餐具"]
            },
            {
              title: "家装卖场",
              children: ["建材卖场", "家居卖场", "灯饰卖场"]
            },
          ]
        },
        {
          title: "学习培训 / 音乐培训",
          icon: "study",
          children: [
            {
              title: "音乐培训",
              children: ["钢琴", "吉他", "小提琴"]
            },
            {
              title: "职业技术",
              children: ["美容化妆", "会计", "IT", "管理培训", "摄影培训"]
            },
            {
              title: "外语培训",
              children: ["英语", "日语", "韩语", "法语"]
            },
            {
              title: "美术培训",
              children: ["绘画", "书法", "其他美术"]
            },
          ]
        },
        {
          title: "医疗健康 / 宠物 / 爱车",
          icon: "health",
          children: [
            {
              title: "医疗健康",
              children: ["医院", "齿科口腔", "体检中心", "药店", "中医"]
            },
            {
              title: "爱车",
              children: ["洗车", "租车", "加油站", "维修保养", "汽车美容"]
            },
            {
              title: "宠物",
              children: ["宠物店", "宠物医院"]
            }
          ]
        },
        {
          title: "酒吧 / 密室逃脱",
          icon: "health",
          children: [
            {
              title: "玩乐",
              children: ["KTV", "酒吧", "密室逃脱", "游乐游艺", "网吧网咖", "酒吧", "私人影院", "DIY手工坊", "桌面游戏", "采摘/农家乐"]
            }
          ]
        },
      ]
    };
  },
  created () {
    // 获取左侧导航数据  数据不全 没用
    // api.getMenuList().then( res => {
    //   console.log(res);
    //   this.menuList = res.data.data;
    // })
  },
  methods: {
    menuEnter(item) {
      this.curDetail = item;
    },
    menuLeave() {
      this.timer = setTimeout(() => {
        this.curDetail = null;
      }, 100);
    },
    detailEnter() {
      clearTimeout(this.timer);
    },
    detaiLeave() {
      this.curDetail = null;
    }
  }
};
</script>
