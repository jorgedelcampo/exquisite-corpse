// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrLrNcYdZFLKhaCef8JXAxHA9I4rvZQog",
  authDomain: "our-exquisite-corpse.firebaseapp.com",
  projectId: "our-exquisite-corpse",
  storageBucket: "our-exquisite-corpse.appspot.com",
  messagingSenderId: "925558009366",
  appId: "1:925558009366:web:9c83b3621796844ee14f37",
  measurementId: "G-GN4RQ5CPDM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user != null) {
    console.log("Logged in!");
  } else {
    console.log("No user");
  }
});
