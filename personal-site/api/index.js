import axios from "axios"

async function getIndex(){
    const resp = await axios.post("http://localhost:8080/api/");
    console.log(resp);
}

getIndex();