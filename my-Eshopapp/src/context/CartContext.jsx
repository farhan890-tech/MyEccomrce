// src/context/CartContext.jsx
import React, { createContext, useContext, useMemo, useState } from "react";

const CartCtx = createContext(null);

// ✅ custom hook
export const useCart = () => useContext(CartCtx);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]); // {id, name, price, qty, image, slug}

  const add = (p, qty = 1) => {
    setItems(curr => {
      const idx = curr.findIndex(i => i.id === p.id);
      if (idx >= 0) {
        const copy = [...curr];
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + qty };
        return copy;
      }
      return [...curr, { ...p, qty }];
    });
  };

  const remove = id => setItems(curr => curr.filter(i => i.id !== id));
  const updateQty = (id, qty) =>
    setItems(curr => curr.map(i => (i.id === id ? { ...i, qty } : i)));
  const clear = () => setItems([]);

  const total = useMemo(
    () => items.reduce((s, i) => s + i.price * i.qty, 0),
    [items]
  );

  return (
    <CartCtx.Provider value={{ items, add, remove, updateQty, clear, total }}>
      {children}
    </CartCtx.Provider>
  );
}
