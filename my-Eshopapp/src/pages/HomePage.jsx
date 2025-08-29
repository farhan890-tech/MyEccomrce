
import { Link } from "react-router-dom";
import Slider from "react-slick"; // 👈 new import
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./HomePage.css";

export default function HomePage() {
  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // number of items visible at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640, // mobiles
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="antialiased">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="abstract-shape shape-1"></div>
        <div className="abstract-shape shape-2"></div>
        <div className="relative z-10">
          <h1>Discover Your Style</h1>
          <p>Explore our curated collection of products, where quality meets design.</p>
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
                <div className="icon-placeholder"></div>
                <h3>{cat}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Slider */}
      <section className="section-padding" style={{ backgroundColor: "#f9fafb" }}>
        <div className="container">
          <h2 className="section-heading">Featured Products</h2>
          <Slider {...sliderSettings}>
            {[1, 2, 3, 4, 5].map((id) => (
              <div key={id} className="product-card">
                <img
                  src={`https://placehold.co/600x400/3730a3/ffffff?text=Product+${id}`}
                  alt={`Product ${id}`}
                  className="product-image"
                />
                <h3>Product {id}</h3>
                <p className="price">$ {(id * 50).toFixed(2)}</p>
                <Link to={`/product/${id}`} className="view-details-btn">
                  View Details
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <section className="section-padding" style= {{ backgroundColor: '#f9fafb' }}>
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

<section className="section-padding" style= {{ backgroundColor: '#f9fafb' }}>
      <div className="container">
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

<section className="section-padding" style= {{ backgroundColor: '#f9fafb' }}>
      <div className="container">
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

  );

}



