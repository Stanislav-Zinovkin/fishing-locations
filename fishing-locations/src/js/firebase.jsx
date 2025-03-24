// firebase.js
import firebase from "firebase/app";
import "firebase/auth"; // Для аутентифікації

const firebaseConfig = {
  apiKey: "AIzaSyBWicEbfZURMxFyMAeofZJdFoCb4LoOVw0",
  authDomain: "authentication-project-30076.firebaseapp.com",
  projectId: "authentication-project-30076",
  storageBucket: "authentication-project-30076.appspot.com",
  messagingSenderId: "1507964048",
  appId: "1:1507964048:web:2c88d7f5a2c7bf877b5415",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();

export { auth };
