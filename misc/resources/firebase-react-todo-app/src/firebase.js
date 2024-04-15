// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbtlUyjWEuHxdotAsw9iTyHNJra4wnoQo",
  authDomain: "todo-app-tutorial1.firebaseapp.com",
  projectId: "todo-app-tutorial1",
  storageBucket: "todo-app-tutorial1.appspot.com",
  messagingSenderId: "555855032099",
  appId: "1:555855032099:web:0e73a1b015e9d5be97a696"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);