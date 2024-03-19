// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "marikomerc-8ef38.firebaseapp.com",
  projectId: "marikomerc-8ef38",
  storageBucket: "marikomerc-8ef38.appspot.com",
  messagingSenderId: "361820282350",
  appId: "1:361820282350:web:3368d4a23409da080482ff",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
