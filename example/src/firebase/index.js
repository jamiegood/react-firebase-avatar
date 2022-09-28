// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWzJ6ndkwGxg4osanBoMY8GNzn-nc5xlU",
  authDomain: "dev2dev-184c2.firebaseapp.com",
  databaseURL:
    "https://dev2dev-184c2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "dev2dev-184c2",
  storageBucket: "dev2dev-184c2.appspot.com",
  messagingSenderId: "630811241733",
  appId: "1:630811241733:web:3b275b347eb889b7dcdb6c",
  measurementId: "G-F19Y04ZN6S",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(firebaseApp);
export { firebaseApp, auth };