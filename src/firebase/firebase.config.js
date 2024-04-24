// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0Pzdal19AhuLOq9QWj4eCnfDQ3Fsyd38",
  authDomain: "fir-project-d9040.firebaseapp.com",
  projectId: "fir-project-d9040",
  storageBucket: "fir-project-d9040.appspot.com",
  messagingSenderId: "248857002306",
  appId: "1:248857002306:web:202f30be8f57e6d99308db",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
