// Import the functions you need from the SDKs you need
import type { FirebaseOptions } from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyAiCCt6xD55a0AhEJOFPganP93BRfdhIKk",
  authDomain: "saas-tribe.firebaseapp.com",
  projectId: "saas-tribe",
  storageBucket: "saas-tribe.appspot.com",
  messagingSenderId: "874505685115",
  appId: "1:874505685115:web:42dfca5559272f7757bade",
  measurementId: "G-VZJ1V9D3L2",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAnalytics = getAnalytics(firebaseApp);
export const firebaseAuth = getAuth(firebaseApp);
