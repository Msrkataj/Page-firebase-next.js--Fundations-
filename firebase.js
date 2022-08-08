// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyAkLqjCWRs6Rozw77EucXKYYAyfPOg2G-g",
    authDomain: "portfolio-6c6f7.firebaseapp.com",
    projectId: "portfolio-6c6f7",
    storageBucket: "portfolio-6c6f7.appspot.com",
    messagingSenderId: "526783203585",
    appId: "1:526783203585:web:f417f0abb32aa724373300",
    measurementId: "G-QBLY29P6X6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app)