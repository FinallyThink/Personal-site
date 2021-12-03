import axios from "axios"

class Axios {
    constructor(url){
        this.url = url;
    }
    async  post(data){
        const resp = await axios.post(this.url,data);
        const res ={
            status:resp.data.status,
<<<<<<< HEAD
            data : resp.data.data?resp.data.data:resp.data.errMsg
=======
            data : resp.data.data
>>>>>>> 668953cfe8fe0880f9da58e6c1c465352f415587
        }
        return res;
    }
    async get(data,callback){
        const resp = await axios.get(this.url,data);
        callback(resp);
   }
}

<<<<<<< HEAD
export default Axios;
=======
export default Axios;
>>>>>>> 668953cfe8fe0880f9da58e6c1c465352f415587
