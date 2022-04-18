import {useEffect, useState} from "react";
import axios from "axios";
import {useDispatch} from "react-redux";



const RecSlidersItem = ({id}) => {
    const [details, setDetails] = useState([])

    const dispatch = useDispatch()


    useEffect(() => {
        axios(`https://shoponlain.herokuapp.com/prod-detail/${id}/`)
            .then(({data}) => {
                setDetails(data)
            })
    }, [])
    console.log(details, "details")

    const addToBasket = (el) => {
        dispatch({type: "ADD_TO_BASKET", payload: el})
    }


    return (
        <div style={{background: "#F8F8F8", margin: "0 5px"}} className="basket-card">
            <img src={details.img} alt=""/>
            <h1>{details.name}</h1>
            <h1 style={{fontSize: "24px", color: "#FF005C"}}>{details.price} сом</h1>
            <button onClick={() => addToBasket(details)} className="develop">В корзину</button>
        </div>
    );
};

export default RecSlidersItem;