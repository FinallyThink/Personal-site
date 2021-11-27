import Vue from 'vue'
import App from './App.vue'
import config from './lib/config.js'
import store from './store/index.js'

import api from '../api/index.js'

const re = new api("http://localhost:8080/api/")

re.post({a:1},(data)=>{
   console.log(data);
})

Vue.use(config);

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')