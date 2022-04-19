import {GET_SHOP} from "./type";
import api from "../http/api";

export  const getShop = () =>{
    return(dispatch) => {
        api(`/category-list/`)
            .then(({data})=> {dispatch({type: GET_SHOP , payload:data})})
    }
}