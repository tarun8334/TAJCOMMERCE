// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzvZXFSHIfk5roHM6O_z5cS37b2WuZZWg",
  authDomain: "tajcommerce-3d61f.firebaseapp.com",
  projectId: "tajcommerce-3d61f",
  storageBucket: "tajcommerce-3d61f.appspot.com",
  messagingSenderId: "654820163427",
  appId: "1:654820163427:web:47eba70aad080da8cb1d56",
  measurementId: "G-WXHNNCY5KP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);

export default fireDB;
