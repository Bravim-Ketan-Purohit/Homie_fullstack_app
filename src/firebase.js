// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARoy0kfY_sbdroyfEi_N7PXg1FAbCa_9s",
  authDomain: "homie-the-home-app.firebaseapp.com",
  projectId: "homie-the-home-app",
  storageBucket: "homie-the-home-app.appspot.com",
  messagingSenderId: "180995452451",
  appId: "1:180995452451:web:401bee44863fee9ca4cb96",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()
