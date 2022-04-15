import './App.css';
import Header from "./companents/Header";
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import Basket from "./pages/Basket";
import Catalog from "./pages/Catalog";
import { Provider } from 'react-redux'
import Footer from "./companents/Footer";
function App() {
  return (
    <div className="App">
<Header/>

<Routes>
<Route path="/" element={<Home/>}/>
    <Route path="catalog" element={<Catalog/>}/>
    <Route path="favorite" element={<Favorite/>}/>
    <Route path="basket" element={<Basket/>}/>
</Routes>
<Footer/>


    </div>
  );
}

export default App;
