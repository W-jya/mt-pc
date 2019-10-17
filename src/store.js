import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  
  state: {
    position:'北京',
    cityList:[] ,// 城市数据
    userName:'',
  },
  mutations: {
    setPosition (state, val) {
      state.position = val;
    },

    setcityList (state, val){
      state.cityList = val;
    },

    setuserName (state, val){
      state.userName = val;
    }
  },
  actions: {
    setPosition({commit}, val) {
      // 异步请求后端获取当前位置数据
      commit('setPosition', val);
    }, 
    
    setcityList({commit}, val){
      commit('setcityList', val);
    },

    setuserName({commit}, val){
      commit('setuserName', val);
    }
  }
})