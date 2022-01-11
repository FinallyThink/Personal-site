import Vue from 'vue'
import App from './App.vue'
import config from './lib/config.js'
import store from './store/index.js'
import router from './router/router'
import ShowMessage from './components/public/components/message/showMessage.vue'

Vue.component('Message',ShowMessage);
Vue.use(config);

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')