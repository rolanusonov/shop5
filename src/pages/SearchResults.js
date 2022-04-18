import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

import ClothesCard from "./ClothesCard";
import {Apikey} from "../Redux/Apikey";


const SearchResults = () => {
    const [result,setResult] = useState([])
    const {name} = useParams()
    useEffect(() => {
        axios(`https://api.themoviedb.org/3/search/movie?api_key=${Apikey}&query=${name}`)
            .then(({data})=>{
                try{
                    setResult(data.results)
                }catch (error){
                    console.log(error)
                }
            })
    },[])
    console.log(result)

    return (
        <div style={{marginTop: "200px"}} className="container">
            <div className="row">
                {
                    result.map(el=>(
                        <ClothesCard el={el}/>
                    ))
                }
            </div>

        </div>
    );
};

export default SearchResults;