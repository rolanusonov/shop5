import './App.css';
import Header from "./companents/Header";
import {Routes, Route} from "react-router-dom"
import Home from "./companents/pages/Home";
import Favorite from "./companents/pages/Favorite";
import Basket from "./companents/pages/Basket";
import Catalog from "./companents/pages/Catalog";
import { Provider } from 'react-redux'
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

    </div>
  );
}

export default App;
