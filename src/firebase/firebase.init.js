// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKhsuX-AxZlmbbtpkHK0NGM4gdS4G-MA0",
  authDomain: "berao-na.firebaseapp.com",
  projectId: "berao-na",
  storageBucket: "berao-na.appspot.com",
  messagingSenderId: "254009314042",
  appId: "1:254009314042:web:eec7643733cf004fc91743"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;