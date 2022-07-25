import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB-zEdgVm6Zm7BudWom8uGOjVh40pbl0sA",
  authDomain: "firecommerce-e4e44.firebaseapp.com",
  projectId: "firecommerce-e4e44",
  storageBucket: "firecommerce-e4e44.appspot.com",
  messagingSenderId: "738592945840",
  appId: "1:738592945840:web:4b3c0250ac474c14b52d75",
  measurementId: "G-Z5CC4G8X9M"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const fireDB = getFirestore(app)
export default fireDB
