import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
// import {getShop} from "../Redux/actoion";
import {FaBeer} from 'react-icons/fa';
// import Children from "./Children";
// import {Link} from "react-router-dom";
const Woman = ({el}) => {
    const dispatch = useDispatch()
    const [women, setWomen] = useState([])
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


    useEffect(() => {
        axios.get(`https://shoponlain.herokuapp.com/category-detail/${params.id}/`)
            .then(({data}) => {
                setWomen(data)
            })
    }, [])
    console.log(women, "erlan")

    return (
        <div className="handle flex items-center justify-center ">
            <div>
                <Link to={`/categories/${el.id}`} className=" ">

                    < img className="p-2 img dark:bg-gray-500 z-1" style={{width:"607px", height:" 252px"}} src={el.img} alt="product image!!!"/>



                    <Link to="/" className="svg">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white title">{el.title}</h5>

                        <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="path">
                            <path d="M24.7071 8.70711C25.0976 8.31658 25.0976 7.68342 24.7071 7.2929L18.3431 0.928934C17.9526 0.538409 17.3195 0.538409 16.9289 0.928934C16.5384 1.31946 16.5384 1.95262 16.9289 2.34315L22.5858 8L16.9289 13.6569C16.5384 14.0474 16.5384 14.6805 16.9289 15.0711C17.3195 15.4616 17.9526 15.4616 18.3431 15.0711L24.7071 8.70711ZM-8.74228e-08 9L24 9L24 7L8.74228e-08 7L-8.74228e-08 9Z" fill="white"/>
                        </svg>

                    </Link>

                </Link>
            </div>

            {
                women?.category_detail?.map(el => (




                    <div className=" w-72  ">


                        <div className="">
                            <img src={el.img} alt="wer"/>
                            <h1 className="text-lg text-blsck">{el.description}</h1>
                            <h1 className="text-lg text-blsck absolute mx-16 mt-4">{el.discounts} </h1>



                            <h1 className="text-base text-blsck mt-4">{el.price} </h1>
                        </div>

                        <div className="px-5    pb-5 dark:bg-white-500">

                            <div className="flex justify-between items-center">
                                <button
                                    onClick={() => dispatch({type: "ADD_TO_BASKET", payload: el})}
                                    style={{background: "linear-gradient(268.51deg, #FF005C 0.86%, #000000 150.38%)"}}
                                    className="w-36 h-9 rounded-md text-white text-lg mt-5">



                                    В корзину
                                </button>


                                {/*                    <button*/}

                                {/*                        onClick={() => dispatch({type: "ADD_TO_FAVORITE", payload: el})}*/}
                                {/*                        className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800">*/}
                                {/*<span*/}
                                {/*    className="relative px-5 py-2.5 transition-all  duration-30 bg-white dark:bg-gray-600 rounded-md group-hover:bg-opacity-0">*/}
                                {/*     <FaBeer/>*/}
                                {/*</span>*/}
                                {/*                    </button>*/}


                            </div>
                        </div>


                    </div>






                ))
            }


        </div>
    );
};

export default Woman;