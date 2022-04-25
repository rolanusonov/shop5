import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import api from "../http/api";
import {data} from "autoprefixer";
import basket from "../pages/Basket";


const RecSlidersItem = ({id}) => {


    const [details, setDetails] = useState([])
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    const basket = useSelector(s => s.basket)
    const basketItems = basket.some( basket => basket.id === details.id)
    console.log(basketItems , "basketItems")

    useEffect(() => {
        api(`/prod-detail/${id}/`)
            .then(({data}) => {
                setDetails(data)
            })

    }, [])
    console.log(details, "details")

    // const addToBasket = (el) => {
    //     setLoading(false)
    //     setTimeout(() => {
    //         setLoading(true)
    //         setTimeout(() => {
    //             setLoading(false)
    //         }, 2000)
    //     }, 1000)
    //
    //     dispatch({type: "ADD_TO_BASKET", payload: el})
    // }


    return (
        <div className="recCard">


        <div className="basket-card      ">
            <Link className=""  to={`/details/${details.id}`}>
                <div className="school">
                    <img className="imgSlider" src={details.img} alt=""/>

                </div>
                <div className="schoolH1">
                    <h1 style={{
                        height:"90px",
                        overflow:"hidden"

                    }}>{details.name}</h1>

                    <h1 className="schoolPrice" style={{fontSize: "24px", color: "#FF005C"}}>{details.price} ₺</h1>

                </div>
            </Link>

            {/*<button onClick={() => addToBasket(details.id)} className="develop recBtn ">*/}
            {/*    {*/}
            {/*        basketItems ? "no" : "Yes"*/}
            {/*    }*/}
            {/*</button>*/}
            <button
                onClick={() => dispatch({type: "ADD_TO_BASKET", payload: details})}
                style={{background: "linear-gradient(268.51deg, #FF005C 0.86%, #000000 150.38%)"}}
                className="w-36 ert h-9 rounded-md text-white text-lg mt-5">
                {
                    basketItems ? "Добавлено" : "В карзину"
                }
            </button>


        </div>
        </div>

    );
};

export default RecSlidersItem;