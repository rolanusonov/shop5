import React, {useEffect, useState} from 'react';
import axios from "axios";
import { useParams} from "react-router-dom";
import ClothesCard from "./ClothesCard";
import api from "../http/api";

const Woman = () => {
    const [women, setWomen] = useState([])
    const params = useParams()
    useEffect(() => {
        api(`/category-detail/${params.id}/`)
            .then(({data}) => {
                setWomen(data)
            })
    }, [])
    return (
        <div style={{marginTop : '200px'}} className="handle flex items-center justify-center p-10 ">
            {
                women?.prod?.map(el => (
               <ClothesCard el={el} key={el.id}/>
                ))
            }
        </div>
    );
};

export default Woman;
