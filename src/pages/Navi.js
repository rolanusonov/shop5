import React, {useEffect, useState} from 'react';

import {useParams} from "react-router-dom";
import axios from "axios";
import Man from "./Man";

const Navi = () => {

    const [women, setWomen] = useState([])
    const params = useParams()
    useEffect(() => {
        axios.get(`https://shoponlain.herokuapp.com/category-detail/${params.id}/`)
            .then(({data}) => {
                setWomen(data)
            })
    }, [])
    console.log(women, "erlan")
    return (
        <div>
            <div className="handle flex items-center justify-center p-10 ">
                {
                    women?.prod?.map(el => (
                        <Man el={el} key={el.id}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Navi;