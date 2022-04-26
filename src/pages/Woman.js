import React, {useEffect, useState} from 'react';

import ClothesCard from "./ClothesCard";
import api from "../http/api";


const Woman = () => {
    const [women, setWomen] = useState([])
    useEffect(() => {
        api(`/prod-list/`)
            .then(({data}) => {
                setWomen(data)
            })
    }, [])
    console.log(women , "women")

    return (
        <div style={{marginTop : '100px'}} className="handle flex items-center justify-center  p-10 ">
            {
                women?.map(el => (
               <ClothesCard el={el} id={el.id}/>
                ))
            }

        </div>
    );
};

export default Woman;
