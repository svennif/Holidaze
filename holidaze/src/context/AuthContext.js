import React, { createContext, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const existingUser = localStorage.getItem("user") || null;
  const existingAdmin = localStorage.getItem("admin") || null;

  const [admin, setAdmin] = useState(existingAdmin);
  const [user, setUser] = useState(existingUser);

  function registerAdmin(username) {
    localStorage.setItem("admin", JSON.stringify(username));
    setAdmin(username);
  }

  function registerUser(username) {
    localStorage.setItem("user", JSON.stringify(username));
    setUser(username);
  }

  function logout() {
    setAdmin(null);
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("admin");
  }

  return (
    <AuthContext.Provider
      value={{ admin, user, registerAdmin, registerUser, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
