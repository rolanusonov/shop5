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
                                                            Имя
                                                        </th>
                                                        <th scope="col"
                                                            className="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase dark:text-white">
                                                            Фото
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
            <div>
                <h1 className="text-center my-7" style={{
                    fontFamily: 'Poppins',
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "24px",
                    lineHeight: "36px",
                    color: "#515151",
                }}>Платёжные Реквизиты</h1>
                <div className="w-96 ml-96   ">

                    <form className="accent-gray-500 shadow-md rounded px-8 pt-6 pb-8 mb-4  ">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2 flex " htmlFor="username">
                                ФИО <p className="mx-1" style={{color:"#FF005C"}}>*</p>
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username" type="text"/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2 flex" htmlFor="username">
                                Имя <p className="mx-1" style={{color:"#FF005C"}}>*</p>
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username" type="text"/>
                        </div>
                        <div className="inline-block relative w-80">
                            <label className="block text-gray-700 text-sm font-bold mb-2 flex " htmlFor="username">
                                Область <p className="mx-1" style={{color:"#FF005C"}}>*</p>
                            </label>
                            <select
                                className="block  appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow
                                leading-tight focus:outline-none focus:shadow-outline text-xl" style={{
                                fontFamily: 'Poppins',
                                fontWeight: "400",
                                fontSize: "16px",
                                lineHeight:"24px",
                                color: "#424242",
                            }}>
                                <option className="w-72">Выберите область</option>
                                <option className="w-72">Чуй</option>
                                <option className="w-72">Жалал-Абад</option>
                                <option className="w-72">Ош</option>
                                <option className="w-72">Нарын</option>
                                <option className="w-72">Талас</option>
                                <option className="w-72">Баткен</option>
                                <option className="w-72">Ысык-кол</option>
                            </select>
                            <div
                                className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 mt-6 " style={{color:"#FF005C"}}>
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                </svg>
                            </div>
                        </div>
                    </form>
                    <button  className="w-96 h-12 my-9 text-white text-xl"
                        style={{background: "linear-gradient(268.51deg, #FF005C 0.86%, #000000 150.38%)",
                        borderRadius: "5px"}}>
                        Заказать
                    </button>
                </div>

            </div>


        </div>
    );
};

export default Basket;