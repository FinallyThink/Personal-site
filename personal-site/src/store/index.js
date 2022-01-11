import Vuex from 'vuex';
import Vue from "vue";

Vue.use(Vuex); //应用Vuex插件

const store = new Vuex.Store({
    state:{
        //背景特效开关
        BGEffect : true,
        //?
        subsidiary:[],
        //导航目录
        headMenu:[{
            id: 1,
            name: "主站",
            href: "/",
            selected: true
        },
        {
            id: 2,
            name: "典藏",
            href: "/collect",
            selected: false
        },
        {
            id: 3,
            name: "日志",
            href: "/diary",
            selected: false
        },
        {
            id: 4,
            name: "工具",
            href: "/MyTool",
            selected: false
        },
        {
            id: 5,
            name: "简历",
            href: "#",
            selected: false
        },
        ],
        //文章列表
        ArticleList:[],
    },
    mutations:{
        BGEffectOff(state){
            state.BGEffect = false;
        },
        BGEffectON(state){
            state.BGEffect = true;
        },
        //格式为[{标题等级,标题名称}]
        subsidiarySet(state,subsidiary){
           state.subsidiary = subsidiary;
        },
        menuSelectedChange(state,key){
            state.headMenu.forEach((ele,i)=>{
                state.headMenu[i].selected = false;
            });
            state.headMenu[key].selected = true;
        },    
        ArticleListChange(state,arr){
            state.ArticleList = arr;
        } 

    }
});



export default  store;