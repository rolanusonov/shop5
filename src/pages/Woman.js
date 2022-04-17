import React, {useEffect, useState} from 'react';
import axios from "axios";
import { useParams} from "react-router-dom";
import ClothesCard from "./ClothesCard";

const Woman = () => {
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
        <div className="handle flex items-center justify-center p-10 ">
            {
                women?.prod?.map(el => (
               <ClothesCard el={el} key={el.id}/>
                ))
            }
        </div>
    );
};

export default Woman;
