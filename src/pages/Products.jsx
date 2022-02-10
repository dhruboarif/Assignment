import React, { useState } from 'react';
import { Button, Table } from "react-bootstrap";
import Details from './Details';
import * as ReactBootStrap from 'react-bootstrap'; 


function Products (){
    const [loader, setloader] = useState(false); 
    const [page, setPage] = useState('');
    const [selectedProduct, setselectedProduct] = useState('');

    const products = [{
        name: 'Tshirt',
        description: 'T-shirt Description',
        price: '340',
        category: 'Men Category',
        },
        {
        name: 'Lehenga',
        description: 'Lehenga Description',
        price: '250',
        category: 'Woman Category',
        },
        {
        name: 'Kamiz',
        description: 'Kamiz Description',
        price: '34',
        category: 'Woman Category',
        }, 
    ]
       
    const myClick = (product) =>{
        
        setloader(true);
        setPage(''); 
        setTimeout(() => {
                click(product);
              }, 3000);
    }

    const click = (product) =>{
        setselectedProduct(product);
         setloader(false);
         setPage('Details');
    }

        return (
            <div>
                {/* <Test2 item= {this.state}/>
                 { this.state.map(item=> (
                <h4>{item.name}</h4>
            ))} */}

            
            <Table striped bordered>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Product Category</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {products.map((product, ind) => (
                        
                        <tr>
                        <td>{ind}</td>
                        
                            <Button onClick={()=>myClick(product)}>
                                
                            {product.name}
                            </Button>
                            
                        <td>{product.description}</td>
                        <td>{product.price}</td>
                        <td>{product.category}</td>
                        <td>
                            edit
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
                
                {
                loader && <div> <ReactBootStrap.Spinner animation="border" /></div>
                // render what you want
                }     
                
                {page === 'Details' ? <Details product={selectedProduct}/> : null} 
             </div>
        );
    
}

export default Products; 


