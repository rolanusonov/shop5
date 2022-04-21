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
        <div className="recCard">


        <div className="basket-card     ">
            <Link className=""  to={`/details/${details.id}`}>
                <div className="school">
                    <img className="imgSlider" src={details.img} alt=""/>

                </div>
                <div className="schoolH1">
                    <h1 >{details.name}</h1>

                    <h1 className="schoolPrice" style={{fontSize: "24px", color: "#FF005C"}}>{details.price} ₺</h1>

                </div>
            </Link>

            <button onClick={() => addToBasket(details)} className="develop recBtn">
                {
                    loading ? <div className="loader">
                    </div> : "корзину"
                }
            </button>

        </div>
        </div>

    );
};

export default RecSlidersItem;