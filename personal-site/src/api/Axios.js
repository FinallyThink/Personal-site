import axios from "axios";
// import {reqVerify,resVerify} from "./AxiosVerify"; //数据转换器
import intercep from "./intercep"; //请求拦截器

class Axios{
    constructor(config){
        this.instance = axios.create({
            //设置相对url
            baseUrl : config.baseUrl?config.baseUrl:"http://guquanlengyue.tpddns.cn:8800",
           // 设置请求超时时间默认3000
            timeout : config.timeout?config.timeout:10000,
            //设置URL参数 必须是一个简单对象或 URLSearchParams 对象
            parames:config.parames?config.parames:{},
            //设置请求体数据
            dataL:config.data?config.data:'',
            //设置相应结果的数据类型
            responseType:config.responseType?config.responseType:'json',
            //设置代理
            proxy:config.proxy?config.proxy:{},
        })
        // 请求拦截器
       this.reqIntercep = this.instance.interceptors.request.use(intercep.reqIntercep,intercep.reqErrIntercep);        
        // 响应拦截器
       this.resIntercep = this.instance.interceptors.response.use(intercep.resIntercep,intercep.resErrIntercep);
    }
    async post(url,params){
        return await this.instance.post(url,{params:params,headers:intercep.setHeader(url)});
    }

    async get(url){
        const resp = await this.instance.get(url,{headers:intercep.setHeader(url)});
        return resp;
    }

    //移除请求拦截器
    removeReqIntercep(){
        this.instance.request.eject(this.reqIntercep);
    }
    //移除相应拦截器
    removeResIntercep(){
        this.instance.response.eject(this.resIntercep);
    }
}

export default Axios;