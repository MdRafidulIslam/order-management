// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnfZjJ8yPs062iFfA4PXsSq7g75jAnrlE",
  authDomain: "user-order-management.firebaseapp.com",
  projectId: "user-order-management",
  storageBucket: "user-order-management.firebasestorage.app",
  messagingSenderId: "179961468826",
  appId: "1:179961468826:web:581144eaf844bba8714c23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);