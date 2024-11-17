import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";

export const AuthContex = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [watches, setWatches] = useState([]);
  console.log(user);
  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => setWatches(data))
      .catch((error) => console.error("Error loading the data:", error));
  }, []);

  // login system with google firebase
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

const logOut =()=>{
  return signOut(auth)
}


  const authInfo = {
    user,
    setUser,
    watches,
    createNewUser,
    logOut
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  return <AuthContex.Provider value={authInfo}>{children}</AuthContex.Provider>;
};

export default AuthProvider;
