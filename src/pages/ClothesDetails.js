import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import axios from "axios";



const ClothesDetails = () => {

    const {clothesId} = useParams()
    const [details, setDetails] = useState([])
    const {
        prod,
        img,
        description,
        price,
        title,
        color_name,
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


                    <img src={img} alt="" style={{
                        width: "400px",
                        height: "500px",
                    }}/>
                </div>
                <div>
                    <h1 className=" description ">{description}</h1>
                    <h1 className="text-base text-blsck mt-4 price">{price} </h1>
                    <p>Таблица размеров:</p>
                    <h1 style={{
                        width: "60px",
                        height: "80px",
                        }}>{title}</h1>
                    <p>Цвет:</p>
                    <img src={prod} alt="" style={{
                        width: "60px",
                        height: "80px",
                    }}/>
                    <h1>{color_name}</h1>

                    <div className=" my ">
                        <button style={{
                            background: "linear-gradient(90deg, #72072D 0%, #FF005C 100%)",
                            borderRadius: "5px",
                        }}>Добавить в корзину</button>
                        <button>Купить сейчас</button>
                    </div>
                </div>


            </div>

<h1 className=" font-medium text-4xl my-5 ml-6">Описание</h1>

            <p className="ml-14 mb-10" style={{
                width:"1300px"
            }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dignissimos distinctio eum explicabo in iusto laboriosam libero maiores molestiae nam necessitatibus nulla, perspiciatis praesentium quae qui recusandae similique tempora tempore vero vitae? Architecto atque autem, blanditiis consectetur deleniti ea earum facere, facilis hic iure nobis odit officiis pariatur quas rem, repellendus reprehenderit sint suscipit totam vel. Corporis eveniet iure possimus voluptas voluptate? Accusantium adipisci, aliquid, cumque cupiditate delectus dolorem eaque earum, expedita fugit illo iure maxime mollitia natus nulla officia perspiciatis praesentium sapiente totam unde voluptatem! Aspernatur, dolor hic. Impedit!</p>
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