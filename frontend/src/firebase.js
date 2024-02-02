// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "dessert-love-shop.firebaseapp.com",
  projectId: "dessert-love-shop",
  storageBucket: "dessert-love-shop.appspot.com",
  messagingSenderId: "521459286614",
  appId: "1:521459286614:web:02633a5dd3b7803c7f71f7",
  measurementId: "G-PZHVCHJDFY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
