import axios from '@/axios.js'

var api = {
  // 获取搜索词列表
  getSearchList (params) {
    return axios.get('/api/meituan/header/search.json', params)
  },

  // 获取热搜词
  getSearchHotWord (params) {
    return axios.get('/api/meituan/header/searchHotWords.json', params)
  },
  // 获取左侧导航 数据不全
  getMenuList () {
    return axios.get('/api/meituan/index/nav.json')
  },

  // 获取页面分类（）数据
  getResultProducts () {
    return axios.get('/api/meituan/index/resultsByKeywords.json')
  },

  // 产品展示列表数据获取
  getProductsList () {
    return axios.get('/api/meituan/list/goodsList.json')
  },
  
  // 获取分类列表
  getclassicList () {
    return axios.get('/api/meituan/list/classify.json')
  },

  // 获取分类列表 数据有问题
  getareaList () {
    return axios.get('/api/meituan/list/areaList.json')
  },

   // 获取热门城市
  getHotCity () {
    return axios.get('/api/meituan/city/hot.json')
  },

 // 获取最近访问城市
  getrencentList () {
    return axios.get('/api/meituan/city/recents.json')
  },

  // 获取省份
  getProvince () {
    return axios.get('/api/meituan/city/province.json')
  },

  // 获取当前位置信息
  getCurPosition () {
    return axios.get('/api/meituan/city/getPosition.json')
  },

  // 登陆
  login(params) {
    return axios.get('/api/meituan/login',{params})
  },

   // 登陆
  register(params) {
    return axios.get('/api/meituan/register',{params})
  }
}

export default api;
