// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1ZKPHaqpKiJ5xr21nrF6QUBtXNiZuYoE",
  authDomain: "languageapp-ea0de.firebaseapp.com",
  projectId: "languageapp-ea0de",
  storageBucket: "languageapp-ea0de.appspot.com",
  messagingSenderId: "1091002582669",
  appId: "1:1091002582669:web:cd2d810f21f3d7e902c4c4",
  measurementId: "G-LGGZZ7YWBW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);