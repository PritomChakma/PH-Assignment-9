import { createContext, useEffect, useState } from "react";

export const AuthContex = createContext();
const AuthProvider = ({ children }) => {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => setWatches(data))
      .catch((error) => console.error("Error loading the data:", error));
  }, []);

  const authInfo = {
    watches,
  };

  return <AuthContex.Provider value={authInfo}>{children}</AuthContex.Provider>;
};

export default AuthProvider;
