import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";


import {useDispatch} from "react-redux";
import api from "../http/api";

const SearchResults = () => {
    const [result, setResult] = useState([])
    const {name} = useParams()
    useEffect(() => {
        api(`/prod-list?query=${name}`)
            .then(({data}) => {
                try {
                    setResult(data)
                } catch (error) {
                    console.log(error)
                }
            })
    }, [])
    console.log(result, "res")
    const dispatch = useDispatch()

    const addToBasket = (el) => {
        dispatch({type: "ADD_TO_BASKET", payload: el})
    }

    return (
        <div className=" ">


        <div className="SEARCH  ">
            {
                result.map(el => (
                    <div className=" searchDiv">
                        <div style={{background: "#F8F8F8", margin: "0 5px"}} className="basket-card">
                            <Link to={`/details/${el.id}`}>
                                <img src={el.img} alt=""/>


                            <h1>{el.name}</h1>
                            <h1 style={{fontSize: "24px", color: "#FF005C"}}>{el.price} ₺</h1>
                            </Link>
                            <button onClick={() => addToBasket(el)} className="develop searchBtn">В корзину</button>
                        </div>
                    </div>
                ))
            }

        </div>
        </div>
    );
};

export default SearchResults;