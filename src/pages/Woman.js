import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getShop} from "../Redux/actoion";
import {FaBeer} from 'react-icons/fa';
import Children from "./Children";
import {Link} from "react-router-dom";
const Woman = ({el}) => {
    const dispatch = useDispatch()
    const [women,setWomen] = useState([])
    const params = useParams()
    // console.log(params.id)
    //
    //
    // const elem = useSelector(state => state.shopList)
    // console.log(elem, "EleM")
    // const dispatch = useDispatch()
    //
    // useEffect(()=>{
    //     dispatch(getShop())
    // },[])


    useEffect(()=>{
     axios.get(`https://shoponlain.herokuapp.com/category-detail/${params.id}/`)
         .then(({data}) => {
             setWomen(data)
         })
    },[])
    console.log(women, "erlan")

    return (
        <div className="">



            {
                women?.category_detail?.map(el=>(
                    <div>

                        <img src={el.img} alt="wer"/>
                        <h1 className="text-2xl text-blsck">{el.name}</h1>
                        <h1 className="text-3xl text-blsck">{el.description}</h1>
                        <h1 className="text-3xl text-blsck">{el.price} com</h1>
                    </div>
                ))
            }


                      <div className="px-5  img pb-5 dark:bg-gray-500">

                          <div className="flex justify-between items-center" >
                              <button
                                  onClick={() => dispatch({type: "ADD_TO_BASKET", payload: el})}
                                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">


                                  Добавить
                              </button>



                              <button

                                  onClick={() => dispatch({type: "ADD_TO_FAVORITE", payload: el})}
                                  className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800">
            <span
                className="relative px-5 py-2.5 transition-all  duration-30 bg-white dark:bg-gray-600 rounded-md group-hover:bg-opacity-0">
                 <FaBeer/>
            </span>
                              </button>




                          </div>
                      </div>
        </div>
    );
};

export default Woman;