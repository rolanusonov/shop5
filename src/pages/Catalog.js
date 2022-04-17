import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import Card from "./Card";
import Navi from "./Navi";
import axios from "axios";
import {useDispatch} from "react-redux";

const Catalog = () => {
    const dispatch = useDispatch()

    const catalog = useSelector((state) => state.catalog)

    // console.log(catalog)
    useEffect(() => {
        axios("https://shoponlain.herokuapp.com/category-list/")

            .then(({data}) => {
                dispatch({type: "UPLOAD_CATALOG", payload: data})
            })
    }, [])


    return (
        <div className="container p-10 px-20  ">

            <div className="flex flex-row flex-wrap footer sooda px-20 p-10  ">
                {
                    catalog.map(el => (
                        <Card el={el} key={el.id}/>

                    ))
                }




            </div>
<Navi/>
        </div>
    );
};

export default Catalog;