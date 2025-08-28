import React, { createContext, useContext, useState } from "react";
const AuthCtx = createContext(null);
export const useAuth = () => useContext(AuthCtx);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [user, setUser] = useState(token ? { email: localStorage.getItem("email") } : null);

  const login = ({ token, email }) => {
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
    setToken(token); setUser({ email });
  };
  const logout = () => {
    localStorage.removeItem("token"); localStorage.removeItem("email");
    setToken(null); setUser(null);
  };

  return <AuthCtx.Provider value={{ token, user, login, logout }}>{children}</AuthCtx.Provider>;
}
