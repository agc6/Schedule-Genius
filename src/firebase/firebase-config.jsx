import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBaddwW8WvnpT5uGucrR49vEh-7yf8KvW0",
  authDomain: "localhost",
  projectId: "schedulegenius-v2",
  storageBucket: "dummy-authDomain.firebaseapp.com", //not setup
  messagingSenderId: "123456789012", //not setup
  appId: "1:123456789012:web:7c7abae699b868b7f896ec", //not setup
  measurementId: "G-ABCDEFGHIJ" //not setup
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);