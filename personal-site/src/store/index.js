import Vuex from 'vuex';
import Vue from "vue";
Vue.use(Vuex); //应用Vuex插件

const store = new Vuex.Store({
    state:{
        BGEffect : true,
    },
    mutations:{
        BGEffectOff(state){
            state.BGEffect = false;
        },
        BGEffectON(state){
            state.BGEffect = true;
        }
    }
});

window.store  = store;

export default  store;