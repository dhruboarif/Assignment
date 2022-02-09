
import React, {useState, useEffect} from 'react';
import "./App.css"; 
import Header from "./Header"; 
import ProductList from "./ProductList"; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddProduct from "./AddProduct"; 
import Details from './Details';
import Test from '../pages/Test';
import { Component } from 'react';
import Test1 from '../pages/Test1';

class App extends Component {

  state={
    page: '', 
  }

  render(){
    return (
      <div>
        <Test1/>
      </div>
      
      )
  }
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
