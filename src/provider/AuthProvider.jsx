import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import auth from "../firebase/firebase.init";

export const ContextData = createContext(null);

const AuthProvider = ({children}) => {
    const login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password);
    }

    const register = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {
        login,
        register
    }

    return (
        <ContextData.Provider value={authInfo}>
            {children}
        </ContextData.Provider>
    );
};

export default AuthProvider;