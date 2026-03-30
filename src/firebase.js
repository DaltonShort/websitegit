// Firebase configuration and initialization for Google Auth
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA5KrnNmmx_IG_-CqFXQOHoavW5TGaU-Ls",
  authDomain: "websitegit.firebaseapp.com",
  projectId: "websitegit",
  storageBucket: "websitegit.appspot.com",
  messagingSenderId: "1028088781697",
  appId: "1:1028088781697:web:047ea91606bf716616a680",
  measurementId: "G-RL9L9LEG13"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };