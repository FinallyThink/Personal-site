import Vuex from 'vuex';
import Vue from "vue";

Vue.use(Vuex); //应用Vuex插件

const store = new Vuex.Store({
    state:{
        BGEffect : true,
        subsidiary:[],
        api:{
            type: '',
            Reading:'git.md',
            },
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
        ApiChange(state,obj){
            state.api.Reading = obj.Reading;
            // for(let val in obj){
            //     state.api[val] = obj[val]; 
            // } 
        }        

    }
});



export default  store;