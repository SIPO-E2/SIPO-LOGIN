// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDhqE4ApH6C-58XPOKv5i_KeQdlRVEGrE",
  authDomain: "tutoauth-b6c58.firebaseapp.com",
  projectId: "tutoauth-b6c58",
  storageBucket: "tutoauth-b6c58.appspot.com",
  messagingSenderId: "385231985379",
  appId: "1:385231985379:web:7d8df18d48ad929f60c3d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app)

export default app;