
function Details(props) {
    console.log(props);  
        return (
            
            <div>
                <h1>Product details</h1>

               
                        <h2>{props.product.name}</h2>
                        <p>{props.product.description}</p>
                        <p>{props.product.price}</p>
                        <p>{props.product.category}</p>
               
            </div>
        );
}

export default Details; 

