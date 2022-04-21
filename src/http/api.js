import axios from "axios";

const api = axios.create({
    baseURL:'http://139.59.108.100/'
})

export default api