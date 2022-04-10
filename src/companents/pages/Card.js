import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {FaBeer} from 'react-icons/fa';

const Card = ({el}) => {

    const dispatch = useDispatch()
    return (
        <div className="   basis-1/4 p-5 bg-gray rounded-xl   dark:border-white-900">
            <img className="p-2  img dark:bg-gray-500" style={{width:"400px", height:"400px"}} src={el.image} alt="product image"/>
            <div className="px-5  img pb-5 dark:bg-gray-500">
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{el.title}</h5>
                </a>
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

                    <span
                        className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white ">{el.price}</span>


                </div>
            </div>
        </div>
    );
};

export default Card;