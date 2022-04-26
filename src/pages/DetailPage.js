import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";



const DetailPage = ({el, onChangeValue}) => {
    const basket = useSelector(s => s.basket)
    console.log(el, "ELELELE")
    const dispatch = useDispatch()

    useEffect(()=>{
        // dispatch(onChangeValue)
    })

    return (
     <li className="stule_btn my-1 text-base">
         <label onChange={onChangeValue} key={el.id} for={`${el.id}`} className="stule mx-3"  style={{
             width:"75px",
             height:"40px"
         }}>
             <input type="radio" id={`${el.id}`} name="inputRadio" value={`${el.title}`}/>{el.title}
         </label>
     </li>
    );
};
export default DetailPage;