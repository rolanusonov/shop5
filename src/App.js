import './App.css';
import Header from "./companents/Header";
import {Routes, Route} from "react-router-dom"
import Basket from "./pages/Basket";
import Catalog from "./pages/Catalog";
import Children from "./pages/Children";
import Woman from "./pages/Woman";
import Faq from "./pages/Faq";
import Footer from "./companents/Footer";
import About from "./pages/About";
import ClothesDetails from "./pages/ClothesDetails";
import SearchResults from "./pages/SearchResults";
import Man from "./pages/Man";



function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Catalog/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="faq" element={<Faq/>}/>
                <Route path="basket" element={<Basket/>}/>
                <Route path="/details/:clothesId" element={<ClothesDetails/>}/>
                <Route path="man" element={<Man/>}/>
                <Route path="/categories/:id" element={<Woman/>}/>
                <Route path="/search-results/:name" element={<SearchResults/>}/>
                <Route path="children" element={<Children/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
