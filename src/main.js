// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/main.css';


Vue.use(ElementUI);


Vue.config.productionTip = false

// 自定义指令 用于切换城市页面的选择省份城市的列表隐藏
Vue.directive('document-click',{
  bind: (val, bind, vnode) => {
    document.addEventListener('click', bind.value, false);
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
