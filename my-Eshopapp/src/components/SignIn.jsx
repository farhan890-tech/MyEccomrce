import React, { useState } from "react";
import "../components/SignIn.css"; // import css file

export default function SignIn({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // For now, just check dummy login
    if (email === "user@example.com" && password === "123456") {
      alert("Login successful ✅");
      if (onLogin) onLogin(email);
    } else {
      alert("Invalid email or password ❌");
    }
  };

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="signin-btn">Login</button>
      </form>
    </div>
  );
}
