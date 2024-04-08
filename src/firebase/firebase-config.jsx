// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
//import { getAnalytics } fsrom "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaddwW8WvnpT5uGucrR49vEh-7yf8KvW0",
  authDomain: "schedulegenius-v2.firebaseapp.com",
  projectId: "schedulegenius-v2",
  storageBucket: "schedulegenius-v2.appspot.com",
  messagingSenderId: "469542297163",
  appId: "1:469542297163:web:f871ec22dd609e0873b7ce",
  measurementId: "G-Q826G5TS9G"
};

// Initialize Firebase
export const firebaseapp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseapp);
export default firestoreDB = getFirestore(firebaseapp);

connectAuthEmulator(auth, "http://localhost:9099");
//const analytics = getAnalytics(firebaseapp);