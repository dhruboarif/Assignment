import React from 'react'; 
// import product form "../images/Headwear.jpg"; 
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Details from './Details';


const ProductCard = (props) => {
    console.log(props); 

    const {id, name, description, price, category} = props.product; 
    return (
        <div className="item">
        {/* // <img className="ui avatar image" src={user} alt="user"></img> */}
        <div className="content">
            
            <Router>
                 
                <Link to="/Details" className="header">
                {name}
                </Link>

                <Routes>
                    <Route path="/Details" element={<Details/>}></Route>
                </Routes>
            </Router>
            <div>{description}</div>
            <div>{price}</div>
            <div>{category}</div>
            <i className="trash alternate outline icon" style={{color: "red", marginTop:"7px"}} ></i>
        </div>
    </div>
    );
};

export default ProductCard; 