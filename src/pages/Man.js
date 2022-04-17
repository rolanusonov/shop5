import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

const Man = ({el}) => {
    const dispatch = useDispatch()
    return (
        <div className=" w-72    ">
          <h1>{el.name}</h1>

            <h1 className="text-base text-blsck mt-4">{el.price} </h1>


            <div className="px-5    pb-5 dark:bg-white-500">

                {/*<div className="flex justify-between items-center">*/}
                {/*    <button*/}
                {/*        onClick={() => dispatch({type: "ADD_TO_BASKET", payload: el})}*/}
                {/*        style={{background: "linear-gradient(268.51deg, #FF005C 0.86%, #000000 150.38%)"}}*/}
                {/*        className="w-36 h-9 rounded-md text-white text-lg mt-5">*/}
                {/*        В корзину*/}
                {/*    </button>*/}
                {/*</div>*/}

            </div>
        </div>
    );
};

export default Man;