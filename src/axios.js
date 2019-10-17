import axios from 'axios'
axios.defaults.baseURL = 'https://developer.duyiedu.com'; 
axios.interceptors.request.use((config) => {
  //在发送请求之前做某件事
  config.params = {
    ...config.params,
    appkey: 'W_jy_1547734940297', 
  }
  return config;
},(error) =>{
  console.log('错误的传参')
});

export default axios;