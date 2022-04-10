import React,{useEffect} from 'react';
import {useSelector} from "react-redux";
import Card from "./Card";
import axios from "axios";
import {useDispatch} from "react-redux";
const Catalog = () => {
    const dispatch = useDispatch()

    const catalog = useSelector((state) => state.catalog)
    // console.log(catalog)
    useEffect(() => {

        axios("https://fakestoreapi.com/products")
            .then(({data}) => {
dispatch({type:"UPLOAD_CATALOG",payload:data})
            })
    },[])


    return (
        <div className="container p-10 px-20">
            <h1 className="text-4xl my-5">Каталог товаров</h1>
            <div className="flex flex-row flex-wrap footer">
                {
                    catalog.map(el => (
                        <Card el={el} key={el.id}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Catalog;