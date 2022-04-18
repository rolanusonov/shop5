import React, {useEffect, useState} from 'react';

import {useParams} from "react-router-dom";
import axios from "axios";
import ClothesCard from "./ClothesCard";
import Man from "./Man";

const Navi = () => {

    const [navi, setNavi] = useState([])

    useEffect(() => {
        axios.get(`https://shoponlain.herokuapp.com/prod-detail/`)

            .then(({data}) => {
                setNavi(data)
            })
    }, [])
    console.log(navi, "shirin")
    return (
        <div>hello
            <div className="handle flex items-center justify-center p-10 ">
                {
                    navi.map(el => (
                        <Man el={el} key={el.id}/>
                    ))
                }
                {
                    navi.products?.map(el => (
                        <div key={el.id} className="mx-3">
                            <h1>{el.name}</h1>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Navi;
