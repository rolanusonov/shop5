import React, {useEffect, useState} from 'react';

import {useParams} from "react-router-dom";
import axios from "axios";
import ClothesCard from "./ClothesCard";
import Man from "./Man";

const Navi = () => {

    const [women, setWomen] = useState([])

    useEffect(() => {
        axios.get(`https://shoponlain.herokuapp.com/rec-list/`)
            .then(({data}) => {
                setWomen(data)
            })
    }, [])
    console.log(women, "shirin")
    return (
        <div>hello
            <div className="handle flex items-center justify-center p-10 ">
                {
                    women.map(el => (
                        <Man el={el} key={el.id}/>
                    ))
                }
                {/*{*/}
                {/*    women.products?.map(el => (*/}
                {/*        <div key={el.id} className="mx-3">*/}
                {/*            <h1>{el.name}</h1>*/}
                {/*        </div>*/}
                {/*    ))*/}
                {/*}*/}
            </div>
        </div>
    );
};

export default Navi;
