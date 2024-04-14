import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ContextData = createContext(null);

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Registration
  const register = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        if (result) {
          success("Registration successful!");
        }
      })
      .catch((error) => {
        if (error) {
          notify("Sorry! This email is already in use!");
        }
      });
  };
  // Login
  const login = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        if (result) {
          success("Login successful!");
        }
      })
      .catch((error) => {
        if (error) {
          notify("Invalid email or password!");
        }
      });
  };
  // Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false)
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // Log out
  const logOut = () => {
    return signOut(auth);
  };
  // Toastify
  const notify = (error) => {
    toast.error(error, {
      position: "top-right",
    });
  };

  const success = (success) => {
    toast.success(success, {
      position: "top-right",
    });
  };

  const authInfo = {
    login,
    register,
    currentUser,
    logOut,
    notify,
    success,
    loading,
  };

  return (
    <ContextData.Provider value={authInfo}>{children}</ContextData.Provider>
  );
};

export default AuthProvider;
