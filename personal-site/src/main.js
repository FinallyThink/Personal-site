import Vue from 'vue'
import App from './App.vue'
import config from './lib/config.js'
import store from './store/index.js'

import api from '../api/index.js'

console.log(api);

Vue.use(config);

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')