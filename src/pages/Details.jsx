import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProducts } from '../data';
import image from '../img.jpg';

function Details() {
  const { proId } = useParams();
  const products = getProducts();
  const product = products.filter((itm) => itm.number == proId);

  return (
    <div className="container">
      <h3 className="mt-3">Product details of {proId}</h3>

      {product ? (
        product.map((item) => (
          <div
            className="card mt-5 "
            style={{ width: '18rem' }}
            key={item.number}
          >
            <div className="card-body">
              <img src={image} className="card-img-top" alt="product image" />
              <h5 className="card-title pt-2">{item.name}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <p className="card-text">{item.amount}</p>
              <Link to="/" className="btn btn-primary">
                Buy now!
              </Link>
            </div>
          </div>
        ))
      ) : (
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      )}
    </div>
  );
}

export default Details;
