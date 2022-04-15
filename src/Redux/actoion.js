import axios from "axios";
import {GET_SHOP} from "./type";

export  const getShop = () =>{
    return(dispatch) => {
        axios(`https://shoponlain.herokuapp.com/category-list/`)
            .then(({data})=> {dispatch({type: GET_SHOP , payload:data})})
    }
}