import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";

import axios from "axios";
import DetailPage from "./DetailPage";
import {useDispatch} from "react-redux";

const ClothesDetails = ({el}) => {


    const dispatch = useDispatch()
    const {clothesId} = useParams()
    const [details, setDetails] = useState([])
    const {
        img,
        description,
        price,
    } = details

    useEffect(() => {
        axios(`https://shoponlain.herokuapp.com/prod-detail/${clothesId}/`)
            .then(({data}) => {
                setDetails(data)
            })
    }, [])
    console.log(details, "shirin")

    return (
        <div>
            <div className="m-10 grid grid-cols-2">
                <div>
                    <img className="ml-14" src={img} alt="" style={{
                        width: "400px",
                        height: "500px",
                    }}/>
                </div>
                <div>
                    <h1 className=" description ">{description}</h1>
                    <h1 className="text-base text-blsck mt-4 price">{price} </h1>
                    <p>Таблица размеров:</p>
                    <div className="flex items-center my-5 ">
                        {
                            details?.prod_detail?.map(el => (
                                <DetailPage el={el}/>
                            ))
                        }
                    </div>
                    <p>Цвет:</p>
                    <div className="">
                        <div className="flex items-center my-5">
                            {
                                details?.product_detail?.map(el => (
                                    <div key={el.id} style={{
                                        width:"80px",
                                        height:"95px"
                                    }} className="mx-3">
                                        <img src={el.color} alt=""/>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className=" my-8 ">
                        {/*{*/}
                        {/*    details.map(el=>(*/}
                        {/*        <button*/}
                        {/*            onClick={() => dispatch({type: "ADD_TO_BASKET", payload: el})}*/}
                        {/*            style={{background: "linear-gradient(268.51deg, #FF005C 0.86%, #000000 150.38%)"}}*/}
                        {/*            className="w-36 h-9 rounded-md text-white text-lg mt-5">*/}
                        {/*            В корзину*/}
                        {/*        </button>*/}
                        {/*    ))*/}
                        {/*}*/}
                    </div>




                     <div className=" my ">

                         <div className="flex justify-between items-center">
                             <button
                                 onClick={() => dispatch({type: "ADD_TO_BASKET", payload: el})}
                                 style={{background: "linear-gradient(268.51deg, #FF005C 0.86%, #000000 150.38%)"}}
                                 className="w-52 h-9 rounded-md text-white text-lg mt-5">
                                 Добавить в корзину
                             </button>
                         </div>
                         <button
                             onClick={() => dispatch({type: "ADD_TO_BASKET", payload: el})}
                             style={{ border:"solid #72072D\n" , color:"#72072D\n"}}
                             className="w-52 h-9 rounded-md text-white text-lg mt-5">
                             <Link to="/basket">
                                 Купить сейчас
                             </Link>

                         </button>

                    </div>
                 </div>



                </div>



            <h1 className=" font-medium text-4xl my-5 ml-6">Описание</h1>

            <p className="ml-14 mb-10" style={{
                width: "1300px"
            }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dignissimos distinctio eum explicabo in
                iusto laboriosam libero maiores molestiae nam necessitatibus nulla, perspiciatis praesentium quae qui
                recusandae similique tempora tempore vero vitae? Architecto atque autem, blanditiis consectetur deleniti
                ea earum facere, facilis hic iure nobis odit officiis pariatur quas rem, repellendus reprehenderit sint
                suscipit totam vel. Corporis eveniet iure possimus voluptas voluptate? Accusantium adipisci, aliquid,
                cumque cupiditate delectus dolorem eaque earum, expedita fugit illo iure maxime mollitia natus nulla
                officia perspiciatis praesentium sapiente totam unde voluptatem! Aspernatur, dolor hic. Impedit!</p>
        </div>

        // <div className="details-page p-5">
        //     <div className="container ">
        //         <div className="row">
        //             <div className="d-flex">
        //                 {
        //                     details?.prod?.map(el => (
        //
        //                         <div className=" w-72 Link  ">
        //
        //
        //
        //
        //                             </div>
        //                         </div>
        //
        //                     ))
        //                 }
        //
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default ClothesDetails;