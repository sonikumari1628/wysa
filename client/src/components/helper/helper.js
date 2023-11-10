import axios from "axios";

export async function getData(url, callback){
    const data = await(await axios.get(url))?.data;
    return callback ? callback(data) : data;


}
// getData("http://localhost:8800/api/quest/")