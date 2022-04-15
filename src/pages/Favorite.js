import React from 'react';
// import {FaBeer} from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";

const Favorite = () => {
    const {favorite} = useSelector(s => s)
    const dispatch = useDispatch()
    return (
        <div className="container md:container mx-auto py-5 px-10">
            <div className="flex flex-row flex-wrap ">

                {
                    favorite.map(el => (
                        <div className="   p-5 bg-gray rounded-xl   dark:border-white-900">
                            <img className="p-2  img dark:bg-gray-500" src={el.image} alt="product image"/>
                            <div className="px-5 pb-5 dark:bg-gray-500">

                                <a href="#">
                                    <h5 className="text-lg   tracking-tight text-gray-900 dark:text-white">{el.title}</h5>
                                </a>
                                <div className="flex justify-between items-center">
                                    <button
                                        onClick={() => dispatch({type: "REMOVE_BASKETS", payload: el.id})}
                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Удалть
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>


        </div>
    );
};

export default Favorite;