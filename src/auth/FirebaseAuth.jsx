// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7GbFGs4luZ6wcrFgt7MfGwP2gdCyXQJk",
  authDomain: "arteyvidagarden-1ecd8.firebaseapp.com",
  projectId: "arteyvidagarden-1ecd8",
  storageBucket: "arteyvidagarden-1ecd8.firebasestorage.app",
  messagingSenderId: "17845789681",
  appId: "1:17845789681:web:8176c206a76fdc80e05a50",
  measurementId: "G-V3S5W8NDGS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);