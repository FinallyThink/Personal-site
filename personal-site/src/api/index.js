import axios from "axios"

class Axios {
    constructor(url){
        this.url = url;
    }
    async  post(data){
        const resp = await axios.post(this.url,data);
        const res ={
            status:resp.data.status,
            data : resp.data.data?resp.data.data:resp.data.errMsg
        }
        return res;
    }
    async get(data,callback){
        const resp = await axios.get(this.url,data);
        callback(resp);
   }
}

export default Axios;