import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import Card from "./Card";
import {useDispatch} from "react-redux";
import RecSliders from "../companents/RecSliders";
import api from "../http/api";

const Catalog = () => {
    const dispatch = useDispatch()

    const catalog = useSelector((state) => state.catalog)

    // console.log(catalog)
    useEffect(() => {
        api("/category-list/")

            .then(({data}) => {
                dispatch({type: "UPLOAD_CATALOG", payload: data})
            })
    }, [])


    return (
        <div className="container" style={{marginTop: "100px"}}>

            <div className="flex flex-row flex-wrap imgDetail ml-24 my-9 "  >

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