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
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user.user);
      })
      .catch();
  };
  // Login
  const login = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then()
      .catch( notify("Invalid password or email!"));
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
    }
    // Toastify
    const notify = error => {
        toast.error(error, {
            position: "top-right"
          });
    };

  const authInfo = {
    login,
    register,
    currentUser,
    logOut,
    loading,
    notify
  };

  return (
    <ContextData.Provider value={authInfo}>{children}</ContextData.Provider>
  );
};

export default AuthProvider;
