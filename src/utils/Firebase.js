// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "netflix-gpt-b2e4d.firebaseapp.com",
  projectId: "netflix-gpt-b2e4d",
  storageBucket: "netflix-gpt-b2e4d.appspot.com",
  messagingSenderId: "646377121957",
  appId: "1:646377121957:web:c85d89f0d2e74d9a93454c",
  measurementId: "G-EVE84MGQHD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
