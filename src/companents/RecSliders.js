import React, {useEffect, useState} from 'react';
import RecSlidersItem from "./RecSlidersItem";
import Slider from "react-slick";
import api from "../http/api";


const RecSliders = () => {
    const [item, setItem] = useState([])
    const [item2, setItem2] = useState([])

    useEffect(() => {
        api("/rec-list/")
            .then(({data}) => {
                setItem(data)
            })
            .catch(e => {
                console.log(e)
            })

        api("/prod-list/")
            .then(({data}) => {
                setItem2(data)
            })
            .catch(e => {
                console.log(e)
            })
    }, [])
    console.log(item, "item")

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    return (
        <>
            {
                item.map(el => (
                    <div className="rec-sliders" style={{margin: "50px 0"}}>
                        <h1 className="req-card">{el.name}:</h1>
                        {
                            <div className="req">
                                <Slider {...settings}>
                                    {
                                        el.products.map(sas => (

                                            <RecSlidersItem id={sas}/>

                                        ))
                                    }
                                </Slider>
                            </div>
                        }
                    </div>
                ))
            }
        </>
    );
};

export default RecSliders;