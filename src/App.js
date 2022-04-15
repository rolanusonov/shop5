import './App.css';
import Header from "./companents/Header";
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import Basket from "./pages/Basket";
import Catalog from "./pages/Catalog";
 import Children from "./pages/Children";
import Woman from "./pages/Woman";
import Man from "./Cards/Man";
 function App() {
  return (
    <div className="App">
<Header/>

<Routes>
<Route path="/" element={<Home/>}/>
<Route path="catalog" element={<Catalog/>}/>
     <Route path="favorite" element={<Favorite/>}/>
    <Route path="basket" element={<Basket/>}/>
    <Route path="children" element={<Children/>}/>
    <Route path="woman" element={<Woman/>}/>
    <Route path="man" element={<Man/>}/>

</Routes>



    </div>
  );
}

export default App;
