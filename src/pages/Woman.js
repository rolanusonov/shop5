import React, {useEffect, useState} from 'react';
import axios from "axios";

const Woman = () => {

    const [women,setWomen] = useState([])

    useEffect(()=>{
     axios("https://shoponlain.herokuapp.com/category-list/")
    },[])

    return (
        <div className="">

        </div>
    );
};

export default Woman;