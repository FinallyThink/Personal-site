import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import text from "../components/text.vue";
import index from "../components/index.vue";
import Article from "../components/Article.vue";


// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
    { 
        path:"/text",
        component: text
    },
    {
        path:"/",
        name:"index",
        component: index
    },
    {
        path:"/Article",
        name:"Article",
        component: Article
    }
]

var route =  new VueRouter({
    mode:'history',
    routes
})
export default route;