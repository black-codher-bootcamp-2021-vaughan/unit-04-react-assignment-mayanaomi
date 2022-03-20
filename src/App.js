
import react from 'react';
import Product from './components/Product';
import ProductList from "./components/ProductList"
import data from './models/data.json'
import BasketCount from './components/BasketCount';
import BasketTotal from './components/BasketTotal';
import Header from './components/Header';
import Basket from './components/Basket';
import Search from './components/Search';
import { useState } from 'react'


function App() {
  console.log("My data", data)
  console.log("These are all the tracks", Product)
  const [BasketItems, setBasketItems] = useState([])
  return (
    <>
  
        <h1> Media Store App </h1> 
        <div><Search>Search Here...</Search></div>
         <div><Basket>BasketItems={BasketItems}</Basket></div>
        {data.map((product) => (
          <Product trackName={product.trackName} trackPrice={product.trackPrice} />
          
        ))}
  </>
  );
}

export default App;
