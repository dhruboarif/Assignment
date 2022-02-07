import React from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../data';

function Home() {
  const products = getProducts();
  return (
    <div className="container mt-3">
      {products.map((item) => (
        <div className="card " style={{ width: '18rem' }} key={item.number}>
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <p className="card-text">{item.amount}</p>
            <Link
              to={`profile/${item.number}`}
              key={item.number}
              className="btn btn-primary"
            >
              Go for details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
