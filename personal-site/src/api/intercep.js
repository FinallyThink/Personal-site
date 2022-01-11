//Axios 拦截函数设置
import $md5 from 'js-md5';
export default {
    //在发送请求前做的事
    reqIntercep(config){
        //如果需要token
        let token = localStorage.getItem('token');
        if(token){
            config.headers = {
                'user-token':token
            }
        }
        return config;
    },
    //对请求错误做的事
    reqErrIntercep(err){
        return Promise.reject(err);
    },
    //对2XX范围内的状态码做的事
    resIntercep(res){
        return res;

    },
    //对超出2xx范围码做的事
    resErrIntercep(err){
        return Promise.reject(err);
    },
    //设置请求头
    setHeader(url){
        let timestamp = new Date() * 1;
        let token = localStorage.getItem('token')?"":localStorage.getItem('token');
        let source = 'web';
        let sign = $md5(url+timestamp+token+source);
        return {'content-type':'applocation/json;charset=UTF-8','token':token,'timestamp':timestamp,'sign':sign,'source':source}
    }

}