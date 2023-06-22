// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv5VTSRK8-5ym5QDRzlAP5_utkpDThpY8",
  authDomain: "movie-project-f2be1.firebaseapp.com",
  projectId: "movie-project-f2be1",
  storageBucket: "movie-project-f2be1.appspot.com",
  messagingSenderId: "204754049857",
  appId: "1:204754049857:web:8809c84bfa670995ebdfc0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
