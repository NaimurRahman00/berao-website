import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ContextData = createContext(null);

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userPhoto, setUserPhoto] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [loading, setLoading] = useState(true);

  // Registration
  const register = (email, password, name, photoURL) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        if (result) {
          success("Registration successful!");
        }
        setUserPhoto(photoURL);
        setUserName(name);
        setUserEmail(email);
      })
      .catch((error) => {
        if (error) {
          notify("Sorry! This email is already in use!");
        }
      });
  };
  // Login with email
  const login = (email, password) => {
    setLoading(true);
  };

  // Update profile
  const update = (name, photoURL, setOpenModal2) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        setUserName(name);
        success("Profile updated");
        setOpenModal2(false);
      })
      .catch(() => {});
  };

  // Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
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

  // Modal
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [openModal]);

  const authInfo = {
    login,
    register,
    currentUser,
    logOut,
    notify,
    success,
    loading,
    userPhoto,
    userName,
    openModal,
    setOpenModal,
    userEmail,
    update
  };

  return (
    <ContextData.Provider value={authInfo}>{children}</ContextData.Provider>
  );
};

export default AuthProvider;
