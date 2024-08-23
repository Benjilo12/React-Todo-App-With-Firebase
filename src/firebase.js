// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6eK9MLgohn6YdB1wPObwtQcGGLsn5l8c",
  authDomain: "todolist-react-9516c.firebaseapp.com",
  projectId: "todolist-react-9516c",
  storageBucket: "todolist-react-9516c.appspot.com",
  messagingSenderId: "882623394924",
  appId: "1:882623394924:web:b29360c0e0c1dff9e75449",
  measurementId: "G-YBQTSQWCJQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
