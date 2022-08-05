// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAkLqjCWRs6Rozw77EucXKYYAyfPOg2G-g",
    authDomain: "portfolio-6c6f7.firebaseapp.com",
    projectId: "portfolio-6c6f7",
    storageBucket: "portfolio-6c6f7.appspot.com",
    messagingSenderId: "526783203585",
    appId: "1:526783203585:web:97aa616d33eee92f373300",
    measurementId: "G-FD2347KNZ6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);