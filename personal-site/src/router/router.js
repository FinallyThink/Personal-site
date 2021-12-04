import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import text from "../components/text.vue";


// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
    { 
        path:"/text",
        component: text
    },
]

var route =  new VueRouter({
    mode:'history',
    routes
})
export default route;