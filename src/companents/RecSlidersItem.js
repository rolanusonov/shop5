import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import api from "../http/api";


const RecSlidersItem = ({id}) => {


    const [details, setDetails] = useState([])
    const [loading, setLoading] = useState(false)
    const [flag, setFlag] = useState(false)
    const dispatch = useDispatch()
    const click = () => {
        // develop = document.querySelector(".develop")
    }

    useEffect(() => {
        api(`/prod-detail/${id}/`)
            .then(({data}) => {
                setDetails(data)
            })
    }, [])
    console.log(details, "details")

    const addToBasket = (el) => {
        setLoading(false)
        setTimeout(() => {
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
            }, 2000)
        }, 1000)

        dispatch({type: "ADD_TO_BASKET", payload: el})
    }


    return (


        <div style={{background: "#F8F8F8", margin: "0 5px"}} className="basket-card">


            <Link to={`/details/${details.id}`}>

                <img src={details.img} alt=""/>
                <h1>{details.name}</h1>
                <h1 style={{fontSize: "24px", color: "#FF005C"}}>{details.price} ₺</h1>
            </Link>

            <button onClick={() => addToBasket(details)} className="develop">
                {
                    loading ? <div className="loader">
                    </div> : "корзину"
                }
            </button>

        </div>

    );
};

export default RecSlidersItem;