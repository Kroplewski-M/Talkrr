// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.VITE_FIRBASE_API_KEY,
  authDomain: "talkrr-4892d.firebaseapp.com",
  projectId: "talkrr-4892d",
  storageBucket: "talkrr-4892d.appspot.com",
  messagingSenderId: "724772506961",
  appId: "1:724772506961:web:b4f44ff887f984f4fed770",
  measurementId: "G-80QB23B900"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const analytics = getAnalytics(app);
export const storage = getStorage();
export const db = getFirestore();