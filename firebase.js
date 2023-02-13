// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMrB_TSg_03K30wqwBUPgClop3ZNLcUBI",
  authDomain: "ios-app-b7d74.firebaseapp.com",
  projectId: "ios-app-b7d74",
  storageBucket: "ios-app-b7d74.appspot.com",
  messagingSenderId: "449275169324",
  appId: "1:449275169324:web:3c8daeeb9829ab96881f89",
};

// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
