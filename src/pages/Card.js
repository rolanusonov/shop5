import React from 'react';
import {  useDispatch} from "react-redux";
import {Link} from "react-router-dom";

// import {FaBeer} from 'react-icons/fa';
// import Children from "./Children";
// import {Link} from "react-router-dom";

const Card = ({el}) => {
    return (

        <div className="  bg-gray-#FF005C rounded-xl pr-8 pb-8   dark:border-white-900" >


         <Link to={`/categories/${el.id}`} className="   ">

           < img className="p-2 img dark:bg-gray-500 z-1" style={{width:"607px", height:" 252px"}} src={el.img} alt="product image!!!"/>

            <Link to="/" className="svg">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white title">{el.title}</h5>

                <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="path">
                    <path d="M24.7071 8.70711C25.0976 8.31658 25.0976 7.68342 24.7071 7.2929L18.3431 0.928934C17.9526 0.538409 17.3195 0.538409 16.9289 0.928934C16.5384 1.31946 16.5384 1.95262 16.9289 2.34315L22.5858 8L16.9289 13.6569C16.5384 14.0474 16.5384 14.6805 16.9289 15.0711C17.3195 15.4616 17.9526 15.4616 18.3431 15.0711L24.7071 8.70711ZM-8.74228e-08 9L24 9L24 7L8.74228e-08 7L-8.74228e-08 9Z" fill="white"/>
                </svg>
            </Link>

</Link>


  {/*          <div className="px-5  img pb-5 dark:bg-gray-500">*/}

  {/*              <div className="flex justify-between items-center" >*/}
  {/*                  <button*/}
  {/*                      onClick={() => dispatch({type: "ADD_TO_BASKET", payload: el})}*/}
  {/*                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">*/}


  {/*                      Добавить*/}
  {/*                  </button>*/}



  {/*                  <button*/}

  {/*                      onClick={() => dispatch({type: "ADD_TO_FAVORITE", payload: el})}*/}
  {/*                      className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800">*/}
  {/*<span*/}
  {/*    className="relative px-5 py-2.5 transition-all  duration-30 bg-white dark:bg-gray-600 rounded-md group-hover:bg-opacity-0">*/}
  {/*     <FaBeer/>*/}
  {/*</span>*/}
  {/*                  </button>*/}

  {/*                  <span*/}
  {/*                      className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white ">{el.price}</span>*/}


  {/*              </div>*/}
  {/*          </div>*/}
        </div>

    );
};

export default Card;