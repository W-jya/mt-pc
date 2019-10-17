import axios from 'axios'
axios.defaults.baseURL = 'http://api.duyiedu.com'; 
axios.interceptors.request.use((config) => {
  //在发送请求之前做某件事
  config.params = {
    ...config.params,
    appkey: 'xiebug_1561951783879', 
  }
  return config;
},(error) =>{
  console.log('错误的传参')
});

export default axios;