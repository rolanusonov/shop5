import React, {useEffect, useState} from 'react';
import { useParams} from "react-router-dom";

import axios from "axios";



const ClothesDetails = () => {

    const {clothesId} = useParams()
    const [details, setDetails] = useState([])
    const {
        img,
        description,
        price,
        title,
        product_detail,
        prod_detail,
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
                            prod_detail.map(el => (
                                <div key={el.id} className="stule mx-3" style={{
                                    width:"75px",
                                    height:"40px"
                                }}>
                                    <h1 className="stule_btn my-1 text-base"> {el.title}</h1>
                                </div>
                            ))
                        }
                    </div>

                    <p>Цвет:</p>
                    <div className="">


<div className="flex items-center my-5"  >


                        {
                            product_detail.map(el => (
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

<<<<<<< HEAD

                    <button>button</button>
=======
                    <div className=" my ">
                        <button style={{
                            background: "linear-gradient(90deg, #72072D 0%, #FF005C 100%)",
                            borderRadius: "5px",
                        }}>Добавить в корзину</button>
                        <button>Купить сейчас</button>
                    </div>
>>>>>>> 3c9f97b755fc584a53eac416295f7df5e2288a7a
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