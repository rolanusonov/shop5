import axios from "axios";

const api = axios.create({
    baseURL:'https://api.tez-shop.com.kg/'
})

export default api