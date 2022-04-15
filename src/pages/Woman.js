import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";

const Woman = () => {

    const [women,setWomen] = useState([])
    const params = useParams()
    console.log(params.id)



    useEffect(()=>{
     axios(`https://shoponlain.herokuapp.com/category-detail/${params.id}/`)
         .then(({data}) => {
             setWomen(data)
         })
    },[])
    console.log(women)

    return (
        <div className="">
            <img src={women.img} alt=""/>
            <h1>{women.title}</h1>
        </div>
    );
};

export default Woman;