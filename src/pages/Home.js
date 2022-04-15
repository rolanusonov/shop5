import React from 'react';
import logo from "../Cards/Group 1105.png"
import logo2 from "../Cards/Group 1106.png"
import logo3 from "../Cards/unsplash_NKjIT7u5nXE.png"
import logo4 from "../Cards/unsplash_xXJ6utyoSw0.png"
 import {Link,Routes, Route} from "react-router-dom";
import Woman from "./Woman";
import Man from "../Cards/Man";

const Home = () => {
    return (
        <div className="container    ">


            <div className=" navigate  m-10">



                {/*<Link className="m-4" to="/hero/women"  ><img src={logo} alt="wer"/></Link>*/}
                {/*<Link className="m-4" to="/hero/Man"><img src={logo2} alt="wer"/></Link>*/}

                {/*<Link className="m-4" to="/women" ><img src={logo3} alt="wer"/> </Link>*/}
                {/*<Link className="m-4" to="/women" ><img src={logo4} alt="wer"/></Link>*/}

            </div>

            {/*<Routes>*/}
            {/*    <Route path="woman" element={<Woman/>}/>*/}
            {/*    <Route path="man" element={<Man/>}/>*/}
            {/*</Routes>*/}

            <div>

            </div>

        </div>
    );
};

export default Home;