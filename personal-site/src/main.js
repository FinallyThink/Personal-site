import Vue from 'vue'
import App from './App.vue'
import config from './lib/config.js'


Vue.use(config);
new Vue({

    render: h => h(App),
}).$mount('#app')