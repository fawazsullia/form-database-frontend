// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKr5quT-ma_HFomNUBffV1kXa14F1ijLM",
  authDomain: "form-database-8acb4.firebaseapp.com",
  projectId: "form-database-8acb4",
  storageBucket: "form-database-8acb4.appspot.com",
  messagingSenderId: "443554657588",
  appId: "1:443554657588:web:42c615fc6f988bad902161"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase