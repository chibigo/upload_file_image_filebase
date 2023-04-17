// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9KNU92jA2N6vi9gzyh-xjCiiHcL9MBpU",
  authDomain: "upload-post.firebaseapp.com",
  projectId: "upload-post",
  storageBucket: "upload-post.appspot.com",
  messagingSenderId: "40259648732",
  appId: "1:40259648732:web:78eecc3010936a93870819",
  measurementId: "G-31F39D6X0F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);