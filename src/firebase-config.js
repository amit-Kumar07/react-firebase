// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBluAj7QqZ-uhGWMNGzgjfwBuUmxbeigHg",
  authDomain: "react-firebase-a1aa7.firebaseapp.com",
  projectId: "react-firebase-a1aa7",
  storageBucket: "react-firebase-a1aa7.appspot.com",
  messagingSenderId: "469623994764",
  appId: "1:469623994764:web:8864b451a63457ca917ea9",
  measurementId: "G-P9F4EBLKN7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
