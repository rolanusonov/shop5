import React from 'react';
import {useSelector} from "react-redux";
import TableRow from "../companents/TableRow";
import {useForm} from "react-hook-form";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from "../http/api";


const Basket = () => {
    const basket = useSelector(s => s.basket)
    const totalSum = basket.reduce((acc, el) => el.quantity * el.price + acc, 0)

    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = data => {
        console.log(data)
        const dataBasket = {
            full_name: data.full_name,
            phone_number: data.phone_number,
            price: totalSum,
            region: data.region,
            basket: JSON.stringify(basket)

        }
        api.post("ordering-create/", dataBasket)
            .then(() => {
                toast.success("Успешно отправлено")
            })
            .catch((errors) => {
                toast.error('Ошибка')
            })
    };




    return (
        <>
            <ToastContainer/>
            <div className="container md:container corzino py-5 px-10 div-favorite">
                <form action="" >
                {basket.length === 0 ?
                        <div className="flex p-4 basketLog  " id="alertId" role="alert" style={{
                            background: "linear-gradient(268.51deg, #FF005C 0.86%, #000000 150.38%)",
                            borderRadius: "5px"
                        }}>
                            <svg className="flex-shrink-0 w-12 h-8 text-white dark:text-white" fill="currentColor"
                                 viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                      clipRule="evenodd"/>
                            </svg>
                            <div className="ml-3      text-2xl font-medium text-white dark:text-white">
                                Корзина пусто!
                            </div>
                        </div> :
                        <div>
                            <h1 className="my-9 text-center  text-4xl"
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
                            <div className="flex-row flex-wrap flex  basketGarbage">
                                <div className="w-full ml-12">
                                    <div className="flex flex-col">
                                        <div className="overflow-x-auto shadow-md sm:rounded-lg">
                                            <div className="inline-block min-w-full align-middle">
                                                <div className="overflow-hidden    ">
                                                    <table
                                                        className="min-w-full feel divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                                                        <thead className=" "
                                                               style={{background: "linear-gradient(268.51deg, #FF005C 0.86%, #000000 150.38%)"}}>
                                                        <tr className="col   ">
                                                            <th scope="col"
                                                                className="py-3 px-6   text-xs font-medium tracking-wider text-left text-white uppercase dark:text-white">
                                                                Имя
                                                            </th>
                                                            <th scope="col"
                                                                className=" imgBasket py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase dark:text-white">
                                                                Фото
                                                            </th>
                                                            <th scope="col"
                                                                className="py-3 px-6    text-xs font-medium tracking-wider text-left text-left text-white uppercase dark:text-white">
                                                                цена
                                                            </th>
                                                            <th scope="col"
                                                                className="py-3 px-6 gel   text-xs font-medium tracking-wider text-left text-left text-white uppercase dark:text-white">
                                                                Количество
                                                            </th>

                                                            <th scope="col"
                                                                className="py-3 px-6 gels  text-xs   font-medium tracking-wider text-left text-left text-white uppercase dark:text-white">
                                                                Удалить
                                                            </th>
                                                        </tr>
                                                       
                                                         </thead>
                                                        <tbody
                                                            className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                                        {
                                                            basket.map((el, idx) => (
                                                                <TableRow el={el} idx={idx}/>
                                                            ))
                                                        }

                                                        </tbody>


                                                    </table>
                                                    <div className="flex p-4 my-0.5 justify-center " id="alertId"
                                                         role="alert"
                                                         style={{background: "linear-gradient(268.51deg, #FF005C 0.86%, #000000 150.38%)"}}>




                                                        <div className="ml-3 text-xl font-medium text-white ">

                                                            <label className="block text-gray-700 text-sm font-bold mb-2 flex" htmlFor="username">
                                                                {errors.price   && <p className="mx-1" style={{color: "#FF005C"}}>* </p>}

                                                            </label>
                                                            <input  style={{fontSize: "24px", color: "#bdc3c7"}}
                                                                className=" inputBasket ml-3 text-xl font-medium text-black "
                                                                type="text"
                                                                value={totalSum}
                                                         />
                                                        </div>


                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>


                            </div>
                       </div>
                        }</form>
                <div>
                    <h1 className="text-center h1-basket my-7" style={{
                        fontFamily: 'Poppins',
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "24px",
                        lineHeight: "36px",
                        color: "#515151",
                    }}>Платёжные Реквизиты</h1>
                    <div className="w-96 ml-96 div-basket  ">

                        <form className="accent-gray-500 shadow-md korzinos rounded px-8 pt-6 pb-8 mb-4  "
                              onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2 flex " htmlFor="username">
                                    ФИО {errors.full_name && <p className="mx-1" style={{color: "#FF005C"}}>*</p>}
                                </label>
                                <input
                                    {...register("full_name", {required: true})}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="username" type="text" placeholder="Баланчаев Баланча"/>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2 flex" htmlFor="username">
                                    Телефон {errors.phone_number && <p className="mx-1" style={{color: "#FF005C"}}>*</p>}

                                </label>
                                <input
                                    {...register("phone_number", {required: true})}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="username" type="tel" placeholder="0502 xxx xxx"/>
                            </div>
                            <div className="inline-block relative w-80">
                                <label className="block text-gray-700 text-sm font-bold mb-2 flex " htmlFor="username">
                                    Область {errors.region && <p className="mx-1" style={{color: "#FF005C"}}>*</p>}
                                </label>
                                <select
                                    {...register("region", {required: true})}
                                    className="block  appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow
                                leading-tight focus:outline-none focus:shadow-outline text-xl" style={{
                                    fontFamily: 'Poppins',
                                    fontWeight: "400",
                                    fontSize: "16px",
                                    lineHeight: "24px",
                                    color: "#424242",
                                }}>
                                    <option className="w-72" value="1">Чуй</option>
                                    <option className="w-72" value="2">Жалал-Абад</option>
                                    <option className="w-72" value="3">Ош</option>
                                    <option className="w-72" value="4">Нарын</option>
                                    <option className="w-72" value="5">Талас</option>
                                    <option className="w-72" value="6">Баткен</option>
                                    <option className="w-72" value="7">Ысык-кол</option>
                                </select>
                                <div
                                    className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 mt-6 "
                                    style={{color: "#FF005C"}}>
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 20 20">
                                        <path
                                            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                    </svg>
                                </div>
                            </div>
                            <button type="submit" className="w-80 h-12 mt-9 text-white text-xl"
                                    style={{
                                        background: "linear-gradient(268.51deg, #FF005C 0.86%, #000000 150.38%)",
                                        borderRadius: "5px"
                                    }}>
                                Заказать
                            </button>
                        </form>

                    </div>

                </div>


            </div>
        </>

    );
};
export default Basket;