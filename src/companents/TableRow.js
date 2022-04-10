import React from 'react';
import {useDispatch} from "react-redux";

const TableRow = ({el, idx}) => {
    const dispatch = useDispatch()
    return (
        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
            <td className="p-4 w-4">
                <div className="flex items-center">
                    <input id="checkbox-table-1" type="checkbox"
                           className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label htmlFor="checkbox-table-1" className="sr-only">checkbox</label>
                </div>
            </td>
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{el.title}
            </td>
            <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">

                <img src={el.image} alt="" width="30"/>
            </td>
            <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                {el.price * el.quantity}
                >>Сом
            </td>
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <button
                    onClick={() => dispatch({type: "ADD_TO_BASKET", payload: el})}

                    className="text-blue-600 dark:text-blue-500 mx-3 text-2xl ">+
                </button>
                {el.quantity}
                <button
                    onClick={() => dispatch({type: "REMOVE_REM", payload: idx})}
                    className="text-blue-600 dark:text-blue-500 mx-3 text-2xl ">-
                </button>
            </td>
            <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                <button
                    onClick={() => dispatch({type: "REMOVE_BASKET", payload: el.id})}
                    className="text-blue-600 dark:text-blue-500 ">Удалить
                </button>
            </td>
        </tr>
    );
};

export default TableRow;