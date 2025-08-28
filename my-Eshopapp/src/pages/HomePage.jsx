import React from "react";
import { Link } from "react-router-dom";
// Note: useCart is commented out as it's not used in this view, but kept for context.
// import { useCart } from "../context/CartContext"; 
import './HomePage.css'
export default function HomePage() {
  // const { items } = useCart();

  return (
    <>
      {/* This is a common pattern for including styles directly within a React component.
        It keeps the component self-contained and easy to manage in a single file.
      */}
      

      <div className="antialiased">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="abstract-shape shape-1"></div>
          <div className="abstract-shape shape-2"></div>
          <div className="relative z-10">
            <h1>Discover Your Style</h1>
            <p>
              Explore our curated collection of products, where quality meets design.
            </p>
            <Link to="/products" className="shop-now-btn">
              Shop the Collection
            </Link>
          </div>
        </section>

        {/* Categories Section */}
        <section className="section-padding">
          <div className="container">
            <h2 className="section-heading">Browse Our Top Categories</h2>
            <div className="categories-grid">
              {["Men's", "Women's", "Electronics", "Beauty"].map((cat) => (
                <Link
                  key={cat}
                  to={`/category/${cat.toLowerCase().replace("'", "")}`}
                  className="category-card"
                >
                  <div className="icon-placeholder"></div> {/* Placeholder for SVG icon */}
                  <h3>{cat}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="section-padding" style={{ backgroundColor: '#f9fafb' }}>
          <div className="container">
            <h2 className="section-heading">Featured Products</h2>
            <div className="products-grid">
              {[1, 2, 3].map((id) => (
                <div key={id} className="product-card">
                  <img
                    src={`https://placehold.co/600x400/3730a3/ffffff?text=Product+${id}`}
                    alt={`Product ${id}`}
                    className="product-image"
                  />
                  <h3>Product {id}</h3>
                  <p className="price">$ {(id * 50).toFixed(2)}</p>
                  <Link
                    to={`/product/${id}`}
                    className="view-details-btn"
                  >
                    View Details
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

       
       
      </div>
    </>
  );
}
