import React from "react";
import {Card, Button} from 'react-bootstrap';

function ProductDetails(props, {MainList}) {
    return(
        <>
            <div className="container">

            <Card>
            <Card.Header>Product Details</Card.Header>
                <Card.Body>
                    <Card.Title>{props.product.name}</Card.Title>
                    <Card.Text>
                    {props.product.description}
                    </Card.Text>
                    <Card.Title>Product Price: {props.product.price} BDT</Card.Title>
                    <Card.Title>Product Category: {props.product.cat}</Card.Title>
                    <Button variant="primary" onClick={() => props.MainList()}>Back</Button>
                </Card.Body>
            </Card>    
           
            </div>
        </>
    )
}


export default ProductDetails; 