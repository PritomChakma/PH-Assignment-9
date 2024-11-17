// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYLadoeHbWPCt7yk7aiRIflgJCPvVpePQ",
  authDomain: "ph-assignment-9-626ca.firebaseapp.com",
  projectId: "ph-assignment-9-626ca",
  storageBucket: "ph-assignment-9-626ca.firebasestorage.app",
  messagingSenderId: "137837955196",
  appId: "1:137837955196:web:f57a8157a35713cd1be1f9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
