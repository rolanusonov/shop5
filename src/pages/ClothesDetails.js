import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import axios from "axios";
import {Apikey} from "../Redux/Apikay";



const ClothesDetails = () => {

    const {clothesId} = useParams()
    const [details, setDetails] = useState([])
    const {
        description,
        price,
        discounts
    } = details

    useEffect(()=>{
        axios(`https://shoponlain.herokuapp.com/prod-list/${clothesId}/`)
            .then(({data})=>{
                setDetails(data)
            })
    },[])
    console.log(details,"shirin")
    return (
        <div>
            shirin ты молодец ты сможешь!
            <div className="m-10">
                <h1 className="text-base text-blsck mt-4">{price} </h1>
                <h1 className="text-lg text-black">{description}</h1>
                <h1 className="text-lg text-black absolute mx-16 mt-4">{discounts} </h1>
        </div>
        </div>

        // <div className="details-page p-5">
        //     <div className="container ">
        //         <div className="row">
        //             <div className="d-flex">
        //                 {
        //                     details?.prod?.map(el => (
        //
        //                         <div className=" w-72 Link  ">
        //
        //
        //
        //
        //                             </div>
        //                         </div>
        //
        //                     ))
        //                 }
        //
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default ClothesDetails;