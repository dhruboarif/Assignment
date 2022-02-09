import React, {Component} from 'react';


class Test2 extends Component {
    render() {
        
        return (
            
            <div>
                <h1>Product details</h1>
                {/* {this.props.item.map((person, index) => (
                    <p>Hello, {person.name} from {person.description}!</p>
                ))} */}

               <grid>
                <h2>{this.props.product.name}</h2>
                        <p>{this.props.product.description}</p>
                        <p>{this.props.product.price}</p>
                        <p>{this.props.product.category}</p>
                </grid>
                
            </div>
        );
    }
}

export default Test2; 

