import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'


axios.defaults.baseURL = 'https://vue-update-fb6f4.firebaseio.com'
axios.defaults.headers.common['Authorization'] = 'fasfdsa'
axios.defaults.headers.get['Accepts'] = 'application/json'


// ---------- INTERCEPTOR -------------
const reqInterceptor = axios.interceptors.request.use(config => {
  console.log('Request Interceptor', config);
  // config.headers['SOMETHING'];
  return config
})
const resInterceptor = axios.interceptors.response.use(res => {
  console.log('Response Interceptor', res)
  return res
})


/*
Eject now needs to get the ID of the interceptor and that ID is actually returned from the use method.
Descomente as linhas abaixo para parar de imprimir o console.log que está nos interceptors
*/
// axios.interceptors.request.eject(reqInterceptor)
// axios.interceptors.response.eject(resInterceptor)

// ---------- fim INTERCEPTOR -------------


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
