import axios from "axios";

export default function api({url}){ 
   return axios.create({baseURL: `http//localhost:8081/posts`})
}
