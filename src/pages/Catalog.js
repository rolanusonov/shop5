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

                axios("https://shoponlain.herokuapp.com/category-list/")
            .then(({data}) => {
dispatch({type:"UPLOAD_CATALOG",payload:data})
            })
<<<<<<< HEAD
    },[ ])
=======
    },[])

>>>>>>> 6b09d12ee987db75ba2bd937c0dd4f1f0b8b7bf6

    return (
        <div className="container p-10 px-20" >

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