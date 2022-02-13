import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import Loading from "./Loading"

function Shop(){

    const[page, setPage] = useState(true);   
    const[selectedproduct, setSelectedproduct] = useState(); 
    const[loading, setLoading] = useState(true);

    
    const childToParent = (product) => {
        setSelectedproduct(product);
        myLoader(true);
        setTimeout(() => {
            setLoading(false); 
            setPage(false);
        }, 2000);
         
    }

    function myLoader(loading){
        setTimeout(() => {
            setLoading(loading);
        }, 1000); 
    }
    
    useEffect(() => {
        myLoader(false)
      },[]);

    const MainList = () => {
        setPage(true); 
     }
    const [products,setProduct] = useState([
        {
        name: 'Nova 3i',
        description: 'Product Description',
        price: '200',
        cat: 'Men Category',
        },
        {
        name: 'Samsung M20',
        description: 'Product Description',
        price: '200',
        cat: 'Men Category',
        },
        {
        name: 'iPhone 12s',
        description: 'Product Description',
        price: '1500',
        cat: 'Woman Category',
        },
        ])


        
    return(
        <>
        {loading === true ? <Loading/> : (
            page === true ? <ProductList products={products} childToParent={childToParent}/> : 
            <ProductDetails product={selectedproduct} MainList={MainList}/>
        )
        
        
        }
        
        
        </>
    )
}


export default Shop; 