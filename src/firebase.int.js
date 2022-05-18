// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkoYVLK9wYmCsWtraCau0_21i6mvLwV3c",
  authDomain: "doctor-portals-c214e.firebaseapp.com",
  projectId: "doctor-portals-c214e",
  storageBucket: "doctor-portals-c214e.appspot.com",
  messagingSenderId: "115262426197",
  appId: "1:115262426197:web:75861f6fa7230a4afb18dc"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;