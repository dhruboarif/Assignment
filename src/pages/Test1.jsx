import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Button, Table } from "react-bootstrap";
import Test2 from './Test2';
import Test3 from './Test3';
import * as ReactBootStrap from 'react-bootstrap'; 


class Test1 extends Component {
    state = {
        show: false,
        page: '',
        selectedProduct: '',
        products: [{
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
        ]}  
    
    myClick = (product) =>{
        this.setState({
            show: true, 
            });
    setTimeout(() => {
                this.click(product);
              }, 3000);
    
    }

    click = (product) =>{
        
         this.setState({
        show:false,
         page: 'Test2',
         selectedProduct: product,
         
         });
    }

    render() {
        

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
                    {this.state.products.map((product, ind) => (
                        
                        <tr>
                        <td>{ind}</td>
                        
                            <Button onClick={()=>this.myClick(product)}>
                                
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
                this.state.show && <div> <ReactBootStrap.Spinner animation="border" /></div>
                // render what you want
                }     
                
               

                {this.state.page === 'Test2' ? <Test2 product={this.state.selectedProduct}/> : <Test3/>} 
             </div>
        );
    }
}

export default Test1; 


