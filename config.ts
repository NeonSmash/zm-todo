// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyAOXYd2AoFXf8x3wSSLbj7lw3dJFSD9OPg",
  authDomain: "angular-83958.firebaseapp.com",
  projectId: "angular-83958",
  storageBucket: "angular-83958.firebasestorage.app",
  messagingSenderId: "965344151456",
  appId: "1:965344151456:web:061dfe404de500fbbbc6c5",
  measurementId: "G-RPZX3112R7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);