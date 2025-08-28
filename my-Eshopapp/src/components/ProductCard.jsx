// src/components/ProductCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css"; // optional CSS file

function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />
      </Link>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price}</p>

        <div className="product-actions">
          <Link to={`/product/${product.id}`} className="btn view-btn">
            View
          </Link>
          <button
            className="btn add-btn"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
