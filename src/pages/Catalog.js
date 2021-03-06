import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import Card from "./Card";
import {useDispatch} from "react-redux";
import RecSliders from "../companents/RecSliders";
import api from "../http/api";

const Catalog = () => {
    const dispatch = useDispatch()
    const catalog = useSelector((state) => state.catalog)
    console.log(catalog , "CATALOG")
    useEffect(() => {
        api("/category-list/")

            .then(({data}) => {
                dispatch({type: "UPLOAD_CATALOG", payload: data})
            })
    }, [])
    return (
        <div className="container mx-auto" >

            <div className="grid catalogSET sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4   pt-[100px]   "  >
                {
                    catalog.map(el => (
                        <Card el={el} key={el.id}/>
                    ))
                }
            </div>

            <RecSliders/>
        </div>
    );
};
export default Catalog;