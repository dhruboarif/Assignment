
import React, {useState, useEffect} from 'react';
import "./App.css"; 
import Header from "./Header"; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Shop from '../try/Shop';

function App(){

    return (
      <div>
        <Shop/>
      </div>
      
      )
}


// function App(){
//   const products =[
//     {
//     name: 'Tshirt',
//     description: 'Product Description',
//     price: '340',
//     category: 'Men Category',
//     },
//     {
//     name: 'Lehenga',
//     description: 'Product Description',
//     price: '250',
//     category: 'Woman Category',
//     },
//     {
//     name: 'Kamiz',
//     description: 'Product Description',
//     price: '34',
//     category: 'Woman Category',
//     },
//     ];  

//   const addProductHandler = (product) => {
//     console.log(product); 
//     // setProducts([...products, product]);
//   }
  

//   return(
//     <div className='ui container'>
//      <button>Test 1 </button>
//      <button>Test 2</button>
     
//      <Test/>
//      <Header/>
//      <AddProduct addProductHandler ={addProductHandler}></AddProduct>
//      <ProductList products={products}></ProductList>
//     </div>
//   )
// }

export default App; 
