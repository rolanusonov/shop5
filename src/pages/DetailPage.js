import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

<<<<<<< HEAD
=======
const DetailPage = ({el}) => {
    return (
        <div key={el.id} className="stule mx-3"  >
            <h1 className="stule_btn  text-base"> {el.title}</h1>
        </div>
>>>>>>> fd6cec901cf8b04446953ce4542a5c956fd2b17e

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