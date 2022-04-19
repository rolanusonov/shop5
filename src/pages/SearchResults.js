import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";

import ClothesCard from "./ClothesCard";
import {Apikey} from "../Redux/Apikey";
import {useDispatch} from "react-redux";


const SearchResults = () => {
    const [result, setResult] = useState([])
    const {name} = useParams()
    useEffect(() => {
        axios(`https://shoponlain.herokuapp.com/prod-list?query=${name}`)
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
        <div className="grid grid-cols-5 flex items-center justify-center">
            {
                result.map(el => (
                    <>
                        <div style={{background: "#F8F8F8", margin: "0 5px"}} className="basket-card">
                            <Link to={`/details/${el.id}`}>
                                <img src={el.img} alt=""/>


                            <h1>{el.name}</h1>
                            <h1 style={{fontSize: "24px", color: "#FF005C"}}>{el.price} ₺</h1>
                            </Link>
                            <button onClick={() => addToBasket(el)} className="develop">В корзину</button>

                        </div>
                    </>
                ))
            }

        </div>
    );
};

export default SearchResults;