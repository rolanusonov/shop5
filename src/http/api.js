import axios from "axios";

const api = axios.create({
    baseURL:'https://shoponlain.herokuapp.com/'
})

export default api