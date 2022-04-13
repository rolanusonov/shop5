import React from 'react';
import {useSelector,useDispatch} from "react-redux";
import TableRow from "../companents/TableRow";

const Basket = () => {
    const basket = useSelector(s => s.basket)
const totalSum = basket.reduce((acc,el) => el.quantity * el.price + acc,0)
    return (
        <div className="container md:container py-5 px-10">
            {
                basket.length === 0 ?
                    <div className="flex p-4  bg-blue-100 rounded-lg dark:bg-blue-200" id="alertId" role="alert">
                        <svg className="flex-shrink-0 w-9 h-5 text-blue-700 dark:text-blue-800" fill="currentColor"
                             viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                  clipRule="evenodd"> </path>
                        </svg>
                        <div className="ml-3 text-sm font-medium text-blue-700 dark:text-blue-900">
                          Корзина пусто!
                        </div>
                        <button type="button"
                                className="ml-auto -mx-1.5 -my-1.5 bg-blue-100 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex h-8 w-8 dark:bg-blue-200 dark:hover:bg-blue-300 dark:hover:text-blue-800"
                                data-collapse-toggle="alertId" aria-label="Close">
                            <span className="sr-only">Dismiss</span>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                      clipRule="evenodd"> </path>
                            </svg>
                        </button>
                    </div>:
                    <div className="flex-row flex-wrap flex">
                        <div className="w-full">
                            <div className="flex flex-col">
                                <div className="overflow-x-auto shadow-md sm:rounded-lg">
                                    <div className="inline-block min-w-full align-middle">
                                        <div className="overflow-hidden ">
                                            <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                                                <thead className="bg-gray-100 dark:bg-gray-700">
                                                <tr>
                                                    <th scope="col" className="p-4">
                                                        <div className="flex items-center">
                                                            <input id="checkbox-all" type="checkbox"
                                                                   className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                                            <label htmlFor="checkbox-all" className="sr-only">checkbox</label>
                                                        </div>
                                                    </th>
                                                    <th scope="col"
                                                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                        Называния Товара
                                                    </th>
                                                    <th scope="col"
                                                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                        Фото
                                                    </th>
                                                    <th scope="col"
                                                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                        Стоимость
                                                    </th>
                                                    <th scope="col"
                                                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                        Количество
                                                    </th>
                                                    <th scope="col" className="p-4">
                                                        <span className="sr-only">Edit</span>
                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                                {
                                                    basket.map((el,idx) =>(
                                                       <TableRow el={el} idx={idx}/>
                                                    ))
                                                }

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className="flex p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
                            <svg className="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd">

                                </path></svg>
                            <div>
                                <span className="font-medium">Общая сумма: {totalSum}</span>
                            </div>
                        </div>




                    </div>


            }

        </div>
    );
};

export default Basket;