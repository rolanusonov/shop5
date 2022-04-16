import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import axios from "axios";

const ClothesDetails = () => {


    const {clothesId} = useParams()
    const [details, setDetails] = useState({})
    const dispatch = useDispatch()



    useEffect(()=>{
        axios(``)
    })

    return (
        <div>

        </div>
    );
};

export default ClothesDetails;