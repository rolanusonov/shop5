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
                    <div className="flex p-4  " id="alertId" role="alert" style={{background: "linear-gradient(268.51deg, #FF005C 0.86%, #000000 150.38%)",borderRadius: "5px"}}>
                        <svg className="flex-shrink-0 w-12 h-8 text-white dark:text-white" fill="currentColor"
                             viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                  clipRule="evenodd"> </path>
                        </svg>
                        <div className="ml-3 text-2xl font-medium text-white dark:text-white">
                          Корзина пусто!
                        </div>
                        {/*<button type="button"*/}
                        {/*        className="ml-auto -mx-1.5 -my-1.5 bg-blue-100 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex h-8 w-8 dark:bg-blue-200 dark:hover:bg-blue-300 dark:hover:text-blue-800"*/}
                        {/*        data-collapse-toggle="alertId" aria-label="Close">*/}
                        {/*    <span className="sr-only">Dismiss</span>*/}
                        {/*    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"*/}
                        {/*         xmlns="http://www.w3.org/2000/svg">*/}
                        {/*        <path fillRule="evenodd"*/}
                        {/*              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"*/}
                        {/*              clipRule="evenodd"> </path>*/}
                        {/*    </svg>*/}
                        {/*</button>*/}
                    </div>:
                    <div>
                        <h1 className="my-9 text-center text-4xl"
                            style={{
                                fontFamily: 'Poppins',
                                color: "#FF005C",
                                fontWeight: "600",
                                fontSize: "36px",
                                lineHeight: "54px",
                            }}
                        >Оформление заказа</h1>
                        <h2 className="mb-4 ml-14"
                            style={{
                                fontFamily: 'Poppins',
                                fontWeight: "600",
                                fontSize: "28px",
                                lineHeight: "42px",
                                color: "#252525",
                            }}
                        >Ваш товар</h2>
                        <div className="flex-row flex-wrap flex ">
                            <div className="w-full ml-12">
                                <div className="flex flex-col">
                                    <div className="overflow-x-auto shadow-md sm:rounded-lg">
                                        <div className="inline-block min-w-full align-middle">
                                            <div className="overflow-hidden ">
                                                <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                                                    <thead className="" style={{background: "linear-gradient(268.51deg, #FF005C 0.86%, #000000 150.38%)"}}>
                                                    <tr>
                                                        <th scope="col"
                                                            className="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase dark:text-white">
                                                            Товар
                                                        </th>
                                                        <th scope="col"
                                                            className="py-3 px-6 text-xs font-medium tracking-wider text-left text-left text-white uppercase dark:text-white">
                                                            цена
                                                        </th>
                                                        <th scope="col"
                                                            className="py-3 px-6 text-xs font-medium tracking-wider text-left text-left text-white uppercase dark:text-white">
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
                                                <div className="flex p-4 my-0.5 justify-center " id="alertId" role="alert" style={{background: "linear-gradient(268.51deg, #FF005C 0.86%, #000000 150.38%)"}}>
                                                    <div className="ml-3 text-xl font-medium text-white ">
                                                        Итого  : {totalSum} com
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>



            }

        </div>
    );
};

export default Basket;