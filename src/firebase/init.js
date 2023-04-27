// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1yWFscM0krV5wkKQrYOhk6UlUD3nYzJc",
  authDomain: "fir-proj-d6775.firebaseapp.com",
  projectId: "fir-proj-d6775",
  storageBucket: "fir-proj-d6775.appspot.com",
  messagingSenderId: "185925319555",
  appId: "1:185925319555:web:07f4c3048dd991c0e114b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();