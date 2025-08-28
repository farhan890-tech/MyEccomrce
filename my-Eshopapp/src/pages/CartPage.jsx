// src/pages/CartPage.jsx
import React from "react";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { items, remove, total } = useCart();

  return (
    <div>
      <h1>Your Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price} × {item.qty}
              <button onClick={() => remove(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h2>Total: ${total}</h2>
    </div>
  );
};

export default CartPage;
