// firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArekZ2aspQYrm7apuPMZOcQcSRlyyeEeM",
  authDomain: "clinicalskillsbook.firebaseapp.com",
  databaseURL: "https://clinicalskillsbook-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "clinicalskillsbook",
  storageBucket: "clinicalskillsbook.appspot.com",
  messagingSenderId: "721423214230",
  appId: "1:721423214230:web:9711641e192ad303ecc4b7",
  measurementId: "G-74JZ6DEKR7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
//const firestore = getFirestore(app);

// Initialize Firebase

// Define the signIn function
function signInUser() {
  const email = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // User signed in successfully
      const user = userCredential.user;

      // Add actions upon successful sign-in
      console.log(`Welcome, ${user.email}!`);

      // Redirect to the index.html page
      window.location.href = "index.html";
    })
    .catch((error) => {
      // Handle sign-in failure
      console.error(error.message);

      // Display an error message to the user
      alert("Sign-in failed. Please check your username and password.");
    });
}



