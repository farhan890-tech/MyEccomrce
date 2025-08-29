import React, { useEffect, useState } from "react";


/**
 * ProductPage with:
 * - add product form
 * - local state + localStorage persistence
 * - simple product list UI
 * - example backend calls (commented) if you want to connect to API
 */

const emptyForm = { name: "", price: "", image: "", desc: "" };

export default function ProductPage() {
  const [form, setForm] = useState(emptyForm);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // On mount: load from localStorage (Option A) OR fetch from backend (Option B)
  useEffect(() => {
    // OPTION A: localStorage
    const saved = localStorage.getItem("products");
    if (saved) {
      try {
        setProducts(JSON.parse(saved));
      } catch (e) {
        console.error("invalid products in localStorage", e);
        setProducts([]);
      }
    }

    // OPTION B: Uncomment to fetch from backend API instead
    // fetchProductsFromApi();
  }, []);

  // Persist to localStorage when products change (Option A)
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  // Example: fetch from backend
  async function fetchProductsFromApi() {
    setLoading(true);
    try {
      // replace URL with your backend endpoint
      // const res = await fetch("http://localhost:5000/api/products");
      // const data = await res.json();
      // setProducts(data);
    } catch (err) {
      console.error("fetchProductsFromApi", err);
    } finally {
      setLoading(false);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const validateForm = () => {
    if (!form.name.trim()) return "Name is required";
    if (!form.price || isNaN(Number(form.price))) return "Valid price is required";
    return null;
  };

  // Add product (Option A: localStorage)
  const addProductLocal = () => {
    const err = validateForm();
    if (err) return alert(err);

    const newProduct = {
      id: Date.now(),
      name: form.name.trim(),
      price: Number(form.price),
      image: form.image.trim() || null,
      desc: form.desc.trim(),
      createdAt: new Date().toISOString(),
    };
    setProducts((p) => [newProduct, ...p]);
    setForm(emptyForm);
  };

  // Add product (Option B: backend)
  const addProductBackend = async () => {
    const err = validateForm();
    if (err) return alert(err);

    try {
      setLoading(true);
      // POST to your backend. Replace URL and body shape as per your API.
      // const res = await fetch("http://localhost:5000/api/products", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     title: form.name,
      //     price: Number(form.price),
      //     description: form.desc,
      //     images: form.image ? [form.image] : []
      //   })
      // });
      // const created = await res.json();
      // // Option: reload list from backend:
      // await fetchProductsFromApi();

      // For now (if backend not ready) fallback to local add:
      addProductLocal();
    } catch (err) {
      console.error("addProductBackend", err);
      alert("Failed to add product to server. See console.");
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();
    // toggle which you want:
    // addProductBackend(); // use backend
    addProductLocal(); // use localStorage (quick)
  };

  const removeProduct = (id) => {
    if (!confirm("Remove this product?")) return;
    setProducts((p) => p.filter((x) => x.id !== id));

    // If using backend:
    // await fetch(`http://localhost:5000/api/products/${id}`, { method: "DELETE" })
    // then refresh list
  };

  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ fontSize: 32, marginBottom: 10 }}>Our Products</h1>

      <form onSubmit={handleAdd} style={{ marginBottom: 18 }}>
        <input
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
          style={{ width: 200, marginRight: 8 }}
        />
        <input
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          style={{ width: 120, marginRight: 8 }}
        />
        <input
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
          style={{ width: 240, marginRight: 8 }}
        />
        <input
          name="desc"
          placeholder="Description"
          value={form.desc}
          onChange={handleChange}
          style={{ width: 300, marginRight: 8 }}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Adding…" : "Add Product"}
        </button>
      </form>

      {loading && <p>Loading…</p>}

      {products.length === 0 ? (
        <p>No products found <span style={{ marginLeft: 6 }}>🛍️</span></p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
          {products.map((p) => (
            <div key={p.id} style={{ border: "1px solid #eee", padding: 12, borderRadius: 8, background: "#fff" }}>
              {p.image ? (
                // if image is invalid, browser will show broken image icon; that's okay for testing
                <img src={p.image} alt={p.name} style={{ width: "100%", height: 140, objectFit: "cover", borderRadius: 6 }} />
              ) : (
                <div style={{ width: "100%", height: 140, display: "flex", alignItems: "center", justifyContent: "center", background: "#fafafa", borderRadius: 6 }}>
                  <span style={{ opacity: 0.5 }}>No image</span>
                </div>
              )}

              <h3 style={{ marginTop: 10 }}>{p.name}</h3>
              <p style={{ margin: "6px 0" }}>${p.price}</p>
              {p.desc && <p style={{ color: "#555", fontSize: 14 }}>{p.desc}</p>}

              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10 }}>
                <button onClick={() => removeProduct(p.id)} style={{ color: "red" }}>
                  Remove
                </button>
                <button onClick={() => {
                  // Quick "add to cart" stub — if you have CartContext use it here
                  alert("Use your Add-to-Cart implementation here.");
                }}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
