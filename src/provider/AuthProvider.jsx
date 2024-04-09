import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";

export const ContextData = createContext(null);

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  console.log(currentUser);

  // Registration
  const register = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user.user);
      })
      .catch((error) => console.error(error));
  };
  // Login
  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user.user);
      })
      .catch((error) => console.error(error));
  };
  // Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    login,
    register,
    currentUser,
  };

  return (
    <ContextData.Provider value={authInfo}>{children}</ContextData.Provider>
  );
};

export default AuthProvider;
