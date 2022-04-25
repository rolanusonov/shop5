import React from 'react';
import {useDispatch} from "react-redux";

const TableRow = ({el, idx}) => {

    const dispatch = useDispatch()
    return (

    <tr className="basketFin2 " style={{background: "linear-gradient(268.51deg, #FF005C 0.86%, #000000 150.38%)"}}>


        <td className="   py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
            <h1 className=" " style={{
                width:"70px",
                overflow:"hidden",
                position:"absolute"
            }}>
                {el.name}
            </h1>


        </td>
        <td className=" imgBasket  py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
            <img className="tableImg" src={el.img} alt=""  />


        </td>


        <td   className="  py-4 px-6 text-sm font-medium text-white  whitespace-nowrap dark:text-white">
            {el.price  * el.quantity}&nbsp;₺

        </td>


        <td className="py-4 px-6 text-sm font-medium text-white whitespace-nowrap dark:text-white">
            <button
                onClick={() => {
                    dispatch({type: "ADD_TO_BASKET", payload: el})
                }}
                className="text-white plus dark:text-white mx-4 text-2xl ">+
            </button>
            {el.quantity}
            <button
                onClick={() => dispatch({type: "REMOVE_REM", payload: idx})}
                className="text-white dark:text-white mx-4 text-2xl ">-
            </button>
        </td>
        <td className="py-4 px-6 text-sm font-medium text-white whitespace-nowrap">
            <button
                onClick={() => dispatch({type: "REMOVE_BASKET", payload: el.id})}
                className="text-white plus1 dark:text-white ">Удалить
            </button>
        </td>
    </tr>











    );
};

export default TableRow;