import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBaddwW8WvnpT5uGucrR49vEh-7yf8KvW0",
  authDomain: "schedulegenius-v2.firebaseapp.com",
  projectId: "schedulegenius-v2",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);