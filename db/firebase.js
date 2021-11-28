// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDj5DeNSuoqUxh1Im1ijKjjZprLTkuOqk0",
  authDomain: "dygym-f1007.firebaseapp.com",
  projectId: "dygym-f1007",
  storageBucket: "dygym-f1007.appspot.com",
  messagingSenderId: "628636479567",
  appId: "1:628636479567:web:fc2afb90a1e9ae6973ba3a",
  measurementId: "G-SSFSFKS9YE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
