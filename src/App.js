import './App.css';
import Header from "./companents/Header";
import {Routes, Route} from "react-router-dom"
import Favorite from "./pages/Favorite";
import Basket from "./pages/Basket";
import Catalog from "./pages/Catalog";
import Children from "./pages/Children";
import Woman from "./pages/Woman";

import Faq from "./pages/Faq";
import Footer from "./companents/Footer";
import About from "./pages/About";
import Home from "./companents/Home";

import ClothesDetails from "./pages/ClothesDetails";



function App() {
   return (
    <div className="App">
        <Header/>
        <Home/>

<Routes>

 <Route path="/" element={<Catalog/>}/>

     <Route path="favorite" element={<Favorite/>}/>
     <Route path="about" element={<About/>}/>
     <Route path="faq" element={<Faq/>}/>
    <Route path="basket" element={<Basket/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/details/:clothesId" element={<ClothesDetails/>}/>

    <Route path="/categories/:id" element={<Woman/>}/>


    <Route path="children" element={<Children/>}/>

</Routes>

    <Footer/>
    </div>
  );
}

export default App;
