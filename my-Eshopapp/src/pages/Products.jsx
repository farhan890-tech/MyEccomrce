import React from "react";
import { Link } from "react-router-dom";

export default function Products() {
  // Example products with updated images and data
  const products = [
    {
      id: 1,
      name: "Classic T-Shirt",
      price: 499,
      image: "https://placehold.co/400x300/4F46E5/ffffff?text=Product+1",
    },
    {
      id: 2,
      name: "Stylish Sneakers",
      price: 2499,
      image: "https://placehold.co/400x300/F97316/ffffff?text=Product+2",
    },
    {
      id: 3,
      name: "Elegant Watch",
      price: 3499,
      image: "https://placehold.co/400x300/10B981/ffffff?text=Product+3",
    },
    {
      id: 4,
      name: "Travel Backpack",
      price: 1299,
      image: "https://placehold.co/400x300/EAB308/ffffff?text=Product+4",
    },
    {
      id: 5,
      name: "Wireless Mouse",
      price: 799,
      image: "https://placehold.co/400x300/EC4899/ffffff?text=Product+5",
    },
    {
      id: 6,
      name: "Coffee Mug",
      price: 299,
      image: "https://placehold.co/400x300/06B6D4/ffffff?text=Product+6",
    },
  ];

  return (
    <div className="bg-gray-50 font-sans min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold text-gray-800">
            ShopSwift
          </a>
          
          {/* Navigation Links */}
          <div className="hidden sm:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-200">Men</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-200">Women</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-200">Beauty</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-200">Electronics</a>
          </div>

          {/* Mobile Menu Button */}
          <button className="sm:hidden text-gray-600 hover:text-indigo-600">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 text-gray-900">
            Explore Our Collection
          </h1>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                {/* Product Image with Rounded Corners */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 sm:h-64 object-cover"
                />

                {/* Product Info and Call to Action */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    {product.name}
                  </h2>
                  <p className="text-lg font-semibold text-gray-600 mb-4">
                    ₹{product.price}
                  </p>
                  <Link
                    to={`/products/${product.id}`}
                    className="block w-full text-center bg-indigo-600 text-white font-medium py-3 px-4 rounded-full hover:bg-indigo-700 transition-colors duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
