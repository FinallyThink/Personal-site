import axios from "axios"

class Axios {
    constructor(url){
        this.url = url;
    }

    async  post(data,callback){
         const resp = await axios.post(this.url,data);
         callback(resp);
    }
    async get(data,callback){
        const resp = await axios.get(this.url,data);
        callback(resp);
   }
}

export default Axios;
