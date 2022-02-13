import React from "react";
import "./ProductList.css"; 
import productImage from '../image/product.jpg';
function ProductList(props, {childToParent}) {

    
    return(
        <>
         <div className="container">
         <h1>Product List</h1>
        {/* <table>
            <thead>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Category</th>
            </thead>
            
            <tbody>
            {props.products.map((product, index) => (
                <tr>
                <td className="p-2">{index}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.cat}</td>
                <button className="btn btn-primary" onClick={() => props.childToParent(product)} >Show Details</button>
                </tr>
            ))
            }
                
            </tbody>
        </table> */}
         </div>
            
         <div className="container d-flex justify-content-center mt-50 mb-50">
            <div className="row">
            {props.products.map((product, index) => (
                <div className="col-md-4 mt-2">
                <div className="card">
                    <div className="card-body">
                        <div className="card-img-actions"> <img src={productImage} className="card-img img-fluid" style={{width:"96", height:"350"}} alt="BigCo Inc. logo"/> </div>
                    </div>
                    <div className="card-body bg-light text-center">
                        <div className="mb-2">
                            <h6 className="font-weight-semibold mb-2"> <a href="#" className="text-default mb-2" data-abc="true">{product.name}</a> </h6> <a href="#" className="text-muted" data-abc="true">{product.description}</a>
                        </div>
                        <h3 className="mb-0 pb-3 font-weight-semibold"> ${product.price}</h3>
                        <div> <i className="fa fa-star star"></i> <i className="fa fa-star star"></i> <i className="fa fa-star star"></i> <i className="fa fa-star star"></i> </div>
                        <button className="btn btn-primary" onClick={() => props.childToParent(product)} >Show Details</button>
                    </div>
                </div>
            </div>
            ))
            }
                
       
                </div>
            </div>
      

        </>
    )
}


export default ProductList; 